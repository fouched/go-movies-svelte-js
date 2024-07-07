export async function load() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
        method: "GET",
        headers: headers,
    }

    const genres = [];
    await fetch(`http://localhost:9080/genres`, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            data.forEach(g => {
                genres.push({id: g.id, checked: false, genre: g.genre});
            })
        })
        .catch(err => console.log(err));


    return { genres }
}