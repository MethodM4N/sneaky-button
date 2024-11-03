import { createApp } from 'vue';
import router from '@/router';

import PrimeVue from 'primevue/config';
import { primeVueLocale } from '@/assets/styles/primeVue/locale.js';
import { myPreset } from '@/assets/styles/primeVue/theme.js';
import components from '@/assets/styles/primeVue/components.js';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from '@/i18n';

import 'primeicons/primeicons.css';
import './assets/styles/tailwind/tailwind.css';
import './assets/styles/main.css';

import App from './App.vue';

const messages = Object.assign(languages);
const i18n = createI18n({
  locale: 'ru',
  legacy: false,
  fallbackLocale: 'ru',
  messages
});

const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  }
});

app.use(PrimeVue, {
  locale: {
    ...primeVueLocale.en
  },
  theme: {
    preset: myPreset
  }
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(i18n);
app.use(router);
app.mount('#app');
