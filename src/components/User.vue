<template>
  <div v-if="isUserLoading" class="flex flex-col items-center w-full p-2 mb-4">
    <!-- avatar -->
    <div
      class="w-32 h-32 bg-gray-300 rounded-full sm:w-48 sm:h-48 animate-pulse"
    ></div>

    <div class="flex flex-col justify-start mt-4">
      <!-- name -->
      <div
        class="w-48 h-6 mx-auto mt-4 bg-gray-300 rounded animate-pulse"
      ></div>
      <!-- login -->
      <div
        class="w-32 h-4 mx-auto mt-2 bg-gray-300 rounded animate-pulse"
      ></div>

      <!-- bio -->
      <div
        class="w-11/12 h-4 mx-auto mt-4 bg-gray-300 rounded animate-pulse"
      ></div>

      <!-- other -->
      <div class="flex items-center my-2 mb-2 space-x-1">
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-300 rounded-md w-28 animate-pulse"
        >
          <span class="h-6 text-2xl tracking-widest"></span>
          <span
            class="h-4 text-xs tracking-wider text-gray-700 dark:text-gray-200"
          ></span>
        </div>
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-300 rounded-md w-28 animate-pulse"
        >
          <span class="h-6 text-2xl tracking-widest"></span>
          <span
            class="h-4 text-xs tracking-wider text-gray-700 dark:text-gray-200"
          ></span>
        </div>
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-300 rounded-md w-28 animate-pulse"
        >
          <span class="h-6 text-2xl tracking-widest"></span>
          <span
            class="h-4 text-xs tracking-wider text-gray-700 dark:text-gray-200"
          ></span>
        </div>
      </div>

      <div class="w-1/2 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-3/4 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
      <div class="w-[60%] h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
    </div>
  </div>
  <div
    v-else-if="!isUserLoading && user"
    class="flex flex-col flex-wrap items-center w-full p-2 mb-4"
  >
    <div class="object-cover w-32 h-32 sm:w-48 sm:h-48">
      <img
        :src="user.avatar_url"
        :alt="`${user.name}'s avatar`"
        class="object-cover w-full h-full border-4 border-blue-300 rounded-full sm:w-48 sm:h-48"
      />
    </div>
    <div class="flex flex-col justify-start mt-4">
      <p class="pt-2 text-2xl font-semibold tracking-widest text-center">
        {{ user.name }}
      </p>
      <a
        :href="user.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono text-center text-blue-600 dark:text-[rgb(121,184,255)]"
      >
        @{{ user.login }}
      </a>
      <p
        v-if="user.bio"
        class="mt-2 text-center text-gray-700 dark:text-gray-200"
      >
        <template v-for="(chunk, index) in bioChunks" :key="index">
          {{ chunk }}<br v-if="index < bioChunks.length - 1" />
        </template>
      </p>

      <div class="flex items-center mt-2 space-x-1">
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-200 dark:bg-[rgb(26,30,34)] rounded-md w-28"
        >
          <span class="text-2xl tracking-widest">{{ publicRepos }}</span>
          <span class="text-xs tracking-wider text-gray-700 dark:text-gray-200">
            REPOSITORIES</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-200 dark:bg-[rgb(26,30,34)] rounded-md w-28"
        >
          <span class="text-2xl tracking-widest">{{ user.following }}</span>
          <span class="text-xs tracking-wider text-gray-700 dark:text-gray-200">
            FOLLOWING</span
          >
        </div>
        <div
          class="flex flex-col items-center justify-between px-6 py-4 font-semibold bg-gray-200 dark:bg-[rgb(26,30,34)] rounded-md w-28"
        >
          <span class="text-2xl tracking-widest">{{ user.followers }}</span>
          <span class="text-xs tracking-wider text-gray-700 dark:text-gray-200">
            FOLLOWERS</span
          >
        </div>
      </div>

      <div
        class="flex flex-col justify-center mt-2 mb-4 text-base tracking-wide"
      >
        <div
          v-if="user.company"
          class="flex items-center mt-1 text-gray-700 dark:text-gray-200"
        >
          <div class="h-4 mr-1 fill-black dark:fill-white">
            <svg
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              class="w-auto h-full"
            >
              <path
                d="M8 2v4H4v42h42V14H30V6h-4V2Zm2 2h14v4h4v38h-9v-7h-4v7H6V8h4Zm0 6v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-12 5v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm8 1h14v30H30Zm2 2v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 3v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 1v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-8 4v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 1v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 3v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 3v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm4 0v4h2v-4Zm10 1v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-8 4v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Zm-30 1v5h2v-5Zm12 0v5h2v-5Zm10 3v2h2v-2Zm4 0v2h2v-2Zm4 0v2h2v-2Z"
              />
            </svg>
          </div>
          <span class="font-medium"> {{ user.company }}</span>
        </div>
        <div
          v-if="user.location"
          class="flex items-center mt-1 text-gray-700 dark:text-gray-200"
        >
          <div class="h-4 mr-1 fill-black dark:fill-white">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="w-auto h-full"
            >
              <path
                d="M18 4.48a8.45 8.45 0 0 0-12 12l5.27 5.28a1 1 0 0 0 1.42 0L18 16.43a8.45 8.45 0 0 0 0-11.95M16.57 15 12 19.59 7.43 15a6.46 6.46 0 1 1 9.14 0M9 7.41a4.32 4.32 0 0 0 0 6.1 4.31 4.31 0 0 0 7.36-3 4.24 4.24 0 0 0-1.26-3.05A4.3 4.3 0 0 0 9 7.41m4.69 4.68a2.33 2.33 0 1 1 .67-1.63 2.33 2.33 0 0 1-.72 1.63Z"
              />
            </svg>
          </div>
          <span class="font-medium"> {{ user.location }}</span>
        </div>
        <div v-if="user.blog" class="flex items-center mt-1 hover:opacity-90">
          <div class="h-4 mr-1 fill-black dark:fill-white">
            <svg
              viewBox="-3 -3 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              class="w-auto h-full"
            >
              <path
                d="M3.19 9.345a.97.97 0 0 1 1.37 0 .966.966 0 0 1 0 1.367l-2.055 2.052a1.93 1.93 0 0 0 0 2.735 1.94 1.94 0 0 0 2.74 0l4.794-4.787a.966.966 0 0 0 0-1.367.966.966 0 0 1 0-1.368.97.97 0 0 1 1.37 0 2.9 2.9 0 0 1 0 4.103l-4.795 4.787a3.88 3.88 0 0 1-5.48 0 3.864 3.864 0 0 1 0-5.47L3.19 9.344zm11.62-.69a.97.97 0 0 1-1.37 0 .966.966 0 0 1 0-1.367l2.055-2.052a1.93 1.93 0 0 0 0-2.735 1.94 1.94 0 0 0-2.74 0L7.962 7.288a.966.966 0 0 0 0 1.367.966.966 0 0 1 0 1.368.97.97 0 0 1-1.37 0 2.9 2.9 0 0 1 0-4.103l4.795-4.787a3.88 3.88 0 0 1 5.48 0 3.864 3.864 0 0 1 0 5.47L14.81 8.656z"
              />
            </svg>
          </div>
          <a :href="user.blog" target="_blank" rel="noopener noreferrer">{{
            user.blog.replace(/^(https?:\/\/)?/, "")
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGithubStore } from "@/stores/GitStore";
import { storeToRefs } from "pinia";

const githubStore = useGithubStore();

const { isUserLoading, publicRepos } = storeToRefs(githubStore);
onMounted(async () => await githubStore.getUser());

const user = computed(() => githubStore.user);

const bioChunks = computed(() => {
  if (user.value && user.value.bio) {
    const bio = user.value.bio;
    const chunks = [];
    for (let i = 0; i < bio.length; i += 50) {
      chunks.push(bio.slice(i, i + 50));
    }
    return chunks;
  } else {
    return [];
  }
});
</script>
