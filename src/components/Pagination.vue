<template>
  <div v-if="totalPages !== 0">
    <div class="flex items-center justify-center gap-2 mb-4">
      <button
        @click="prevPage"
        :disabled="currPage === 1"
        class="px-3 py-1 border rounded-md shadow-sm"
      >
        Previous
      </button>
      <span>Page {{ currPage }} of {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currPage === totalPages"
        class="px-3 py-1 border rounded-md shadow-sm"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGithubStore } from '@/stores/GitStore'
import { storeToRefs } from 'pinia'

const githubStore = useGithubStore()

const { currPage, totalPages } = storeToRefs(githubStore)

const { nextPage, prevPage } = githubStore
</script>
