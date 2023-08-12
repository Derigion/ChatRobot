import {
    defineConfig
} from "rollup";
import addShebang from 'rollup-plugin-add-shebang'

import typescript from '@rollup/plugin-typescript'

export default defineConfig({
    input: './src/index.ts',
    output: {
        file: './dist/bot.js',
        format: "esm"
    },
    plugins: [typescript(), addShebang({
        include: "./dist/bot.js"
    })]
})