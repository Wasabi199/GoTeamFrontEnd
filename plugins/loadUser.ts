import { useAuthStore } from "~/Store/useAuthStore"

export default defineNuxtPlugin( async(nuxtApp) => {
    const auth = useAuthStore();

    if(!auth.isLoggedIn){
        await auth.fetchToken();
    }
})
