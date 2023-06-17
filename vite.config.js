import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                app: './main.html',
            },
        },
    },
    server: {
        port: 8000,
    },
})