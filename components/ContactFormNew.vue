<template>
    <form 
        class="mx-auto mt-16 max-w-xl sm:mt-20"
        data-netlify-recaptcha="true"
        method="POST" 
        name="contact" 
        data-netlify="true"> 
      
        <input type="hidden" name="form-name" value="contact" />
        <!--<p hidden>
		      <label>Don’t fill this out: <input name="bot-field" /></label>
	      </p>-->
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input 
                  class="block w-full px-3.5 py-2 border-2 rounded-md text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6" 
                  id="first-name"  
                  name="first-name" 
                  type="text"
                  autocomplete="text"  
                  required 
                />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="last-name"
                 name="last-name" 
                 type="text" 
                 autocomplete="text"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company Name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="company"  
                 name="company" 
                 type="text"
                 autocomplete="organization"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company-role" class="block text-sm font-semibold leading-6 text-gray-900">Company Role</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="company-role"  
                 name="company-role" 
                 type="text"
                 autocomplete="organization-title"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="email"  
                 name="email" 
                 type="email"
                 autocomplete="email"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input 
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="phone-number"  
                 name="phone-number" 
                 type="tel"
                 autocomplete="text"  />
              </div>
            </div>
            <!--<div class="sm:col-span-2">
              <label for="Service" class="block text-sm font-semibold leading-6 text-gray-900"> Service you are enquiring about </label>
              <div class="mt-2.5">
                <input 
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="service"  
                 name="service" 
                 type="text"
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div> -->
            
            <!-- Services List -->
            <Listbox as="div" v-model="selected" class = "sm:col-span-2">
              <ListboxLabel class="block text-sm/6 font-medium text-gray-900">
                Servce you are enquiring about
              </ListboxLabel>
              <div class="relative mt-2 px-3.5 py-2 shadow-sm ring-2 ring-inset border-sky-700 border-2 rounded-md">
                <ListboxButton class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-sky-700 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-700 sm:text-sm/6">
                  <span class="col-start-1 row-start-1 truncate pr-6">{{ selected.name }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-700 sm:size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                    </svg>


                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm">
                    <ListboxOption as="template" v-for="service in services" :key="service.id" :value="service" v-slot="{ active, selected }">
                      <li :class="[active ? 'bg-sky-600 text-white outline-hidden' : 'text-gray-900', 'relative cursor-default py-2 pr-9 pl-3 select-none']">
                        <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ service.name }}</span>

                        <span v-if="selected" :class="[active ? 'text-white' : 'text-sky-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
              <p class="text-red-700 text-xs italic"> Required </p>
            </Listbox>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea 
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-sky-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="message" 
                 id="message" 
                 rows="4"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
          </div>
          <!-- Privacy Policy & Mailing List Acceptance-->
          <div>
            <input type="checkbox" name="privacy" id="checkbox" v-model="checked" required />
            <label for="checkbox"> I accept Dream Digital's 
              <a href= "/Privacy-Policy.pdf" class="text-gray-900 font-medium hover:text-sky-700" target="_blank"> 
                Privacy Policy. 
              </a> 
              {{ }}
            </label>
          </div>
          <div>
            <input type="checkbox" name ="mailing" id="checkbox" v-model="mailing" />
            <label for="checkbox"> I would like to sign up to Dream Digital's Mailing List 
                {{ }}
              </label>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div class="mt-8 flex justify-end">
            <button type="submit"  class="rounded-md bg-violet-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Send message
            </button>
          </div>
        </div>
      </form>
</template>

<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
//import { ChevronUpDownIcon } from '@heroicons/vue/16/solid'
//import { CheckIcon } from '@heroicons/vue/20/solid'

const services = [
  { id: 1, name: 'Digital Kickstart' },
  { id: 2, name: 'Smart Systems Setup' },
  { id: 3, name: 'Notion HQ' },
  { id: 4, name: 'Tech Peace of Mind Plan' },
  { id: 5, name: 'Other' },
  /*{ id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },*/
]

const selected = ref(services[3])
const checked = ref(false)
const mailing = ref(false)
</script>