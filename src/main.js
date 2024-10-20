import { createApp } from 'vue';
import router from '@/router';

import PrimeVue from 'primevue/config';
import { localeRu } from '@/assets/styles/primeVue/localeRu.js';
import { myPreset } from '@/assets/styles/primeVue/theme.js';
import components from '@/assets/styles/primeVue/components.js';

import 'primeicons/primeicons.css';
import './assets/styles/tailwind/tailwind.css';
import './assets/styles/main.css';

import App from './App.vue';
const app = createApp(App);

app.use(PrimeVue, {
  locale: {
    ...localeRu
  },
  theme: {
    preset: myPreset
  }
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.mount('#app');
