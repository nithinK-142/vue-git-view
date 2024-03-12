<template>
  <div class="relative max-w-sm mx-auto">
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
import { useGithubStore } from "@/stores/GitStore";

const { setSearchUser } = useGithubStore();
let username = "";

const handleClick = () => {
  console.log(username.trim());
  if (username.trim() !== "") setSearchUser(username);
};
</script>
