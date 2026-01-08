<template>
  <div class="bg-zinc-100">
    <Header />
    <main>
      <!-- Pricing section -->
      <form class="tiers bg-zinc-100 pt-24 sm:pt-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-2xl font-bold text-sky-700">Services</h1>
            <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-violet-500 sm:text-6xl">
              What We Offer
            </p>
          </div>
          <p class="mx-auto mt-6 max-w-2xl text-center text-4xl font-semibold text-pretty text-sky-700 sm:text-xl/8">
            Simple, Friendly Digital Support, Built For Small Business Owners
          </p>
          <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            <div v-for="tier in pricing.tiers" :key="tier.id" class="group/tier rounded-3xl p-8 ring-1 bg-violet-100 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
              <div class="flex items-center justify-between gap-x-4">
                <h3 :id="`tier-${tier.id}`" class="text-center text-xl/8 font-bold text-sky-700">{{ tier.name }}</h3>
              </div>
              <p class="mt-4 text-sm/6 text-gray-600">{{ tier.description }}</p>
              <p class="text-center mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl font-semibold tracking-tight text-sky-700">{{ tier.price }}</span>
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0284c7" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              
              <NuxtLink :to="`/${tier.id}`" :aria-describedby="`tier-${tier.id}`" class="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white ring-1 ring-violet-200 ring-inset bg-violet-600">
                Find Out More →
              </NuxtLink>
            </div>
          </div>
        </div>
      </form>

      <!-- FAQ section -->
      <!--<div class="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
          <dl class="mt-16 divide-y divide-gray-900/10">
            <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="py-6 first:pt-0 last:pb-0" v-slot="{ open }">
              <dt>
                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                  <span class="text-base/7 font-semibold">{{ faq.question }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon v-if="!open" class="size-6" aria-hidden="true" />
                    <MinusSmallIcon v-else class="size-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base/7 text-gray-600">{{ faq.answer }}</p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div> -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
const pricing = {
  tiers: [
    {
      name: 'Digital Kickstart',
      id: 'digital-kickstart',
      price: '£497',
      description: 'You will look pro and be found online in just a few days.',
      features: [
        'Domain & Email Setup', 
        'Website builder install/template', 
        'Business email flows'
      ],
      //button: 'Find Out More →',
      //featured: false,
    },
    {
     name: 'Notion HQ',
      id: 'notion-hq',
      price: '£997',
      description: 'The only app you need to run everything.',
      features: [
        'Custom Notion Dashboards',
        'Client Portal',
        'Business wiki & Task Tracker', 
      ],
      //featured: false,
    },
    {
      name: 'Smart Systems Setup',
      id: 'smart-systems',
      price: '£1,497',
      description: 'Your biz runs itself, so you can focus on what you love.',
      features: [
        'CRM Setup', 
        'Automation Workflows', 
        'AI Productivity tools'
      ],
      //featured: true,
    },
    {
      name: 'Tech Peace of Mind Plan',
      id: 'tech-support-plan',
      price: '£297 per month',
      description: 'Think of me as your IT bestie.',
      features: [
        'Monthly adhoc support',
        'One to one training calls',
        'Emergency help when things break',
      ],
      //featured: false,
    },
  ],
}
/*const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]*/
/*methods: {
  goToTierPage(tier.id); {
    this.$router.push({ name: 'TierPage', params: { id: tierId } });
  }
}*/
useHead({
  title: 'Services - Dream Digital',
  meta: [
    { name: 'description', content: 'Explore our digital services including website setup, Notion dashboards, CRM tools, and ongoing tech support.' },
    { name: 'keywords', content: 'digital services, website setup, Notion dashboards, CRM tools, tech support' },
    { name: 'author', content: 'Kerry Kidd' },
    { property: 'og:title', content: 'Dream Digital - Services' },
    { property: 'og:description', content: 'Explore our digital services including website setup, Notion dashboards, CRM tools, and ongoing tech support.' },
    //{ property: 'og:image', content: '/images/services.jpg' },
    { property: 'og:url', content: 'https://dreamdigital.uk/Services' },
    { property: 'og:type', content: 'website' },
  ]
})
</script>