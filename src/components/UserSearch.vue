<template>
  <div class="relative max-w-sm pt-10 mx-auto">
    <input
      v-model="username"
      @keyup.enter="handleClick"
      class="w-full px-5 tracking-widest py-3.5 text-xl bg-[#f6f8fa] text-gray-500 rounded-md shadow-lg dark:bg-[rgb(38,48,60)] dark:text-[rgb(121,184,255)] focus:outline-none text-center"
      type="search"
      placeholder="Search"
      required
    />
  </div>
</template>

<script setup lang="ts">
import { useGithubStore } from '@/stores/GitStore'
import { ref } from 'vue'

const { setSearchUser } = useGithubStore()

const username = ref('')
const githubUrlRegex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9-]+)/

const handleClick = () => {
  if (username.value.trim() !== '') {
    const match = username.value.match(githubUrlRegex)

    if (match && match[1]) setSearchUser(match[1])
    else setSearchUser(username.value)

    username.value = ''
  }
}
</script>
