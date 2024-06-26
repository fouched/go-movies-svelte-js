import {json} from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({request, cookies}) {

    const { token } = await request.json()

    if (token !== "") {
        cookies.set('jwt', token, {
            // exp is in seconds
            maxAge: 900, // 15 minutes
            path: '/'
        })
    } else {
        cookies.delete('jwt', {path: '/'});
    }

    return json({ message: 'success'}, { status: 200 })
}