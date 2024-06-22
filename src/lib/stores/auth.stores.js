import { writable } from "svelte/store";

const authStore = writable({jwtToken: ""});

export default {
    subscribe: authStore.subscribe,
    jwtToken: (token) => {
        authStore.set({jwtToken: token});
    }
}