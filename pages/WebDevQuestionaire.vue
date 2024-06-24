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
                        <span class="block text-red-700 xl:inline">Questionnaire </span> <br>
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
                        
                        <div class="space-y-12">
                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-red-700">
                                    Personal Information
                                </h2>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            Company
                                        </label>
                                        <div class="mt-2">
                                            <input id="company-name" name="company-name" type="text" autocomplete="organization" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="company-role" class="block text-sm font-medium leading-6 text-gray-900">
                                            Company Role
                                        </label>
                                        <div class="mt-2">
                                            <input id="company-role" name="company-role" type="text" autocomplete="organization role" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div class="mt-2">
                                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-4">
                                        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="phone_number" id="phone_number" autocomplete="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            <p class="text-red-500 text-xs italic"> Required </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-red-700">
                                    Website Needs
                                </h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                    Here we will ask you a few questions about your website needs, so we can tailor the discovery call to your needs.
                                </p>

                                <div class="mt-10 space-y-10">
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Number of Pages
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            This is the amount of pages you require for your webite (About, contact us etc).
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="1-5" name="pages" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="1-5" class="block text-sm font-medium leading-6 text-gray-900">
                                                    1-5
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="6-10" name="pages" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    6-10
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="+10" name="pages" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="+10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    More than 10
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Shopping Cart -->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            E-commerce
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            Do you require on-line shop functionality?
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="yes" name="shopping-cart" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="yes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="no" name="shopping-cart" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Blog -->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Blogging
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            Are you planning on writing/publishing blog articles?
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="yes" name="blog" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="yes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="no" name="blog" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Editing -->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Website Editing
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            Do you want to be able to edit your webite?
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="yes" name="website-editing" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="yes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="no" name="website-editing" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Web Address -->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Domain Name
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            Do you already have a domain name?
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="yes" name="domain" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="yes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="no" name="domain" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- Email-->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Email Address
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            Do you have a business email address?
                                        </p>
                                        <p class="text-red-500 text-xs italic"> Required </p>
                                        <div class="mt-6 space-y-6">
                                            <div class="flex items-center gap-x-3">
                                                <input id="yes" name="business-email" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="yes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Yes
                                                </label>
                                            </div>
                                            <div class="flex items-center gap-x-3">
                                                <input id="no" name="business-email" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                <label for="6-10" class="block text-sm font-medium leading-6 text-gray-900">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" class="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                                Submit
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