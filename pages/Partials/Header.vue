<template>
    <div class="w-full flex bg-white min-h-10 border-b shadow-2xl p-4">
        <div class="flex w-1/3 space-x-16">
            <img class="w-1/4" src="../../assets/logo/goteam-logo-dark.png" />
            <div class="flex text-center h-full space-x-10 text-md text-[#8e93a0]">
                <div class="h-fit m-auto">Career</div>
                <div class="h-fit m-auto">Find your Role</div>
            </div>
        </div>
        <div class="w-1/3 px-20 relative">
            <div
                class="bg-[#3656f5] absolute top-[5.5px] text-sm gap-x-2 cursor-pointer text-md  right-[86px] flex rounded-full text-gray-200 px-[15px] py-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 m-auto">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div>Search</div>
            </div>
            <input type="text" class="pl-6 text-md rounded-full w-full h-11 border border-gray-300"
                placeholder="Type for job title or role" />
        </div>
        <div class="w-1/3 flex justify-end text-end space-x-4">
            <div class=" ">
                <div class=" font-bold">Reyven Biloy</div>
                <div class="text-[#3656f5]">reyvenb@gmail.com</div>
            </div>
            <div class="pt-1">
                <img class="m-auto  h-10 rounded-full border" src="../../assets/profile/profile.jpg" />
            </div>
            <div class="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 text-lg font-black text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

    </div>
    <slot >
        <main />
    </slot>
</template>
<script>
export default {
    setup() {

    },
}
</script>