<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const sneakyModalFields = ref({
  title: 'Опрос',
  body: 'Довольны ли вы своей зарплатой?'
});
const resultModalText = ref('Мы и не сомневались, что вы так думаете.');

const sneakyButtonModalVisible = ref(true);
const resultModalVisible = ref(false);

const buttonPosition = ref();

const acceptButton = ref(null);
const dialogRef = ref(null);

onMounted(() => {
  if (route.query?.sneakyTitle) sneakyModalFields.value.title = decodeURI(route.query.sneakyTitle);
  if (route.query?.sneakyBody) sneakyModalFields.value.body = decodeURI(route.query.sneakyBody);
  if (route.query?.resultBody) resultModalText.value = decodeURI(route.query.resultBody);
});

const changeButtonLocation = () => {
  if (dialogRef.value) {
    const dialogHeight = dialogRef.value.container.offsetHeight;
    const dialogWidth = dialogRef.value.container.offsetWidth;

    const newBottom = `${Math.floor(Math.random() * (dialogHeight - 42))}px`;
    const newRight = `${Math.floor(Math.random() * (dialogWidth - 70))}px`;

    buttonPosition.value = { bottom: newBottom, right: newRight };
  }
};

const onSneakyModal = () => {
  sneakyButtonModalVisible.value = false;
  resultModalVisible.value = true;
};

const onResultModal = () => {
  resultModalVisible.value = false;
  sneakyButtonModalVisible.value = true;
};
</script>

<template>
  <Dialog
    ref="dialogRef"
    class="relative"
    :pt="{
      headerActions: {
        class: '!hidden'
      }
    }"
    :visible="sneakyButtonModalVisible"
    modal
    :style="{ width: '500px' }"
    :breakpoints="{ '768px': '75vw', '575px': '90vw' }">
    <template #header>
      <h3 class="text-center w-full text-xl font-bold break-words">
        {{ sneakyModalFields.title }}
      </h3>
    </template>

    <p class="m-0 break-words">{{ sneakyModalFields.body }}</p>

    <template #footer>
      <div class="flex gap-4 min-h-[42px]">
        <Button
          ref="acceptButton"
          class="min-w-[80px] !absolute bottom-5 right-28"
          type="button"
          autofocus
          label="Да"
          @click="onSneakyModal" />
        <Button
          id="my-button"
          :style="buttonPosition"
          class="min-w-[70px] !cursor-default !absolute bottom-5 right-7"
          type="button"
          label="Нет"
          severity="danger"
          @mouseover="changeButtonLocation"
          @click="changeButtonLocation" />
      </div>
    </template>
  </Dialog>

  <Dialog
    :visible="resultModalVisible"
    :pt="{
      headerActions: {
        class: '!hidden'
      }
    }"
    modal
    :style="{ width: '500px' }"
    :breakpoints="{ '768px': '75vw', '575px': '90vw' }">
    <p class="m-0 text-center text-base font-semibold break-words">{{ resultModalText }}</p>

    <template #footer>
      <div class="flex gap-4 w-full justify-center">
        <Button class="min-w-[80px]" type="button" autofocus label="Ок" @click="onResultModal" />
      </div>
    </template>
  </Dialog>
</template>

<style>
#my-button {
  transition: all 0.03s linear 0s;
}
</style>
