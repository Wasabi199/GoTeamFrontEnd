<template>
    <div class="p-20">
        <div class="p-20 border rounded-md space-y-5 shadow-md">
            <div class="text-center text-3xl font-bold ">LOGIN</div>
            <div class="w-full">
                <form @submit.prevent="submit">
                    <div class=" w-full text-center">
                        <input v-model="form.email" type="text"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Username" />
                        <br>
                        <label class="text-center">Username</label>
                    </div>
                    <div class=" w-full text-center">
                        <input v-model="form.password" type="password"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Password" />
                        <br>
                        <label class="text-center">Password</label>
                    </div>
                    <div class="flex flex-col m-auto w-fit gap-y-5 mt-10">
                        <button type="submit" class="p-4 bg-green-400 font-bold hover:text-white rounded-sm">SIGN
                            IN</button>
                        <div>Don't have an Account?</div>
                        <NuxtLink class="m-auto" to="/register">
                            <button type="button"
                                class="m-auto w-fit p-4 bg-blue-400 font-bold hover:text-white rounded-sm">SIGN UP</button>
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useAuthStore } from '@/Store/useAuthStore';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
export default {
    setup() {

    },
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            Token: localStorage.getItem('token')
        }
    },
    beforeMount() {
        this.checkauth()
    },
    methods: {
        checkauth() {
            if (localStorage.getItem('auth')) {
                this.$router.push('/dashboard')
            }
        },
        async submit() {
            const auth = useAuthStore();
            const data = await auth.login(this.form);

            if(data.error.value){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error.value?.data.error.user,
                })
            }
            
            if (auth.isLoggedIn) {
                localStorage.setItem('token', auth.token.token);
                localStorage.setItem('auth', true);
                this.$router.push('/dashboard')
            }

        }

    }

}
</script>