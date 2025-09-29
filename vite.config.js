import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',
    publicDir: 'public',
    base: '/van-gogh-landing/',
    app: {
        baseURL: '/van-gogh-landing/',
    }
});
