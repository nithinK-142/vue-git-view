<template>
  <div class="flex items-center justify-between">
    <div class="hidden sm:block">
      <RequestsLeft />
    </div>
    <div class="absolute w-[80%] transform -translate-x-1/2 left-1/2">
      <UserSearch />
    </div>
    <div class="hidden pt-4 pr-6 sm:block">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import RequestsLeft from '@/components/RequestsLeft.vue'
import UserSearch from '@/components/UserSearch.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>
