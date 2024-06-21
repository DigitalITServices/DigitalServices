<template>
<!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative bg-gray-50">
    <div class="relative bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <!--Logo -->
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img class="h-8 w-auto sm:h-20" src="/images/RaspiKidd.svg" alt="Logo">
            </NuxtLink>
          </div>  
        </div>
      </div>
    </div>

    <main class="lg:relative">
      <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div class="relative max-w-xl mx-auto">
            <svg class="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-blue-300" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg class="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <div class="text-center">
               <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                    <span class="block text-red-700 xl:inline">Questionaire </span> <br>
                </h1>
                <p class="mt-4 text-lg leading-6 text-gray-500">
                    Just a few questions to get an idea of what you need so we can do a bit of preperation to tailor the service to you.
                </p>
            </div>
            <div class="mt-12">
                <form 
        class="mx-auto mt-16 max-w-xl sm:mt-20"
         
        method="POST" 
        name="questionaire" 
        data-netlify="true"> 
      
        <input type="hidden" name="form-name" value="questionaire" />
        <p hidden>
		      <label>Don’t fill this out: <input name="bot-field" /></label>
	      </p>
                    <div>
                        <label for="first_name" class="block text-sm font-medium text-gray-700">
                            First name
                        </label>
                        <div class="mt-1">
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div>
                    <div>
                        <label for="last_name" class="block text-sm font-medium text-gray-700">
                            Last name
                        </label>
                        <div class="mt-1">
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="company" class="block text-sm font-medium text-gray-700">
                            Company
                        </label>
                        <div class="mt-1">
                            <input type="text" name="company" id="company" autocomplete="organization" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone_number" class="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input type="text" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="+1 (555) 987-6543">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700">
                            Tell us about your business
                        </label>
                        <div class="mt-1">
                            <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> How many pages does your website need </p>
                        <input type="radio" id="lessThan5" name="pages" value="lessThan5">
                            <label for ="lessThan5">
                                1-5
                            </label> <br>
                        <input type="radio" id="lessThan10" name="pages" value="lessThan10">
                            <label for ="lessThan10">
                                5-10
                            </label> <br>
                        <input type="radio" id="moreThan10" name="pages" value="moreThan10">
                            <label for="moreThan10">
                                10+
                            </label>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> Do you need a shopping cart </p>
                        <input type="radio" id="yes" name="cart" value="yes">
                            <label for ="yes">
                                Yes
                            </label> <br>
                        <input type="radio" id="no" name="cart" value="no">
                            <label for ="no">
                                No
                            </label>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> Do you need a blog </p>
                        <input type="radio" id="yes" name="blog" value="yes">
                            <label for ="yes">
                                Yes
                            </label> <br>
                        <input type="radio" id="no" name="blog" value="no">
                            <label for ="no">
                                No
                            </label>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> Do you want to be able to edit your website </p>
                        <input type="radio" id="yes" name="edit" value="yes">
                            <label for ="yes">
                                Yes
                            </label> <br>
                        <input type="radio" id="no" name="edit" value="no">
                            <label for ="no">
                                no
                            </label>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> Do you have a domain name </p>
                        <input type="radio" id="yes" name="domain" value="yes">
                            <label for ="yes">
                                Yes
                            </label> <br>
                        <input type="radio" id="no" name="domain" value="no">
                            <label for ="no">
                                No
                            </label>
                    </div>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> Do you need emails setup </p>
                        <input type="radio" id="yes" name="email" value="yes">
                            <label for ="yes">
                                Yes
                            </label> <br>
                        <input type="radio" id="no" name="email" value="no">
                            <label for ="no">
                                No
                            </label>
                    </div>

                    <div class="sm:col-span-2">
                        <div class="flex items-start">
                            <!--<div class="flex-shrink-0">
                                <button type="button" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false">
                                    <span class="sr-only">
                                        Agree to policies
                                    </span>
                                    <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
                                </button>
                            </div>
                            <div class="ml-3">
                                <p class="text-base text-gray-500">
                                    By selecting this, you agree to the
                                    <a href="#" class="font-medium text-gray-700 underline">
                                        Privacy Policy
                                    </a>
                                    and
                                    <a href="#" class="font-medium text-gray-700 underline">
                                        Cookie Policy
                                    </a>.
                                </p>
                            </div>-->
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Let's talk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
  </div> 
  <!-- Footer -->
  <Footer />
</template>