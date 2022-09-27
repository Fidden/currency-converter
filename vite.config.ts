import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint({
            fix: false,
            exclude: ['**/node_modules/**', '**/dist/**'],
            extensions: ['ts', 'vue'],
        }),
        vue()
    ],
    resolve: {
        alias: {
            '@': '/src',
        }
    }
});
