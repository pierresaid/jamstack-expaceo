// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content'
    ],
    app: {
        head: {
            link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css' }],
            script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }]
        }
    }
})
