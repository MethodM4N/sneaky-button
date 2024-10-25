<script setup>
import GithubIcon from '@/components/GithubIcon/GithubIcon.vue';
</script>

<template>
  <a class="fixed right-3 bottom-3 z-[9999]" href="https://github.com/MethodM4N" target="_blank">
    <GithubIcon
      class="h-12 w-12 hover:scale-110 ease-in-out duration-150 rounded-full shadow-md max-sm:h-9 max-sm:w-9" />
  </a>
  <router-view></router-view>
</template>
