<template>
  <div v-if="isReposLoading" class="grid grid-cols-1 gap-2 p-4 lg:grid-cols-2">
    <ProjectCardSkeleton v-if="isReposLoading" />
  </div>

  <div v-else-if="userRepos.length > 0" class="grid grid-cols-1 gap-2 p-4 lg:grid-cols-2">
    <ProjectCard v-for="repo in userRepos" :key="repo.id" :repo="repo" />
  </div>

  <div v-else>
    <ErrorMessage message="No repos found" />
  </div>
</template>

<script setup lang="ts">
import { useGithubStore } from '@/stores/GitStore'
import { storeToRefs } from 'pinia'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const githubStore = useGithubStore()

githubStore.getRepos()

const { isReposLoading, userRepos } = storeToRefs(githubStore)
</script>
