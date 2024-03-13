<template>
  <main class="flex flex-col h-screen">
    <PageHeader />

    <div
      v-if="!error"
      class="flex flex-col items-center justify-center mt-10 md:items-start md:flex-row bgslate-500"
    >
      <div class="mt-6 md:mt-2 md:mr-2">
        <UserInfo />
      </div>
      <div>
        <ProjectRepos />
        <RepoPagination />
      </div>
    </div>
    <ErrorMessage v-else :message="error" />
  </main>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import UserInfo from '@/components/UserInfo.vue'
import ProjectRepos from '@/components/ProjectRepos.vue'
import RepoPagination from '@/components/RepoPagination.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import { storeToRefs } from 'pinia'
import { useGithubStore } from './stores/GitStore'

const githubStore = useGithubStore()

const { error } = storeToRefs(githubStore)
</script>
