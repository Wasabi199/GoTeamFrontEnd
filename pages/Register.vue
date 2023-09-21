<template>
    <div class="p-20">
        <div class="p-20 space-y-5 border rounded-md shadow-md">
            <div class="text-3xl font-bold text-center ">REGISTER</div>
            <div class="w-full">
                <form @submit.prevent="submit">
                    <div class="w-full text-center ">
                        <input v-model="form.username" required type="text"
                            class="w-2/4 h-10 px-2 text-black border border-black rounded-md" placeholder="Username" />
                        <br>
                        <label class="text-center">Username</label>
                    </div>
                    <div class="w-full text-center ">
                        <input v-model="form.email" required type="text"
                            class="w-2/4 h-10 px-2 text-black border border-black rounded-md" placeholder="Email" />
                        <br>
                        <label class="text-center">E-mail</label>
                    </div>
                    <div class="w-full text-center ">
                        <input v-model="form.password" required type="password"
                            class="w-2/4 h-10 px-2 text-black border border-black rounded-md" placeholder="Password" />
                        <br>
                        <label class="text-center">Password</label>
                    </div>
                    <div class="w-full text-center ">
                        <input v-model="form.confirm_password" required type="password"
                            class="w-2/4 h-10 px-2 text-black border border-black rounded-md" placeholder="Password" />
                        <br>
                        <label class="text-center">Confirm Password</label>
                    </div>

                    <div class="flex flex-col m-auto mt-10 w-fit gap-y-5">
                        <button type="submit" class="p-4 font-bold bg-blue-400 rounded-sm hover:text-white">SIGN UP</button>
                        <div>Already have an Account?</div>
                        <NuxtLink class="m-auto" to="/login">
                            <button type="button"
                                class="p-4 m-auto font-bold bg-green-400 rounded-sm w-fit hover:text-white">SIGN IN</button>
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
import 'sweetalert2/src/sweetalert2.scss'

export default {
    setup() {

    },
    components: {
        Swal
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    },
    methods: {
        async submit() {
            const auth = useAuthStore();
            const data = await auth.register(this.form);
            this.form.username = ''
            this.form.email = ''
            this.form.password = ''
            this.form.confirm_password = ''

            if (data.error?.value?.data.message === undefined) {
                Swal.fire(
                    data.data.value.message
                )

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error?.value?.data.message,
                })
            }
        }
    }
}
</script>