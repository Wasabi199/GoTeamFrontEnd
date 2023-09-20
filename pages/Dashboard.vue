<template>
    <div class="p-20 space-y-5">
        <div class="flex justify-between font-bold text-4xl">
            <div>TASK</div>
            <div>
                <svg @click="create" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-10 h-10 text-green-500 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </div>
        </div>
        <div class="space-y-4">
            <input @change="this.listData()" type="text" class="w-full h-10 border px-2 text-lg" placeholder="Search"
                v-model="this.filter.search">
            <div v-for="data in this.Data" v-bind:key="data.key"
                class="flex p-5 justify-between w-full shadow-md min-h-20 h-fit">
                <div class="">
                    <div class="font-bold text-3xl">{{ data.title }} </div>
                    <div class="font-bold">{{ data.deadline }}</div>
                    <div>{{ data.description }}</div>
                </div>
                <div class="h-fit p-4 space-y-2">
                    <input @change="taskToUpdateStatus(data.id, data.status)" :checked="data.status" class=""
                        type="checkbox" />

                    <!-- <svg @click="this.updateTaskData(data)" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg> -->

                    <svg @click="this.updateTaskData(data)" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>


                    <svg @click="taskToDelete(data.id)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                </div>
            </div>
        </div>
        <div class="flex justify-between">
            <button @click="logout()" class="py-2 px-5 bg-red-500 text-white rounded-md text-lg"> Log out</button>
            <NuxtLink  to="/GoTeam">
                <button class="py-2 px-5 bg-blue-500 text-white rounded-md text-lg"> GoTeam Page</button>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useAuthStore } from '@/Store/useAuthStore';

import 'sweetalert2/src/sweetalert2.scss'
export default {
    setup() {

    },
    components: {
        Swal
    },
    data() {
        return {
            Data: Array,
            filter: {
                search: ''
            },
            form: {
                title: '',
                description: '',
                deadline: ''
            },
            taskToUpdateForm: {
                id: Number,
                status: Boolean
            },
            taskToDeleteForm: {
                id: Number
            },
            taskToUpdateData: {
                id: Number,
                title: String,
                description: String,
                deadline: String
            }
        }
    },

    beforeMount() {
        setTimeout(this.listData, 1000);
    },
    methods: {
        async create() {
            await Swal.fire({
                title: 'Enter Task Details',
                html:
                    '<input id="title" class="swal2-input" placeholder="Title">' +
                    '<textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>' +
                    '<input type="date" id="deadline" class="swal2-input">',
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Submit',
                cancelButtonText: 'Cancel',
                preConfirm: async () => {
                    this.form.title = Swal.getPopup().querySelector('#title').value;
                    this.form.description = Swal.getPopup().querySelector('#description').value;
                    this.form.deadline = Swal.getPopup().querySelector('#deadline').value;

                    // You can perform actions with the input values here



                }
            }).then(async (result) => {

                if (result.isConfirmed) {
                    const auth = useAuthStore();
                    const { data } = await auth.createTask(this.form);
                    Swal.fire(
                        'Created!',
                        'Your Task has been created.',
                        'success'

                    )
                }

                this.listData();

            });
        },

        async listData() {
            const auth = useAuthStore()
            const { data } = await auth.fetchTask(this.filter)
            this.Data = auth.task?.data.task;
        },

        async taskToUpdateStatus(id, status) {
            this.taskToUpdateForm.id = id;
            this.taskToUpdateForm.status = !status

            const auth = useAuthStore();
            const { data } = await auth.updateTask(this.taskToUpdateForm);

            console.log(data);

        },

        taskToDelete(id) {
            this.taskToDeleteForm.id = id
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const auth = useAuthStore();
                    const data = await auth.deleteTask(this.taskToDeleteForm);
                    Swal.fire(
                        'Deleted!',
                        'Your Task has been deleted.',
                        'success'
                    )
                    this.listData();

                }
            })
        },

        async updateTaskData(data) {
            this.taskToUpdateData.id = data.id;

            await Swal.fire({
                title: 'Enter Task Details',
                html:
                    '<input id="title" class="swal2-input" placeholder="Title">' +
                    '<textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>' +
                    '<input type="date" id="deadline" class="swal2-input">',
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: 'Update',
                cancelButtonText: 'Cancel',
                preConfirm: async () => {
                    this.taskToUpdateData.title = Swal.getPopup().querySelector('#title').value;
                    this.taskToUpdateData.description = Swal.getPopup().querySelector('#description').value;
                    this.taskToUpdateData.deadline = Swal.getPopup().querySelector('#deadline').value;

                    // You can perform actions with the input values here
                    this.taskToUpdateData.title != '' ? this.taskToUpdateData.title : this.taskToUpdateData.title = data.title;
                    this.taskToUpdateData.description != '' ? this.taskToUpdateData.description : this.taskToUpdateData.description = data.description;
                    this.taskToUpdateData.deadline != '' ? this.taskToUpdateData.deadline : this.taskToUpdateData.deadline = data.deadline;
                }
            }).then(async (result) => {

                if (result.isConfirmed) {
                    const auth = useAuthStore();
                    const data = await auth.updateTaskData(this.taskToUpdateData);
                    Swal.fire(
                        'Updated!',
                        'Your Task has been updated.',
                        'success'

                    )

                    this.listData();
                }
            });
        },

        logout() {
            localStorage.clear();
            this.$router.push('/login')
        }



    }
}
</script>