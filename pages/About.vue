<template>
  <Header />
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-red-700 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            About
          </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          At RaspiKidd you can find all your IT needs in one place. We can fix or build hardware to your specifications, install all your software, build your website, and create eye-catching content for your business. Whether you need coding, video editing or graphics for web or social media, we are your one stop shop for all your needs.
        </p>
      </div>
      <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
        <li v-for="person in people" :key="person.name" class="flex flex-col gap-6 xl:flex-row">
          <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl" alt="" />
          <div class="flex-auto">
            <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ person.name }}</h3>
            <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
            <p class="mt-6 text-base leading-7 text-gray-600">{{ person.bio }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
  <!--footer -->
  <Footer />
</template>

<script setup>
const people = [
  {
    name: 'Kerry Kidd',
    role: 'Founder / CEO',
    imageUrl:
      '/images/KKProfile.jpg',
    bio: 'I have had a passion for IT for as long as I can remember. My mission is to make your digital life as pain free as possible.',
  },
  // More people...
]
</script>