<template>
  <div class="relative bg-zinc-100">
    <Header />
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-20 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-pretty text-3xl font-semibold tracking-tight text-sky-700 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
          From the Blog
        </h1>
        <!-- <p class="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
          Learn how to grow your business with our expert advice.
        </p> -->
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.path" class="flex flex-col items-start justify-between bg-violet-100">
          <div class="relative w-full">
            <img :src="post.image" alt="" class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800" />
            <div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10"></div>
          </div>
          <div class="flex max-w-xl grow flex-col justify-between">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-sky-00 dark:text-sky-900">{{ post.date }}</time>
            <!--  <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">{{ post.category.title }}</a>-->
            </div>
            <div class="group relative grow">
              <h3 class="mt-3 text-lg/6 font-semibold text-green-900 group-hover:text-green-600 dark:text-green-900 dark:group-hover:text-gray-300">
                <NuxtLink :to="post.path">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm/6 text-gray-900 dark:text-gray-900">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <!-- <img :src="post.authorimage" alt="" class="size-10 rounded-full bg-gray-100 dark:bg-gray-800" /> -->
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900 dark:text-gray-900">
                  <a :href="post.author.href">
                    <span class="absolute inset-0"></span>
                    {{ post.author }}
                  </a>
                </p>
               <!-- <p class="text-gray-600 dark:text-gray-400">{{ post.author.role }}</p> -->
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<!-- <template>
  <div>
    <h1>Blog Test</h1>

    <p>If you see this text, routing works.</p>

    <div v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path">
        <h2>{{ post.title }}</h2>
      </NuxtLink>

      <p>{{ post.description }}</p>
      <small>{{ post.date }}</small>
    </div>

    <!-- <pre>{{ posts }}</pre>
  </div>
</template> -->

<script setup>
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').all()
)
</script>