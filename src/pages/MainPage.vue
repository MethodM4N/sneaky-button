<script setup>
import { ref, onMounted } from 'vue';

const buttonPosition = ref();

const acceptButton = ref(null);
const dialogRef = ref(null);

const changeButtonLocation = () => {
  if (dialogRef.value) {
    const dialogHeight = dialogRef.value.container.offsetHeight;
    const dialogWidth = dialogRef.value.container.offsetWidth;

    const newBottom = `${Math.floor(Math.random() * (dialogHeight - 42))}px`;
    const newRight = `${Math.floor(Math.random() * (dialogWidth - 70))}px`;

    buttonPosition.value = { bottom: newBottom, right: newRight };
  }
};
</script>

<template>
  <Dialog
    ref="dialogRef"
    class="relative"
    :visible="true"
    modal
    header="Какое то наименование"
    :style="{ width: '500px' }"
    :breakpoints="{ '768px': '75vw', '575px': '90vw' }">
    <p class="m-0">Довольны ли вы своей зарплатой?</p>

    <template #footer>
      <div class="flex gap-4 min-h-[42px]">
        <Button
          ref="acceptButton"
          class="min-w-[80px] !absolute bottom-5 right-28"
          type="button"
          autofocus
          label="Да" />
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
</template>

<style>
#my-button {
  transition: all 0.03s linear 0s;
}
</style>
