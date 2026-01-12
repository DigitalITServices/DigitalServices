<template>
  <nav class="flex bg-zinc-100" aria-label="Breadcrumb">
    <ol role="list" class="flex space-x-4 rounded-md bg-zinc-100 px-6 shadow-sm dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
      <li class="flex">
        <div class="flex items-center">
          <a href="/" class="text-violet-500 hover:text-gray-500 dark:text-violet-500 dark:hover:text-sky-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg class="h-full w-6 shrink-0 text-gray-200 dark:text-white/10" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="page.href" class="ml-4 text-sm font-medium text-violet-500 hover:text-gray-700 dark:text-violet-500 dark:hover:text-sky-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>

const pages = [
  { name: 'Services', href: '/Services', current: true },
  { name: 'Digital Kickstart', href: '/digital-kickstart', current: false },
  { name: 'Notion HQ', href: '/notion-hq', current: false },
  { name: 'Smart System Setup', href: '/smart-systems', current: false },
  { name: 'Tech Peace of Mind Plan', href: '/tech-support-plan', current: false },
]
</script>