<template>
  <main class="flex flex-col h-screen mx-1 border">
    <div class="py-6 border">
      <Search />
    </div>
    <div class="flex flex-col flex-grow md:flex-row">
      <div class="w-[0%] lg:w-[40%] border">
        <User />
      </div>
      <div class="flex-grow border">
        <Repos />
        <Pagination />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Repos from "@/components/Repos.vue";
import Pagination from "@/components/Pagination.vue";
</script>
