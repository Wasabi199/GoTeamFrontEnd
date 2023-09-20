import { defineStore } from "pinia";
import { useFetchApi } from "~/composables/useApiFetch";

type Token = string;

type Credentials = {
    email: string,
    password: string
}

type Info = {
    username: string,
    email: string,
    password: string,
    confirm_password: string,
}

type Task = {
    title: string,
    description: string,
    deadline: string
}

type UpdateTask = {
    id: number,
    status: boolean,
}

type DeleteTask = {
    id: Number
}

type UpdateTaskData = {
    id: Number,
    title: string,
    description: string,
    deadline: string
}

type Search = {
    search: String
}

export const useAuthStore = defineStore('auth', () => {

    const token = ref<String | null>(null);

    const task = ref<Object | null>(null);

    const isLoggedIn = computed(() => !!token.value);

    async function fetchToken() {
        // token.value = localStorage.getItem('token')??'';
    }


    async function login(credentials: Credentials) {
        await useFetchApi('/sanctum/csrf-cookie');
        const data = await useFetchApi('/api/login', {
            method: 'POST',
            body: credentials,
        })

            token.value = data.data.value as Token
            return data;

    }

    async function register(info: Info) {
        await useFetchApi('/sanctum/csrf-cookie');

        const register = await useFetchApi('/api/register', {
            method: 'POST',
            body: info
        });

        return register
    }

    async function createTask(task: Task) {
        await useFetchApi('/sanctum/csrf-cookie');

        const create = await useFetchApi('/api/create', {
            method: 'POST',
            body: task,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });

        return create
    }

    async function fetchTask(search: Search) {
        const data = await useFetchApi('/api/list', {
            params: {
                'search': search.search == '' ? null : search.search
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

        task.value = data;

        return data
    }


    async function updateTask(updateTask: UpdateTask) {
        const data = await useFetchApi('/api/status', {
            method: 'POST',
            body: updateTask,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })


        return data
    }

    async function deleteTask(deleteTask: DeleteTask) {
        const data = await useFetchApi('/api/delete', {
            method: 'POST',
            body: deleteTask,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })

    }

    async function updateTaskData(updateTaskData: UpdateTaskData) {
        const data = await useFetchApi('/api/update', {
            method: 'POST',
            body: updateTaskData,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
    }


    return { token, login, isLoggedIn, fetchToken, register, createTask, fetchTask, task, updateTask, deleteTask, updateTaskData }
})