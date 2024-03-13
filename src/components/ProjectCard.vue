<template>
  <div
    class="p-4 w-72 mx-auto sm:w-[25rem] lg:w-[20rem] xl:w-[25rem] h-[8rem] bg-white dark:bg-[#f6f8fa]/80 rounded-lg border border-gray-200 dark:border-gray-700 shadow flex flex-col justify-between"
  >
    <div>
      <div class="relative flex justify-between mb-2">
        <h5
          class="text-lg font-medium tracking-wider text-blue-600 cursor-pointer dark:text-blue-700"
        >
          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
            {{ repo.name }}
          </a>
        </h5>
        <p
          class="absolute right-0 top-0 text-[10px] px-3 border border-neutral-300 dark:border-neutral-500 text-neutral-500 font-medium dark:text-neutral-800 rounded-full"
        >
          Public
        </p>
      </div>
      <p class="mb-3 text-xs tracking-wide line-clamp-2 text-neutral-600 dark:text-neutral-800">
        {{ repo.description }}
      </p>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2 items-center text-[12px] text-neutral-700">
        <div v-if="repo.language" class="flex items-center space-x-1">
          <div
            class="inline-block w-2.5 h-2.5 bg-gray-500 rounded-full"
            :style="{ backgroundColor: langColors[repo.language] }"
          ></div>

          <span>{{ repo.language }}</span>
        </div>
        <div class="flex gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-3 lucide lucide-star"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            />
          </svg>
          <p class="mt-[3px]">{{ repo.stargazers_count.toLocaleString() }}</p>
        </div>
        <div class="flex gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-3 lucide lucide-git-fork"
          >
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
            <path d="M12 12v3" />
          </svg>
          <p class="mt-[3px]">{{ repo.forks_count.toLocaleString() }}</p>
        </div>
      </div>

      <div class="flex">
        <p class="text-xs text-neutral-700">{{ repo.size.toLocaleString() }} Kb</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Repo, langColors } from '@/models/models'

defineProps<{ repo: Repo }>()
</script>
