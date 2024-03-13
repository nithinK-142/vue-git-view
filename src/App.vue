<template>
  <main class="flex flex-col h-screen">
    <Header />

    <div
      v-if="!error"
      class="flex flex-col items-center justify-center mt-10 md:items-start md:flex-row bgslate-500"
    >
      <div class="mt-6 md:mt-2 md:mr-2">
        <User />
      </div>
      <div>
        <Repos />
        <Pagination />
      </div>
    </div>
    <Error v-else :message="error" />
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import User from '@/components/User.vue'
import Repos from '@/components/Repos.vue'
import Pagination from '@/components/Pagination.vue'
import Error from '@/components/Error.vue'
import { storeToRefs } from 'pinia'
import { useGithubStore } from './stores/GitStore'

const githubStore = useGithubStore()

const { error } = storeToRefs(githubStore)
</script>
