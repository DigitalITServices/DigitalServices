<template>
    <Header />
    <Breadcrumbs />
    <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <p class="text-base/7 font-bold text-green-600">
                    Website Setup
                </p>
                <h1 class="mt-2 tracking-tight text-pretty">
                    Get a simple website that actually brings enquiries
                </h1>
                <p class="mt-6">
                    If your current website feels unfinished, unclear, or something you avoid updating, 
                    I’ll help you get a clean, professional setup that works properly.
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

                <!-- PROBLEM -->
                <div class="mt-12">
                    <h2>
                        Most small business websites aren’t broken
                    </h2>
                    <h3 class="mt-8">
                        They’re just unfinished
                    </h3>
                    <p class="mt-3">
                        This is what it usually looks like:
                    </p>
                    <ul role="list" class="mt-8 space-y-8">
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                You built it yourself and never quite finished it
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                It doesn’t clearly explain what you do
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                You’re not getting enquiries from it
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                You’re not confident updating it
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- WHAT YOU GET -->
                <div class="mt-12">
                    <h2>
                        What you’ll get
                    </h2>
                    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                        <div class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 class="text-center">
                                    A clear, simple website
                                </h3>
                            </div>
                            <p class="mt-4">
                                Your site will clearly explain what you do and who it’s for, so visitors don’t 
                                have to guess.  
                            </p>
                        </div>
                        <div class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 class="text-center">
                                    Something you can actually use
                                </h3>
                            </div>
                            <p class="mt-4">
                                No complicated setup. You’ll feel confident making small updates without breaking 
                                anything.  
                            </p>
                        </div>
                        <div class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                            <div class="flex items-center justify-between gap-x-4">
                                <h3 class="text-center">
                                    A setup that works properly
                                </h3>
                            </div>
                            <p class="mt-4">
                                Everything is connected and set up so your site runs smoothly day to day.  
                            </p>
                        </div>
                    </div>
                    <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-3 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                        <!-- WHATS INCLUDED -->
                        <div class="mt-12">
                            <h2>
                                What's Included
                            </h2>
                            <ul role="list" class="mt-8 space-y-3">
                                <li class="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    A clean, professional website
                                </li>
                                <li class="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Mobile-friendly design
                                </li>
                                <li class="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Contact or enquiry setup
                                </li>
                                <li class="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Basic SEO setup
                                </li>
                                <li class="flex gap-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    Support getting everything live
                                </li>
                            </ul>
                        </div>

                        <!-- PRICING -->
                        <div class="group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                            <div class="mt-12">
                                <h2 class="text-center">
                                    Pricing
                                </h2>
                                <h3 class="mt-4 text-gray-800 text-center">
                                    From £600
                                </h3>
                                <p class="mt-4">
                                    Most websites fall between <strong>£600–£1,200</strong> depending on what 
                                    you need.
                                </p>
                                <p class="mt-4 text-sm/6">
                                    Every business is different, so I’ll always recommend the simplest option 
                                    that works for you.
                                </p>
                                <div class="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                                        Book a Free Clarity Call
                                    </a>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- HOW IT WORKS -->
            <div class="mt-12">
                <h2 class="tracking-tight text-pretty">
                    How it Works
                </h2>
                <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
                    Step 1: 
                    <span class="text-gray-800"> 
                        We plan your setup
                    </span>
                </h3>
                <p class="mt-3 text-left">
                    We look at what you need and map out a simple structure.
                </p>
                <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
                    Step 2: 
                    <span class="text-gray-800"> 
                        I build your site
                    </span>
                </h3>
                <p class="mt-3 text-left">
                    I create a clean, simple website based on what we agreed.
                </p>
                <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
                    Step 3: 
                    <span class="text-gray-800"> 
                        We launch and hand over
                    </span>
                </h3>
                <p class="mt-3 text-left">
                    Everything is set up and ready to go, with guidance so you feel confident using it.
                </p>
            </div>
            
            <!-- WHO'S IT FOR? -->
            <div class="mt-12">
                <h2>
                    Who this is for
                </h2>
                <p class="mt-3">
                    This is for you if:
                </p>
                <ul role="list" class="mt-8 space-y-8">
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                            <path d="M16.5 7.5h-9v9h9v-9Z" />
                            <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                        </svg>

                        <span>
                            Your current website feels unfinished or unclear
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                            <path d="M16.5 7.5h-9v9h9v-9Z" />
                            <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                        </svg>

                        <span>
                            You’re not getting enquiries from it
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                            <path d="M16.5 7.5h-9v9h9v-9Z" />
                            <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                        </svg>

                        <span> 
                            You’ve been putting off fixing it
                        </span>
                    </li>
                    <li class="flex gap-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                            <path d="M16.5 7.5h-9v9h9v-9Z" />
                            <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                        </svg>

                        <span> 
                            You just want something simple that works
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- CTA Section -->
        <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty tracking-tight">
                    Get your website sorted
                </h2>
                <p class="mt-3 text-lg/8">
                    Not sure where to start? Let’s take a look and keep it simple.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                        Book a Free Clarity Call
                    </a>
                    <NuxtLink to="/digital-clarity-checklist" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                        Download the Checklist
                    </NuxtLink>  
                </div>
                <p class="mt-6 text-sm/6">
                    No pressure. No jargon. Just clear next steps.
                </p>
            </div>
        </div>
    </div>
    <!--Newsletter -->
  <newsletter-form />
  
    <Footer />
</template>

<script setup>
    useHead({
        title: 'Simple Website Setup for Small Businesses | Dream Digital',
        meta: [
            { name: 'description', content: 'Simple website setup for small businesses. Get a clean, professional site that clearly explains what you do and brings in enquiries.' },
            { name: 'keywords', content: 'digital setup for small businesses, business tech starter package, email and domain setup UK' },
            { name: 'author', content: 'Kerry Kidd' },
            { property: 'og:description', content: 'LA simple digital kickstart for small businesses. Get email, domains, and core systems set up properly from day one. Start strong with Dream Digital.' },
            { property: 'og:image', content: '/images/digital-kickstart.jpg' },
            { property: 'og:url', content: 'https://dreamdigital.uk/digital-kickstart' },
            { property: 'og:type', content: 'website' }
        ]
    });
    useSeoMeta({
      title: 'Simple Website Setup for Small Businesses | Dream Digital',
      ogTitle: 'Simple Website Setup for Small Businesses | Dream Digital'
    });
</script>