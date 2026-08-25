import { pwa } from "./configs/pwa";
import { i18n } from "./configs/i18n";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const siteURL = process.env.NUXT_PUBLIC_SITE_URL || "https://ohmycv.app";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "radix-vue/nuxt",
    "shadcn-nuxt"
  ],

  css: [
    "@unocss/reset/tailwind.css",
    "katex/dist/katex.min.css",
    "~/assets/css/index.css"
  ],

  i18n,

  shadcn: {
    prefix: "Ui",
    componentDir: "./src/components/ui"
  },

  runtimeConfig: {
    public: {
      googleFontsKey: ""
    }
  },

  colorMode: {
    classSuffix: ""
  },

  app: {
    baseURL,
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "apple-touch-icon", href: `${baseURL}apple-touch-icon.png` },
        {
          rel: "mask-icon",
          href: `${baseURL}safari-pinned-tab.svg`,
          color: "#222"
        }
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "application-name", content: "Oh My CV!" },
        { name: "apple-mobile-web-app-title", content: "Oh My CV!" },
        { name: "msapplication-TileColor", content: "#fff" },
        { property: "og:url", content: siteURL },
        { property: "og:type", content: "website" }
      ]
    }
  },

  site: {
    url: siteURL
  },

  pwa
});
