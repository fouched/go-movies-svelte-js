import { writable } from "svelte/store";

const authStore = writable({isLoggedIn: false});

export default {
    subscribe: authStore.subscribe,
    onAuthChanged: (isLoggedIn) => {
        authStore.set({isLoggedIn: isLoggedIn});
    }
}