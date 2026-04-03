<template>
    <Header />
    <Breadcrumbs />
    <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <!-- HERO SECTION -->
                <p class="text-base/7 font-bold text-green-600">
                    Smart Systems Setup
                </p>
                <h1 class="mt-2 tracking-tight text-pretty">
                    Fix your messy business setup
                </h1>
                <p class="mt-6">
                    Too many tools, things all over the place, and no clear system? <br>
                    I’ll help you simplify everything so it’s easier to manage day to day.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                        Fix my Setup
                    </a>
                    <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                        Book a Free Clarity Call
                    </a>  
                </div>
                <!-- PROBLEM -->
                <div class="mt-12">
                    <h2>
                        It builds up over time
                    </h2>
                    <h3 class="mt-4">
                        A tool here, a workaround there
                    </h3>
                    <p class="mt-8">
                        Most setups don’t start messy, they become messy.
                    </p>
                    <ul role="list" class="mt-8 space-y-8">
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                You’ve added tools as you’ve grown
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                Things don’t connect properly
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                You’re duplicating work without realising
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                You’re not sure what’s actually needed anymore
                            </span>
                        </li>
                    </ul>
                </div>
                <!-- WHAT THIS SERVICE DOES -->
                <div class="mt-12">
                    <h2>
                        What we do
                    </h2>
                    <p class="mt-8">
                        We take what you already have and turn it into a simple, organised system that actually 
                        works.
                    </p>
                    <ul role="list" class="mt-8 space-y-3">
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            Fewer tools
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            	Clear structure
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            Everything in the right place
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4caf50" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            	Less time spent on admin
                        </li>
                    </ul>
                </div>
                <!-- WHAT YOU GET -->
                <div class="mt-12">
                    <h2>
                        What you get
                    </h2>
                    <ul role="list" class="mt-8 space-y-8">
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                A clear overview of your current setup
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                Recommendations on what to keep, remove, or replace
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                A simplified system that’s easier to manage
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                Help setting everything up properly
                            </span>
                        </li>
                    </ul>
                </div>
                <!-- PRICING -->
                 <div class="mt-12">
                    <h2>
                        Simple, one-off clean-up 
                    </h2>
                    <div class="mt-4 group/tier rounded-3xl p-8 ring-1 bg-emerald-50 ring-gray-300 data-featured:ring-2 data-featured:ring-indigo-600">
                        <p class="mt-4">
                            <strong>
                                From £150
                            </strong>
                        </p>
                        <p class="mt-4">
                            Most clean-ups take 2–4 hours depending on how complex your setup is. 
                        </p>
                        <p class="mt-4">
                            We’ll always keep things as simple and cost-effective as possible.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                                Fix my Setup
                            </a> 
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
                            We review your setup
                        </span>
                    </h3>
                    <p class="mt-3 text-left">
                        We look at what you’re currently using and how it’s working.
                    </p>
                    <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
                        Step 2: 
                        <span class="text-gray-800"> 
                            We simplify it
                        </span>
                    </h3>
                    <p class="mt-3 text-left">
                        We remove what you don’t need and organise what stays.
                    </p>
                    <h3 class="mt-8 tracking-tight text-balance text-green-600 text-left">
                        Step 3: 
                        <span class="text-gray-800"> 
                            We put a better system in place
                        </span>
                    </h3>
                    <p class="mt-3 text-left">
                        Everything is set up so it’s clear, connected, and easy to use.
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
                                Your setup feels messy or confusing
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span>
                                You don’t trust your current system
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-green-600">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>

                            <span> 
                                You’ve got too many tools
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
                    </ul>
                </div>
            </div>
            <!-- CTA Section -->
            <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-10 lg:px-8 sm:rounded-3xl bg-emerald-50">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-pretty tracking-tight">
                        Get your setup back under control
                    </h2>
                    <p class="mt-3 text-lg/8">
                        Not sure where to start? Let’s take a look and simplify it.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700" target="_blank">
                            Fix my Setup
                        </a>
                        <a href="https://app.simplymeet.me/dream-digital/discovery-call" class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-800 outline-gray-800 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2  hover:bg-emerald-100 focus-visible:outline-indigo-600">
                            Book a free clarity call
                        </a>
                    </div>
                </div>
                <p class="mt-6 text-sm/6">
                    No pressure. Just clear next steps.
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
        title: 'Business Systems Clean-Up for Small Businesses | Dream Digital',
        meta: [
            { name: 'description', content: 'Simplify your business systems. Reduce tools, organise your setup, and save time with a clear, easy-to-manage workflow.' },
            { name: 'keywords', content: 'business automations, smart digital systems, workflow automation for small businesses' },
            { name: 'author', content: 'Kerry Kidd' },
            { property: 'og:description', content: 'Smart digital systems that save time and reduce stress. Automations, integrations, and AI tools built around how your business actually works.' },
            //{ property: 'og:image', content: '/images/smart-systems-setup.jpg' },
            { property: 'og:url', content: 'https://dreamdigital.uk/smart-systems' },
            { property: 'og:type', content: 'website' }
        ]
    });
    useSeoMeta({
      title: 'Business Systems Clean-Up for Small Businesses | Dream Digital',
      ogTitle: 'Business Systems Clean-Up for Small Businesses | Dream Digital'
    });
</script>