<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const router = useRouter();
const { t } = useI18n({ useScope: 'global' });

const queryParams = ref({
  sneakyTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  sneakyBody:
    'Tempore, eum delectus aperiam, harum et nemo porro ducimus sunt dicta qui, fugit libero.',
  resultBody: 'Wuo perspiciatis recusandae autem nobis aliquid consectetur error.'
});

const submitHandler = async () => {
  const { sneakyTitle, sneakyBody, resultBody } = queryParams.value;

  await router.replace({
    name: 'Admin',
    query: {
      sneakyTitle: btoa(encodeURI(sneakyTitle)),
      sneakyBody: btoa(encodeURI(sneakyBody)),
      resultBody: btoa(encodeURI(resultBody))
    }
  });

  router.push({
    name: 'Main',
    query: {
      sneakyTitle: btoa(encodeURI(sneakyTitle)),
      sneakyBody: btoa(encodeURI(sneakyBody)),
      resultBody: btoa(encodeURI(resultBody))
    }
  });
};

onMounted(() => {
  if (Object.keys(route.query).length) {
    const keys = Object.keys(route.query);
    const routeQueries = route.query;
    keys.forEach((key) => {
      routeQueries[key] = decodeURI(atob(routeQueries[key]));
    });
    queryParams.value = { ...routeQueries };
  }
});
</script>

<template>
  <form
    class="flex flex-col justify-center items-center gap-6 w-[50vw] max-lg:w-[70vw] max-md:w-[90vw] max-sm:w-full"
    @submit.prevent="submitHandler">
    <FloatLabel class="w-full">
      <Textarea class="w-full" v-model="queryParams.sneakyTitle" rows="1" />
      <label>{{ t('inputLabels.sneakyTitle') }}</label>
    </FloatLabel>

    <FloatLabel class="w-full">
      <Textarea class="w-full" v-model="queryParams.sneakyBody" autoResize />
      <label>{{ t('inputLabels.sneakyBody') }}</label>
    </FloatLabel>

    <FloatLabel class="w-full">
      <Textarea class="w-full" v-model="queryParams.resultBody" autoResize />
      <label>{{ t('inputLabels.resultBody') }}</label>
    </FloatLabel>

    <div class="w-full flex justify-center">
      <Button class="min-w-[80px]" :label="t('buttonLabels.sneakySubmit')" type="submit" />
    </div>
  </form>
</template>
