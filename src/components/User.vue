<template>
  <div v-if="user" class="flex flex-col items-center w-full mb-4">
    <div class="w-64 h-64">
      <img
        :src="user.avatar_url"
        :alt="`${user.name}'s avatar`"
        class="w-64 h-64 border border-gray-300 rounded-full"
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
        <span class="text-gray-300"
          ><strong>Followers:</strong> {{ user.followers }}</span
        >
        <span class="text-gray-300"
          ><strong>Following:</strong> {{ user.following }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGithubStore } from "@/stores/GitStore";

const githubStore = useGithubStore();

onMounted(async () => await githubStore.getUser());

const user = computed(() => githubStore.user);
</script>
