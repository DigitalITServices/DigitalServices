<template>
  <div class="bg-zinc-100">
      <Header />
      <main class="isolate">
        <!-- Content section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-20 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 class="text-pretty text-3xl font-semibold tracking-tight text-sky-700 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              About Dream Digital by RaspiKidd
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
                    <img class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" :src="person.imageUrl" alt="" />
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
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-fuchsia-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-fuchsia-700">
                      Vision
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        To create a world where every small business owner feels confident, capable, and in control of their digital 
                        tools—no jargon, no overwhelm, just calm, clever systems that work.
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-violet-200 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                    <p class="flex-none text-3xl font-bold tracking-tight text-violet-700">
                      Mission
                    </p>
                    <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                      <p class="mt-2 text-base/7 text-gray-900">
                        At Dream Digital, we help non-tech-savvy founders build smart, simple digital systems for their business. 
                        From email setup to automation, Notion dashboards to AI tools, we deliver tech support with a human touch so 
                        you can focus on doing what you love, while your systems run smoothly in the background.
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
              Our 6 core values are:
            </p>
          </div>
          <dl class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div v-for="value in values" :key="value.name">
              <dt class="font-semibold text-gray-900">{{ value.name }}</dt>
              <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
            </div>
          </dl>
        </div>
  
        <!-- Team section 
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our team</h2>
            <p class="mt-6 text-lg/8 text-gray-600">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
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
        </div> -->
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
      name: 'Clarity Over Complexity',
      description:
        'We explain things simply and cut through the jargon. Clear systems create confident founders.',
    },
    {
      name: 'Calm Is a Feature',
      description:
        'Tech can be overwhelming. We bring calm, steady guidance to every setup and support session.',
    },
    {
      name: 'Kindness First',
      description:
        'Whether you’re asking your first “what’s a domain?” or fine-tuning automations, you’ll always be met with patience, respect, and encouragement.',
    },
    {
      name: 'Empower, Don’t Overwhelm',
      description:
        'We don’t just do it for you we show you how, so you’re not dependent. Power = knowledge.',
    },
    {
      name: 'Progress, Not Perfection',
      description:
        'Digital systems are always evolving and that’s okay. We build flexibly and iterate without stress.',
    },
    {
      name: 'People Over Platforms',
      description:
        'We don’t push fancy tools unless they’re the right fit for you. Your business comes first.',
    },
  ]
</script>