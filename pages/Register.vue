<template>
    <div class="p-20">
        <div class="p-20 border rounded-md space-y-5 shadow-md">
            <div class="text-center text-3xl font-bold ">REGISTER</div>
            <div class="w-full">
                <form @submit.prevent="submit">
                    <div class=" w-full text-center">
                        <input v-model="form.username" required type="text"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Username" />
                        <br>
                        <label class="text-center">Username</label>
                    </div>
                    <div class=" w-full text-center">
                        <input v-model="form.email" required type="text"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Email" />
                        <br>
                        <label class="text-center">E-mail</label>
                    </div>
                    <div class=" w-full text-center">
                        <input v-model="form.password" required type="password"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Password" />
                        <br>
                        <label class="text-center">Password</label>
                    </div>
                    <div class=" w-full text-center">
                        <input v-model="form.confirm_password" required type="password"
                            class="w-2/4 rounded-md text-black border border-black h-10 px-2" placeholder="Password" />
                        <br>
                        <label class="text-center">Confirm Password</label>
                    </div>

                    <div class="flex flex-col m-auto w-fit gap-y-5 mt-10">
                        <button type="submit" class="p-4 bg-blue-400 font-bold hover:text-white rounded-sm">SIGN UP</button>
                        <div>Already have an Account?</div>
                        <NuxtLink class="m-auto" to="/login">
                            <button type="button"
                                class="m-auto w-fit p-4 bg-green-400 font-bold hover:text-white rounded-sm">SIGN IN</button>
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
            const {data} = await auth.register(this.form);
            console.log(data.value.message);
            this.form.username =''
            this.form.email =''
            this.form.password =''
            this.form.confirm_password =''
            Swal.fire(
                data.value.message
                    )
        }
    }
}
</script>