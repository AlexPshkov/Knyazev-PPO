import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Knyazev-PPO/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});