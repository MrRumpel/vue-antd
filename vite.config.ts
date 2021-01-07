import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const vueConfig = defineConfig({
  plugins: [vue(), vueJsx()],
});

const config = {
  ...vueConfig,
};

export default config;
