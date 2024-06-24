<template>
    <form 
        class="mx-auto mt-16 max-w-xl sm:mt-20"
         
        method="POST" 
        name="contact" 
        data-netlify="true"> 
      
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
		      <label>Don’t fill this out: <input name="bot-field" /></label>
	      </p>
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <div class="mt-2.5">
                <input 
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  id="first-name"  
                  name="first-name" 
                  type="text"
                  autocomplete="text"  
                  required 
                />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="last-name"
                 name="last-name" 
                 type="text" 
                 autocomplete="text"  
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company" class="block text-sm font-semibold leading-6 text-gray-900">Company Name</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="company"  
                 name="company" 
                 type="text"
                 autocomplete="organization"  
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="company-role" class="block text-sm font-semibold leading-6 text-gray-900">Company Role</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="company-role"  
                 name="company-role" 
                 type="text"
                 autocomplete="organization-title"  
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <div class="mt-2.5">
                <input
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="email"  
                 name="email" 
                 type="email"
                 autocomplete="email"  
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <div class="mt-2.5">
                <input 
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="phone-number"  
                 name="phone-number" 
                 type="tel"
                 autocomplete="text"  />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="Service" class="block text-sm font-semibold leading-6 text-gray-900"> Service you are enquiring about </label>
              <div class="mt-2.5">
                <input 
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 id="service"  
                 name="service" 
                 type="text"
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea 
                 class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 name="message" 
                 id="message" 
                 rows="4"  
                 required />
                <p class="text-red-500 text-xs italic"> Required </p>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button>
          </div>
        </div>
      </form>
</template>