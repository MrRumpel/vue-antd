import { createApp } from 'vue';
import App from './App';
import setupAntd from './setup/ant-design-vue';

const app = createApp(App);

// Configure component library
setupAntd(app);

// Multilingual configuration
// setupI18n(app);
