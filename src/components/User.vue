<template>
  <div v-if="isUserLoading" class="flex flex-col items-center w-full mb-4">
    <div class="w-64 h-64 bg-gray-300 rounded-full animate-pulse"></div>

    <div class="flex flex-col justify-start mt-4">
      <div class="w-48 h-6 mt-4 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-32 h-6 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-56 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-40 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-40 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-24 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-24 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
    </div>
  </div>
  <div
    v-else-if="!isUserLoading && user"
    class="flex flex-col items-center w-full mb-4"
  >
    <div class="w-32 h-32 lg:w-64 sm:w-48 lg:h-64 sm:h-48">
      <img
        :src="user.avatar_url"
        :alt="`${user.name}'s avatar`"
        class="w-32 h-32 border border-gray-300 rounded-full lg:w-64 sm:w-48 lg:h-64 sm:h-48"
      />
    </div>
    <div class="flex flex-col justify-start mt-4">
      <a
        :href="user.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-600 hover:text-blue-800"
      >
        {{ user.login }}
      </a>
      <p class="pt-2 text-lg font-semibold">{{ user.name }}</p>
      <p v-if="user.bio" class="mt-2 text-center text-gray-700">
        {{ user.bio }}
      </p>
      <p v-if="user.company" class="mt-1 text-gray-700">
        <strong>Company:</strong> {{ user.company }}
      </p>
      <p v-if="user.location" class="mt-1 text-gray-700">
        <strong>Location:</strong> {{ user.location }}
      </p>
      <p v-if="user.blog" class="mt-1 text-blue-600 hover:opacity-90">
        <a :href="user.blog" target="_blank" rel="noopener noreferrer">{{
          user.blog.replace(/^(https?:\/\/)?/, "")
        }}</a>
      </p>

      <div class="flex mt-2 space-x-4">
        <span class="text-gray-700"
          ><strong>Followers:</strong> {{ user.followers }}</span
        >
        <span class="text-gray-700"
          ><strong>Following:</strong> {{ user.following }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGithubStore } from "@/stores/GitStore";
import { storeToRefs } from "pinia";

const githubStore = useGithubStore();

const { isUserLoading } = storeToRefs(githubStore);
onMounted(async () => await githubStore.getUser());

const user = computed(() => githubStore.user);
</script>
