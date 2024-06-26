import {goto} from "$app/navigation";
import {refreshToken} from "$lib/auth/refreshToken.js";

/**
 * @param {URL} url
 * @param {string} token
 */
export async function afterLogin(url, token) {

    const route = url.searchParams.get('redirect') || '/'

    await fetch('/token', {
        method: 'POST',
        body: JSON.stringify({ token })
    });

    if (token === "") {
        console.log("disable token refresh")
        refreshToken(false)
    } else {
        console.log("enable token refresh")
        refreshToken(true)
    }

    console.log("going to", route);
    await goto(route)
}