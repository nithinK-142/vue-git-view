<template>
  <p class="pt-16 text-xl font-medium tracking-wider text-center text-gray-500">
    {{ message }}
  </p>
</template>

<script setup lang="ts">
defineProps<{ message: string }>()
</script>
