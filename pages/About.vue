<template>
  <div class="bg-zinc-100">
      <Header />
      <main class="isolate">
        <!-- Content section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 class="text-pretty text-3xl font-semibold tracking-tight text-sky-700 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              About Dream Digital
            </h1>
            <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p class="text-xl/8 text-gray-700 font-semibold">
                  Dream Digital is a one-woman tech support studio built for small business owners who want smart digital systems
                  without the overwhelm.

                </p>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                  Founded by Kerry, an educator-turned-digital-maker, Dream Digital exists to make the world of domains, websites, 
                  automations, AI tools and Notion dashboards feel friendly, clear, and doable. Whether you’re launching your first 
                  service, streamlining your workflows, or just tired of duct-taping tech together, you’ve come to the right place.
                </p>
                <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-violet-700 sm:text-5xl">
                  What Makes Us Different?
                </h2>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                  We’re not an agency. We’re not corporate. We don’t believe in bamboozling clients with acronyms or one size
                  fits all systems. Instead, we meet you where you are, listen to what you need, and build you a system that’s 
                  tailored, tidy, and totally manageable.
                </p>
                <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-sky-700 sm:text-5xl">
                  Why “Dream Digital”?
                </h2>
                <p class="mt-10 max-w-xl text-xl/8 text-gray-700">
                 Because the tech side of business should feel like a dream—calm, clear, and finally working for you, not against you. 
                 Whether it’s your inbox, your client onboarding, your website, or your Notion workspace, our goal is simple: make it 
                 feel good to use.
                </p>

                <!-- Team section -->
                <h2 class="mt-5 text-pretty text-4xl font-semibold tracking-tight text-violet-700 sm:text-5xl">
                  Meet Kerry
                </h2>
                <ul role="list" class="mt-10 max-w-xl text-xl/8" >
                  <li v-for="person in people" :key="person.name" class="flex flex-col gap-6 xl:flex-row">
                    <!-- <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl" alt="" />-->
                    <NuxtImg 
                      :src="person.imageUrl" 
                      alt="" 
                      class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                      width="208"
                      height="260"
                      format="webp"
                      loading="lazy" /> 
                    <div class="flex-auto">
                      <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ person.name }}</h3>
                      <p class="text-base leading-7 text-gray-600">{{ person.role }}</p>
                      <p class="mt-6 text-base leading-7 text-gray-600">{{ person.bio }}</p>
                    </div>
                  </li>
                </ul> 
              </div>
              <div class="lg:flex lg:flex-auto lg:justify-center">
                <dl class="w-64 space-y-8 xl:w-80">
                  <!-- Vision Section-->
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-fuchsia-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-fuchsia-700">
                      V I S I O N
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        To create a world where every small business owner feels confident, capable, and in control of their digital 
                        tools.
                      </p>
                    </div>
                  </div>
                  <!-- Mission Section-->
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-violet-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-violet-700">
                      M I S S I O N
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        Dream Digital exists to be the friendly tech sidekick that keeps your business running 
                        smoothly. I turn confusing tools into simple, connected systems that save you time and 
                        cut the stress. Wherever you are in the UK, you get easygoing remote support that makes 
                        tech feel less like a chore and more like having a digital bestie in your corner.
                      </p>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Values section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-violet-100">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-sky-700 sm:text-5xl">
              Our values
            </h2>
            <p class="mt-6 text-lg/8 text-gray-700">
              Our 5 core values are:
            </p>
          </div>
          <dl class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="value in values" :key="value.name">
              <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
              <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
            </div>
          </dl>
        </div>
      </main>
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
    bio: "I’ve spent years helping young people and educators feel confident with code, and now I help small business founders feel confident with their digital tools. I combine a teacher’s patience with a maker’s mindset and I’ll never make you feel silly for asking questions. I believe tech should serve you, not stress you. That’s why I build systems that are not just smart, but simple.",
  },
  // More people...
]
const values = [
    {
      name: 'E X P E R T I S E',
      description:
        'We know the tech inside out, so you don’t have to.',
    },
    {
      name: 'C R E A T I V I T Y',
      description:
        'We find smart solutions that work for your business, not just what is trendy.',
    },
    {
      name: 'S U P P O R T',
      description:
        'We’re here when you need us. With answers that actually help.',
    },
    {
      name: 'F R I E N D L Y',
      description:
        'We explain things in plain English, never making you feel silly for asking.',
    },
    {
      name: 'E D U C A T I O N',
      description:
        'We help you understand your digital world, so you feel confident using it.',
    },
  ];

  useHead({
    title: 'About Dream Digital | Friendly Freelance Tech Support UK',
    meta: [
      { name: 'description', content: 'Meet the freelance digital consultant behind Dream Digital. Friendly, practical tech support helping small business owners feel confident with their systems.' },
      { name: 'keywords', content: 'freelance digital consultant, small business tech support UK, approachable IT support' },
      { name: 'author', content: 'Kerry Kidd' },
      { property: 'og:title', content: 'About - Dream Digital'},
      { property: 'og:description', content: 'Meet the freelance digital consultant behind Dream Digital. Friendly, practical tech support helping small business owners feel confident with their systems.' },
      { property: 'og:url', content: 'https://dreamdigital.uk/about' },
      { property: 'og:type', content: 'website' },
    ],
  })
</script>