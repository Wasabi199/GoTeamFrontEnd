<template>
    <Header>
        <div class="bg-[#f6f9fd] min-h-screen flex px-60 py-5">
            <div class="w-1/4 h-fit">
                <ul class="p-5 space-y-4">
                    <li class="flex gap-4 bg-[#eff2f7] rounded-md py-2 px-5 text-[#3656f5] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-9 h-9 font-bold">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <span class="h-fit m-auto">Profile</span>
                        <div class="flex justify-end w-full py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <span class="">Resume / CV</span>
                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                        </svg>
                        <span class="">Assessment</span>
                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                        </svg>
                        <span class="">Video Script</span>
                    </li>
                    <hr class="">
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        <span class="">Application Tracking</span>
                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        <span class="">Bookmarked</span>

                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        <span class="">Notification</span>
                        <div class="bg-[#ff6161] text-white px-[6.5px] text-[14px] rounded-sm font-thin">2</div>

                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                        </svg>
                        <span class="">Activity Logs</span>
                    </li>
                    <li class="flex gap-4  rounded-md py-2 px-5 text-[#8e93a0] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span> Settings</span>
                    </li>
                    <div class=" ">
                        <div class="text-[#8e93a0]">Copyright 2018 - 2023. All Rights Reserved</div>
                        <div class="text-[#3656f5]">Terms of Use • Privacy Policy</div>
                    </div>
                </ul>
            </div>
            <div id="main" class="w-3/4 space-y-5 max-h-screen overflow-auto">
                <div class="bg-white  border shadow-md rounded-md">
                    <div class="px-6 py-2">
                        <div class="flex justify-end space-x-2">
                            <input class="h-4 w-4 mt-1" type="checkbox" />
                            <span class="text-[#8e93a0]">Don't remind me again</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5 text-[#ff7474] m-auto">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div class=" font-semibold text-2xl">Welcome, Reyven!</div>
                        <div class="text-[#8e93a0] text-[15px]"><span class="text-green-500">You are almost done!</span> To
                            further streanghten your profile, it is highly recomended for you to complete the 4 sections of
                            your application.</div>
                    </div>
                    <hr>
                    <div class="flex ">
                        <div class="w-1/4 p-5 flex space-x-3 text-[#8e93a0]">
                            <div class="bg-[#eff2f7] h-fit w-fit p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 font-bold text-[#8e93a0]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <div class="flex space-x-3">
                                <div class="">
                                    <span class="font-semibold">Applicant Profile</span>
                                    <progress class="flex" max="100" value="75"></progress>
                                </div>
                                <div class="mt-3">
                                    <span class="text-sm text-[#ffa953]">75%</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4 p-5 flex space-x-3 text-[#8e93a0]">
                            <div class="bg-[#eff2f7] h-fit w-fit p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </div>
                            <div class="flex space-x-3">
                                <div class="">
                                    <span class="font-semibold">Resume / CV</span>
                                    <progress id="red" class="flex" max="100" value="50"></progress>
                                </div>
                                <div class="mt-3">
                                    <span class="text-sm text-[#ff6161]">50%</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4 p-5 flex space-x-3 text-[#8e93a0]">
                            <div class="bg-[#eff2f7] h-fit w-fit p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                            </div>
                            <div class="flex space-x-3">
                                <div class="">
                                    <span class="font-semibold">Assessment Score</span>
                                    <progress id="red" class="flex" max="100" value="0"></progress>
                                </div>
                                <div class="mt-3">
                                    <span class="text-sm text-[#ff6161]">0%</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/4 p-5 flex space-x-3 text-[#8e93a0]">
                            <div class="bg-[#eff2f7] h-fit w-fit p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                </svg>
                            </div>
                            <div class="flex space-x-3">
                                <div class="">
                                    <span class="font-semibold">Video Introduction</span>
                                    <progress id="red" class="flex" max="100" value="0"></progress>
                                </div>
                                <div class="mt-3">
                                    <span class="text-sm text-[#ff6161]">0%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-2/3">
                        <div class="bg-white  border shadow-md rounded-md">
                            <div class="flex">
                                <div class="p-6 border-r w-fit">
                                    <img class="rounded-full w-40" src="../assets/profile/profile.jpg" />
                                </div>
                                <div class="p-6 w-full space-y-1">
                                    <div class="flex justify-between w-full">
                                        <div class="font-semibold text-2xl">Reyven S. Biloy</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#8e93a0]">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
                                    </div>
                                    <div class="text-lg font-semibold text-[#8e93a0]">UI/UX Designer</div>
                                    <div class="flex space-x-2  text-[#8e93a0]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                        </svg>
                                        <div>Bachelor of Science in Computer Science</div>
                                    </div>
                                    <div class="flex space-x-12">
                                        <div class="flex text-[#8e93a0] space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                            </svg>
                                            <span>12 years</span>
                                        </div>
                                        <div class="flex text-[#8e93a0] space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                            </svg>

                                            <span>Immediately</span>
                                        </div>
                                        <div class="flex text-[#8e93a0] space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>


                                            <span class="text-green-500">Php 35,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <hr>
                            <div class="p-5">
                                <div class="flex justify-between">
                                    <div class="font-semibold text-lg">General Details</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#8e93a0]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div class="py-5 space-y-5">
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Date of Birth</div>
                                        <div>07 july 1986</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Gender</div>
                                        <div>Male</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Civil Status</div>
                                        <div>Married</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Nationality</div>
                                        <div>Filipino</div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="p-5">
                                <div class="flex justify-between">
                                    <div class="font-semibold text-lg">Professional Status</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#8e93a0]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div class="py-5 space-y-5">
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Recent Job Title</div>
                                        <div>Web Designer and Developer</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Interview Availability</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Current Monthly Salary (Gross)</div>
                                        <div class="text-green-500">Php 30,000</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Allowance(Non-Taxable)</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Pre-employment Leaves</div>
                                        <div>07 july - Birthday</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Where can you work?</div>
                                        <div>Office and Home</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Estimate Travel Time to Office</div>
                                        <div>15 mins</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Connection Type</div>
                                        <div>Globe Broadband</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Website / Portfolio</div>
                                        <div>-</div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="p-5">
                                <div class="flex justify-between">
                                    <div class="font-semibold text-lg">Preferences</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-[#8e93a0]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                    </svg>
                                </div>
                                <div class="py-5 space-y-5">
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Day Shift</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Mid Shift</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Night Shift</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">English Only Policy(EOP)</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Where did you hear us?</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Marketing Permission</div>
                                        <div>-</div>
                                    </div>
                                    <div class="flex">
                                        <div class="text-[#8e93a0] w-1/3">Referal</div>
                                        <div>-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/3 pl-5 space-y-5">
                        <div class="bg-white shadow-md border h-fit rounded-md">
                            <div class="py-3 px-5 font-semibold">Video Introduction</div>
                            <video class="rounded-b-md " controls>
                                <source src="../assets/video/sample.mp4">
                            </video>
                        </div>

                        <div class="bg-white shadow-md border h-fit rounded-md">
                            <!-- <div class="py-3 px-5 font-semibold">Profile Compleation</div>
                             -->

                            <div class="py-3 px-5">
                                <div class="flex justify-between">
                                    <span class="font-semibold">Profile Completion</span>
                                    <span class=" text-[#22c55e]">100%</span>
                                </div>
                                <progress id="green" class="flex w-full" style=" height:10px" max="100"
                                    value="100"></progress>
                            </div>
                            <div class="w-full text-center text-md text-green-500 font-semibold">Well done, Reyven!</div>
                            <img class="w-28 m-auto" src="../assets/logo/award.png" />
                            <p class="p-5 text-[#8e93a0] text-md">You have one of the strongest professional profile in our
                                talent pool. Expect progress on your application at any time soon.</p>
                        </div>
                        <div class="bg-white shadow-md border h-fit rounded-md">
                            <div class="py-3 px-5">
                                <div class="flex justify-between">
                                    <span class="font-semibold">Profile Completion</span>
                                    <span class=" text-[#ffa953]">50%</span>
                                </div>
                                <progress class="flex w-full" style=" height:10px" max="100" value="50"></progress>
                            </div>
                            <!-- <div> -->
                            <div class="flex px-5 w-full space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-4 my-auto text-[#8e93a0]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                                <div class="text-[#8e93a0] text-sm font-semibold"> Hide Recomendation</div>
                            </div>
                            <div class="px-11 py-2 text-[#8e93a0]">
                                Fill-up the following items to strenghten your profile. This can help us matching your
                                profile and increase your chances of landing into your desire role.
                            </div>
                            <div class=" px-11 py-2">
                                <div class="flex space-x-2">
                                    <div class="border-2 border-[#8e93a0] my-auto h-3 w-3 rounded-full"></div>
                                    <div class="text-[#8e93a0]">Share <span class="text-[#3656f5]">Date of Birth</span></div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="border-2 border-[#8e93a0] my-auto h-3 w-3 rounded-full"></div>
                                    <div class="text-[#8e93a0]">Specify <span class="text-[#3656f5]">Current Monthly Salary</span></div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="border-2 border-[#8e93a0] my-auto h-3 w-3 rounded-full"></div>
                                    <div class="text-[#8e93a0]">Add one(1) <span class="text-[#3656f5]">Character Reference</span></div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="border-2 border-[#8e93a0] my-auto h-3 w-3 rounded-full"></div>
                                    <div class="text-[#8e93a0]">Add <span class="text-[#3656f5]">Current Address</span></div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="border-2 border-[#8e93a0] my-auto h-3 w-3 rounded-full"></div>
                                    <div class="text-[#8e93a0]">Add atleast five (5) items in <span class="text-[#3656f5]">Other Skills</span></div>
                                </div>
                            </div>
                            <!-- </div> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Header>
</template>
<script>
import Header from './Partials/Header.vue';
export default {
    setup() {

    },
    components: {
        Header
    }
}
</script>
<style scoped>
progress {
    /* style rules */
    height: 6px;

}

progress::-webkit-progress-bar {
    /* style rules */
    border-radius: 10px;
    background-color: #e5e8ee;

}

progress::-webkit-progress-value {
    /* style rules */
    border-radius: 10px;
    background-color: #ffa953;


}


#red::-webkit-progress-value {
    /* style rules */
    border-radius: 10px;
    background-color: #ff6161;


}

#green::-webkit-progress-value {
    /* style rules */
    border-radius: 10px;
    background-color: #22c55e;


}

progress::-moz-progress-bar {
    /* style rules */

}

#main::-webkit-scrollbar {
    display: none;
}
</style>