<template>
  <div v-if="isReposLoading" class="grid grid-cols-1 gap-2 p-4 lg:grid-cols-2">
    <CardSkeleton />
  </div>

  <div v-else>
    <div
      v-if="repositories.length > 0"
      class="grid grid-cols-1 gap-2 p-4 lg:grid-cols-2"
    >
      <Card v-for="repo in repositories" :key="repo.id" :repo="repo" />
    </div>

    <Error v-else message="No repos found" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGithubStore } from "@/stores/GitStore";
import { storeToRefs } from "pinia";
import Card from "@/components/Card.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";
import Error from "@/components/Error.vue";

const githubStore = useGithubStore();

const { isReposLoading } = storeToRefs(githubStore);

onMounted(async () => await githubStore.getRepos());

const repositories = computed(() => githubStore.repos);
</script>
