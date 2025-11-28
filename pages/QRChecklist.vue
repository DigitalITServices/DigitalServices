<template>
  <Header />
  <div class="bg-zinc-100 px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-4xl font-semibold tracking-tight text-sky-700 sm:text-6xl">
        Feeling Overwhelmed by Tech?
      </h1>
      <h2 class="text-4xl font-semibold tracking-tight text-violet-700 sm:text-6xl">
       Lets Fix That!
      </h2>
      <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
        Grab your free checklist made for small business owners who want to get digitally organised and clear the clutter. Without the stress, faff or jargon.
      </p>
    </div>
    </div>
    <div class="overflow-hidden bg-zinc-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-sky-700 sm:text-5xl">
              What's inside the checklist?
            </h2>
            <ul role="list" class="mt-8 space-y-8 text-gray-700 text-xl">
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>

              <span>
                A tidy professional email set-up
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
              <span>
                Simple password storage that saves your sanity
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>

              <span>
                Booking systems that stop the back and forth
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>

              <span>
                A clear digital filing system you can actually find stuff in
              </span>
            </li>
            <li class="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>

              <span>
                Time-saving tips (hello, automations!)
              </span>
            </li>

          </ul>
          </div>
        </div>
        
        <img src="/images/ChecklistMockup.png" alt="Digital Clarity Checklist on laptop" class="inset-0 w-75 h-75" />
      </div>
    </div>
  </div>
  
  <div class="bg-zinc-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <div class="col-span-2">
         <!-- <h2 class="text-base/7 font-semibold text-indigo-600">Everything you need</h2> -->
          <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-violet-700 sm:text-5xl">
            Is This You?
          </h2>
        </div>
        <dl class="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-700 sm:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-9">
            <dt class="font-semibold text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a21caf" class="absolute top-1 left-0 size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
              {{ feature.name }}
            </dt>
            <!--<dd class="mt-2">{{ feature.description }}</dd>-->
          </div>
        </dl>
      </div>
      <h2 class="text-3xl font-semibold tracking-tight text-sky-700 sm:text-5xl text-center mt-10">
       Then this checklist is for you!
      </h2>
    </div>
  </div>
  <QRCTAForm />
  <div class="bg-zinc-100 px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h1 class="text-4xl font-semibold tracking-tight text-sky-700 sm:text-6xl">
        Want someone to just sort the tech for you?
      </h1>
    
      <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
        If you are nodding along but already feel too busy to tackle this on your own, we can help.
      </p>
    <p class="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
        That's exactly what my <b> Tech Peace of Mind Plan</b> is for. It's a friendly one-to-one digital tidy-up for your business.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="https://app.simplymeet.me/dream-digital/dream-digital-30-1751571285886" class="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500" target="_blank">
            Book a free clarity call
          </a>
        </div>
    </div>
    </div>
  <Footer />
</template>

<script setup>
const features = [
  {
    name: 'You are running a small business',
    
  },
  { name: 'Your digital systems feel like a bit of a mess',
  },
  { name: 'You don’t have time to figure it all out on your own',
  },
  { name: 'You want your tech to work for you, not against you',
  },]

   useHead({
      title: 'Digital Clarity Checklist - Dream Digital',
      meta: [
        { name: 'description', content: 'Dream Digital - Making tech easy for everyday founders. We provide tailored digital solutions including website setup, CRM tools, AI integration, and ongoing support.' },
        { name: 'keywords', content: 'digital services, website setup, CRM tools, AI integration, Notion dashboards, tech support, email setup, domain setup' },
        { name: 'author', content: 'Kerry Kidd' },
        //{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Digital Clarity Checlist' },
        { property: 'og:description', content: 'Making tech easy for everyday founders with tailored digital solutions.' },
        { property: 'og:image', content: '/images/home.jpg' },
        { property: 'og:url', content: 'https://dreamdigital.uk' },
        { property: 'og:type', content: 'website' },
        //{ property: 'robots', content: 'index, follow' }
        ]
    });
  
</script>