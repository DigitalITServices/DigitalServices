<template>
    <form 
        class="grid grid-cols-1 gap-y-6 p-3"
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
              <label for="first-name" class="block text-sm font-semibold leading-6">First name</label>
              <div class="mt-2.5">
                <input 
                  class="block w-full px-3.5 py-2 border-2 rounded-md shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6" 
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
              <label for="last-name" class="block text-sm font-semibold leading-6">Last name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                 id="last-name"
                 name="last-name" 
                 type="text" 
                 autocomplete="text"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6">Company Name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                 id="company"  
                 name="company" 
                 type="text"
                 autocomplete="organization"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company-role" class="block text-sm font-semibold leading-6">Company Role</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                 id="company-role"  
                 name="company-role" 
                 type="text"
                 autocomplete="organization-title"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6">Email</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                 id="email"  
                 name="email" 
                 type="email"
                 autocomplete="email"  
                 required />
                <p class="text-red-700 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6">Phone number</label>
              <div class="mt-2.5">
                <input 
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
                 id="phone-number"  
                 name="phone-number" 
                 type="tel"
                 autocomplete="text"  />
              </div>
            </div>
            <div class="sm:col-span-2">
           <div class="relative mt-2 px-3.5 py-2 shadow-sm ring-2 ring-inset border-green-600 border-2 rounded-md">
              <label for="services" class="block text-sm font-semibold leading-6"> 
                Services 
              </label>
               <select name="services" id="services" class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-green-600 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" required>
                <option value="DigitalKickstart">
                  Digital Kickstart
                </option>
                <option value="SmartSystemsSetup">
                  Smart Systems Setup
                </option>
                <option value="NotionHQ">
                  Notion HQ
                </option>
                <option value="TechPeaceofMindPlan">
                  Tech Peace of Mind Plan
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
           </div>
              <p class="text-red-700 text-xs italic"> Required </p>
           </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6">Message</label>
              <div class="mt-2.5">
                <textarea 
                 class="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset border-green-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
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
              <a href= "/Privacy-Policy.pdf" class="text-gray-900 font-medium hover:text-green-600" target="_blank"> 
                Privacy Policy. 
              </a> 
              {{ }}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="mailing" id="mailing" v-model="mailing" value="yes" />
              I would like to sign up to Dream Digital's Mailing List 
            </label>
            <!--<input type="checkbox" name ="mailing" id="mailing" v-model="mailing" />
            <label for="mailing"> I would like to sign up to Dream Digital's Mailing List 
                {{ }}
              </label>-->
          </div>
          <div data-netlify-recaptcha="true"></div>
          <div class="mt-8 flex justify-end">
            <button type="submit"  class="rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">
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

/*const services = [
  { id: 1, name: 'Digital Kickstart' },
  { id: 2, name: 'Smart Systems Setup' },
  { id: 3, name: 'Notion HQ' },
  { id: 4, name: 'Tech Peace of Mind Plan' },
  { id: 5, name: 'Other' },
  /*{ id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]*/

//const selected = ref(services[3])
const checked = ref(false)
const mailing = ref(false)
</script>