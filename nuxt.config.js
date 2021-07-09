export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "chillClub",
        htmlAttrs: {
            lang: "en",
        },
        meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }, { name: "format-detection", content: "telephone=no" }],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/styles/main.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/stylelint
        "@nuxtjs/stylelint-module",
        "@nuxtjs/style-resources",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            "nuxt-font-loader-strategy",
            {
                ignoreLighthouse: true,
                ignoredEffectiveTypes: ["2g", "slow-2g"],
                fonts: [
                    // Font
                    {
                        fileExtensions: ["woff2", "woff"],
                        fontFamily: "tt-hoves",
                        fontFaces: [
                            // Font-Face
                            {
                                preload: true,
                                src: "@/assets/fonts/TT-HOVES-LIGHT",
                                fontWeight: 300,
                                fontStyle: "normal",
                            },
                            {
                                preload: true,
                                src: "@/assets/fonts/TT-HOVES-REGULAR",
                                fontWeight: 400,
                                fontStyle: "normal",
                            },
                            {
                                preload: true,
                                src: "@/assets/fonts/TT-HOVES-MEDIUM",
                                fontWeight: 500,
                                fontStyle: "normal",
                            },
                        ],
                    },
                ],
            },
        ],
    ],

    // module settings
    styleResources: {
        scss: ["@/assets/styles/_base.scss"],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
