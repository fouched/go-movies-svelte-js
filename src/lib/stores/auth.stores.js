import { writable } from "svelte/store";

const authStore = writable({jwtToken: ""});

export default {
    subscribe: authStore.subscribe,
    login: async (username) => {
        if (username === "a") {
            authStore.set({jwtToken: "123"})
        } else {
            authStore.set({jwtToken: ""})
        }
    },
    logout: () => {
        authStore.set({jwtToken: ""})
    }
}