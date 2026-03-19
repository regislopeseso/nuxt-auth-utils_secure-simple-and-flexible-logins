// https://nuxt.com/docs/api/configuration/nuxt-config

/* eslint-disable */
export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxt/ui", "nuxt-auth-utils"],

  runtimeConfig: {
    oauth: {
      github: {
        clientId: "",
        clientSecret: ""
      }
    }
  },

  devtools: {
    enabled: true
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true }
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "never",
        braceStyle: "1tbs"
      }
    }
  }
});
