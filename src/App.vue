<template>
  <main class="flex flex-col h-screen">
    <div class="px-4 py-6 bgpink-500">
      <Search />
    </div>
    <div
      v-if="!error"
      class="flex flex-col items-center justify-center md:items-start md:flex-row bgslate-500"
    >
      <div class="md:w-[20%] bglime-700 md:mt-2 md:mr-2">
        <User />
      </div>
      <div>
        <Repos />
        <Pagination />
      </div>
    </div>
    <p v-else class="text-center">{{ error }}</p>
  </main>
</template>

<script setup lang="ts">
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Repos from "@/components/Repos.vue";
import Pagination from "@/components/Pagination.vue";
import { storeToRefs } from "pinia";
import { useGithubStore } from "./stores/GitStore";

const githubStore = useGithubStore();

const { error } = storeToRefs(githubStore);
</script>
