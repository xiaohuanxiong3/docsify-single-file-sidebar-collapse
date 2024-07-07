import {defineConfig} from "vite";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

export default defineConfig({
    build : {
      lib: {
        entry: resolve(__dirname, "src/plugin/main.js"),
        fileName: "my-plugin",
        formats: ["cjs", "es"],
      },
      cssCodeSplit: false
    },
    plugins : [
        cssInjectedByJsPlugin()
    ]
})


