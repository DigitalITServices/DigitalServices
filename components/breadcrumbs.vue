<template>
  <nav class="bg-orange-50 overflow-x-auto" aria-label="Breadcrumb">
    <ol role="list" class="flex whitespace-nowrap space-x-4 rounded-md bg-orange-50 px-4 sm:px-6 shadow-sm dark:shadow-none dark:outline dark:-outline-offset-1 dark:outline-white/10">
      <li v-for="page in pages.filter(page => !page.current)" :key="page.name" class="flex">
        <div class="flex items-center">
          <svg class="h-full w-6 shrink-0 text-green-600 dark:text-white/10" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a :href="page.href" class="ml-4 text-sm font-medium text-green-600 hover:text-emerald-500 dark:text-green-600 dark:hover:text-emerald-500" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
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