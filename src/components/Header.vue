<template>
  <div class="flex items-center justify-between">
    <div class="hidden sm:block">
      <Requests />
    </div>
    <div class="absolute w-[80%] transform -translate-x-1/2 left-1/2">
      <Search />
    </div>
    <div class="hidden pt-4 pr-6 sm:block">
      <ToggleMode />
    </div>
  </div>
</template>

<script setup lang="ts">
import Requests from "@/components/Requests.vue";
import Search from "@/components/Search.vue";
import ToggleMode from "@/components/ToggleMode.vue";
</script>
