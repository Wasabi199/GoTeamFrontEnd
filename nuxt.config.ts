// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    /**
   * Authentication
   * 
   */
    // auth: {
    //   strategies:{
    //     'laravelSanctum':{
    //       provider:'laravel/sanctum',
    //       url:'http://localhost:8000/api/login'
    //     }
    //   }
    // }
  },

  /**
   * Third Party Imports
   * 
   */
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
    // '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  ],



})
