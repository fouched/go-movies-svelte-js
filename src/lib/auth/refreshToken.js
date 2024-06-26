import authStore from "$lib/stores/auth.store.js";

let intervalId = 0;

/** @param {boolean} enable */
const refreshToken = (enable) => {
    if (enable) {
        intervalId = setInterval(() => {
            const requestOptions = {
                method: "GET",
                credentials: "include"
            }

            // @ts-ignore
            fetch(`http://localhost:9080/refresh`, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    if (data.access_token) {
                        console.log("refreshing Token")
                        authStore.onAuthChanged(true)
                        // we also need to refresh the cookie
                        fetch('/token', {
                            method: 'POST',
                            body: JSON.stringify({ token: data.access_token })
                        });
                    }
                })
                .catch(() => {
                    console.log("user is not logged in");
                    clearInterval(intervalId);
                });
        }, 600000) // 600000 refresh token every 10 minutes
    } else {
        clearInterval(intervalId);
    }
}

export {refreshToken}