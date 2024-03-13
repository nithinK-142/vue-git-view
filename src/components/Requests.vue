<template>
  <div class="flex flex-col justify-center pl-4 text-gray-500 select-none pt-0.5 sm:pt-2">
    <h2 class="text-xs sm:text-xl">{{ remainingRequests }} / 60</h2>
    <h3 class="hidden text-xs sm:block">Requests Left</h3>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGithubStore } from '@/stores/GitStore'

const githubStore = useGithubStore()

const { remainingRequests } = storeToRefs(githubStore)
</script>
