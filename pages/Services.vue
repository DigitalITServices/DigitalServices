<template>
  <div class="relative">
    <Header />
    <Breadcrumbs />
    <main>
      <div class="mt-12 mx-auto max-w-2xl text-center">
        <h1 class="text-pretty tracking-tight">
          Simple tech support for small businesses
        </h1>
        <p class="mt-8">
          Too many tools? Messy systems? <br>
          I help you fix what’s not working and make everything run smoothly.
        </p>
        <p class="mt-3 text-base/10">
          Working with solo founders and small businesses <br> 
          who are tired of figuring it all out themselves.
        </p>
        <!-- CTA Section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h3 class="text-pretty tracking-tight">
              Get your setup sorted
            </h3>
            <p class="mt-3 text-lg/8">
              Not sure where to start? Let’s simplify it.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                Book a Free Clarity Call
              </a>
              <NuxtLink to="/digital-clarity-checklist" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                Download the Checklist
              </NuxtLink>  
            </div>
          </div>
        </div>
        <h2 class="mt-12 text-pretty tracking-tight">
          You don’t need more tools
        </h2>
        <h3 class="mt-4 text-pretty tracking-tight text-gray-800">
          You need a setup that actually works
        </h3>
        <p class="mt-4">
          Most small business owners aren’t doing anything wrong. <br>
          They’ve just added tools over time without a clear system.
        </p>
        <p class="mt-4 font-medium">
          That’s when things start to feel messy.
        </p>

        <h2 class="mt-12 text-pretty tracking-tight">
          How I can help
        </h2>
        <p class="mt-4">
          Simple, practical support to get your tech working properly.
        </p>
      </div>
      <!-- Pricing section -->
      <form class="tiers pt-6 sm:pt-8">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
            <div v-for="tier in pricing.tiers" :key="tier.id" class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
              <div class="flex items-center justify-between gap-x-4">
                <h3 :id="`tier-${tier.id}`" class="text-center text-xl/8">{{ tier.name }}</h3>
              </div>
              <p class="mt-4 text-sm/6">{{ tier.description }}</p>
              <p class="text-center mt-6 flex items-baseline gap-x-1">
                <span class="text-4xl tracking-tight text-green-600"> {{ tier.price }}</span>
              </p>
              <p class="mt-4 text-sm/6"> 
                Every business is different, so I’ll always recommend the simplest option that works for you. 
              </p>
              <ul role="list" class="mt-8 space-y-3 text-sm/6">
                <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              
              <NuxtLink :to="`/${tier.id}`" :aria-describedby="`tier-${tier.id}`" class="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white ring-1 ring-green-200 ring-inset bg-green-600">
                Find Out More →
              </NuxtLink>
            </div>
          </div>
        </div>
      </form>

      <div class="mt-12 mx-auto max-w-2xl text-center">
        <h2 class="mt-12 tracking-tight text-balance">
          How it Works
        </h2>
       <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
          Step 1: 
          <span class="text-gray-800"> 
            We look at what you’ve got
          </span>
        </h3>
        <p class="mt-3 text-left">
          A quick review of your current setup so we can see what’s working and what’s not
        </p>
        <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
          Step 2: 
          <span class="text-gray-800"> 
            We simplify it
          </span>
        </h3>
        <p class="mt-3 text-left">
          We remove what you don’t need and organise what stays
        </p>
        <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
          Step 3: 
          <span class="text-gray-800"> 
            We make it work properly
          </span>
        </h3>
        <p class="mt-3 text-left">
          Everything is set up so it runs smoothly without you needing to remember every step
        </p>

        <h2 class="mt-12 text-pretty tracking-tight">
          Who this is for
        </h2>

        <p class="mt-3 flex">
          This is for you if:
        </p>

        <ul role="list" class="mt-8 space-y-8">
          <li class="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
            </svg>

            <span>
              Your tech feels messy or confusing
            </span>
          </li>
          <li class="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
            </svg>

            <span>
              You’ve got too many tools and no clear system
            </span>
          </li>
          <li class="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
            </svg>

            <span> 
              You’re wasting time on admin
            </span>
          </li>
          <li class="flex gap-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
              <path d="M16.5 7.5h-9v9h9v-9Z" />
              <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
            </svg>

            <span> 
              You just want things to work properly
            </span>
          </li>
        </ul>

        <!-- CTA Section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h3 class="text-pretty tracking-tight">
              Get your setup sorted
            </h3>
            <p class="mt-3 text-lg/8">
              Not sure what you need? Let’s take a look and simplify things.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                Book a Free Clarity Call
              </a>
              <NuxtLink to="/digital-clarity-checklist" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                Download the Checklist
              </NuxtLink>
            </div>
            <p class="mt-3 text-bold">
                No pressure. No jargon. Just clear next steps.
              </p>
          </div>
        </div>
      </div>

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
    <!--Newsletter -->
  <newsletter-form class="mt-10" />
    <Footer />
  </div>
</template>

<script setup>
const pricing = {
  tiers: [
    {
      name: 'Website Setup',
      id: 'digital-kickstart',
      price: '£600 – £1,200',
      description: 'A clean, simple website that clearly explains what you do and makes it easy for people to get in touch.',
      features: [
        'Clear messaging that makes sense to your audience', 
        'Simple structure that’s easy to navigate', 
        'Built to bring in enquiries, not just look good'
      ],
      //button: 'Find Out More →',
      //featured: false,
    },
   /* {
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
    }, */
    
    {
      name: 'Tech Support Plan',
      id: 'tech-support-plan',
      price: '£120/month',
      description: 'Ongoing support so you don’t have to figure everything out yourself or wait until something breaks.',
      features: [
        'Help when things stop working',
        'Ongoing improvements to your setup',
        'A single person to go to for anything tech-related',
      ],
      //featured: false,
    },
    {
      name: 'System Clean-up',
      id: 'smart-systems',
      price: 'From £150',
      description: 'We take what you already have, simplify it, and make it easier to manage day-to-day.',
      features: [
        'Reduce the number of tools you’re using', 
        'Organise your setup properly', 
        'Make everything easier to find and use'
      ],
      //featured: true,
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
  title: 'Small Business Tech Support & Website Setup | Dream Digital',
  meta: [
    { name: 'description', content: 'Tech support for small businesses. Fix messy systems, simplify your setup, and get everything running smoothly with Dream Digital.' },
    { name: 'keywords', content: 'small business tech services, digital systems for founders, freelance IT services UK' },
    { name: 'author', content: 'Kerry Kidd' },
    { property: 'og:description', content: 'Practical digital services for small businesses. From email and domains to automations, AI tools, and ongoing support. Explore how Dream Digital helps.' },
    //{ property: 'og:image', content: '/images/services.jpg' },
    { property: 'og:url', content: 'https://dreamdigital.uk/services' },
    { property: 'og:type', content: 'website' },
  ]
});
useSeoMeta({
      title: 'Small Business Tech Support & Website Setup | Dream Digital',
      ogTitle: 'Small Business Tech Support & Website Setup | Dream Digital'
    });
</script>