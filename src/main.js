import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '@/stylesheets/index.scss';

createApp(App)
  .use(store)
  .mount('#app');
