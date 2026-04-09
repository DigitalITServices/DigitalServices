<!--<template>
  <article>
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </article>
</template> -->
<template>
  <div class="font-sans">
    <Header />
    <!-- <h1> {{ post.title }} </h1> -->
    <div class="relative py-16 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-emerald-300" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-emerald-300" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-emerald-300" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <article class="relative px-4 sm:px-6 lg:px-8 markdown-body">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center font-semibold tracking-wide uppercase">
              {{ post.author }}
            </span>
            <span class="mt-2 block text-center leading-8 tracking-tight">
              {{ post.title }}
            </span>
          </h1>
          <!--<img
            class="w-full rounded-lg mt-12"
            :src="post.image"
            :alt=""
            width="1310"
            height="873"
          /> -->
          <ContentRenderer :value="post.body" />
        </div>
        <!-- <div class="mt-6 prose prose-blue prose-lg text-gray-700 mx-auto">
          <ContentRenderer :value="post.body" />
        </div>-->
      </article> 
      
    </div>
    <newsletter-form />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog')
    .path(route.path)
    .first()
)

if (!post.value) {
  throw createError({ statusCode: 404 })
}

useSeoMeta({
  title: post.value.seo?.title || post.value.title,
  description: post.value.seo?.description || post.value.description
})
</script>