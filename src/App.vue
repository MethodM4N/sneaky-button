<script setup>
import { onMounted, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePrimeVue } from 'primevue/config';
import { primeVueLocale } from '@/assets/styles/primeVue/locale.js';

import GithubIcon from '@/components/GithubIcon/GithubIcon.vue';

const { t, locale } = useI18n({ useScope: 'global' });
const primevue = usePrimeVue();

onMounted(() => {
  if (!window.navigator?.language?.length) {
    setHtmlLangAttr('en');
    locale.value = 'en';
    return;
  }

  switch (window.navigator.language.split('-')[0]) {
    case 'ru':
      setHtmlLangAttr('ru');
      locale.value = 'ru';
      break;

    case 'en':
      setHtmlLangAttr('en');
      locale.value = 'en';
      break;

    case 'es':
      setHtmlLangAttr('es');
      locale.value = 'es';
      break;

    default:
      setHtmlLangAttr('en');
      locale.value = 'en';
      break;
  }
});

const setHtmlLangAttr = (language) => {
  document.documentElement.setAttribute('lang', language);
  primevue.config.locale = primeVueLocale[language];
};

watchEffect(() => (document.title = t('htmlTitle')), { deep: true });
</script>

<template>
  <a class="fixed right-3 bottom-3 z-[9999]" href="https://github.com/MethodM4N" target="_blank">
    <GithubIcon
      class="h-12 w-12 hover:scale-110 ease-in-out duration-150 rounded-full shadow-md max-sm:h-9 max-sm:w-9" />
  </a>
  <router-view></router-view>
</template>
