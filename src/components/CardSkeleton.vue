<template>
  <div
    v-for="loader in Array.from({ length: 6 })"
    :key="String(loader)"
    class="p-4 w-72 mx-auto sm:w-[25rem] h-[8rem] bg-white dark:bg-[#f6f8fa]/80 rounded-lg border border-gray-200 shadow flex flex-col justify-between"
  >
    <div>
      <div class="relative flex justify-between mb-2">
        <h5
          class="w-1/2 h-5 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></h5>
        <div
          class="absolute top-0 right-0 w-10 h-4 rounded-full animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
      </div>
      <p
        class="mb-1 animate-pulse h-[14px] w-full rounded bg-neutral-300/90 dark:bg-neutral-400/80"
      ></p>
      <p
        class="mb-3 animate-pulse h-[14px] w-full rounded bg-neutral-300/90 dark:bg-neutral-400/80"
      ></p>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2">
        <div
          class="w-10 h-4 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
        <div
          class="w-10 h-4 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
        <div
          class="w-10 h-4 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="w-10 h-4 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
        <div
          class="w-10 h-4 rounded animate-pulse bg-neutral-300/90 dark:bg-neutral-400/80"
        ></div>
      </div>
    </div>
  </div>
</template>
