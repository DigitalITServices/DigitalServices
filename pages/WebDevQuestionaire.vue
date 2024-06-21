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
                            <!--<div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">
                                    Profile
                                </h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-4">
                                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">
                                            Username
                                        </label>
                                        <div class="mt-2">
                                            <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                                    workcation.com/
                                                </span>
                                                <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">
                                            About
                                        </label>
                                        <div class="mt-2">
                                            <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                        <p class="mt-3 text-sm leading-6 text-gray-600">
                                            Write a few sentences about yourself.
                                        </p>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">
                                            Photo
                                        </label>
                                        <div class="mt-2 flex items-center gap-x-3">
                                            <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                Change
                                            </button>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">
                                            Cover photo
                                        </label>
                                        <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div class="text-center">
                                                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">
                                                        or drag and drop
                                                    </p>
                                                </div>
                                                <p class="text-xs leading-5 text-gray-600">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <div class="border-b border-gray-900/10 pb-12">
                                <h2 class="text-base font-semibold leading-7 text-red-700">
                                    Personal Information
                                </h2>
                                <!-- <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> -->

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="company-name" class="block text-sm font-medium leading-6 text-gray-900">
                                            Company
                                        </label>
                                        <div class="mt-2">
                                            <input id="company-name" name="company-name" type="text" autocomplete="organization" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div class="mt-2">
                                            <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>
                                    <div class="sm:col-span-4">
                                        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="phone_number" id="phone_number" autocomplete="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <!--<div class="sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div class="mt-2">
                                            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2 sm:col-start-1">
                                        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">
                                            State / Province
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">
                                            ZIP / Postal code
                                        </label>
                                        <div class="mt-2">
                                            <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        </div>
                                    </div> -->
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
                                    <!--<fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            By Email
                                        </legend>
                                        <div class="mt-6 space-y-6">
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="comments" class="font-medium text-gray-900">
                                                        Comments
                                                    </label>
                                                    <p class="text-gray-500">
                                                        Get notified when someones posts a comment on a posting.
                                                    </p>
                                                </div>
                                            </div>
              
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="candidates" class="font-medium text-gray-900">
                                                        Candidates
                                                    </label>
                                                    <p class="text-gray-500">
                                                        Get notified when a candidate applies for a job.
                                                    </p>
                                                </div>
                                            </div>
              
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="offers" class="font-medium text-gray-900">
                                                        Offers
                                                    </label>
                                                    <p class="text-gray-500">
                                                        Get notified when a candidate accepts or rejects an offer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset> -->
                                    <!-- No of Pages -->
                                    <fieldset>
                                        <legend class="text-sm font-semibold leading-6 text-gray-900">
                                            Number of Pages
                                        </legend>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            This is the amount of pages you require for your webite (About, contact us etc).
                                        </p>
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

                    <!--<div>
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
                    </div> <br>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                        </div>
                    </div> <br>
                    <div class="sm:col-span-2">
                        <label for="phone_number" class="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input type="text" name="phone_number" id="phone_number" autocomplete="tel" class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="+1 (555) 987-6543">
                        </div>
                    </div> <br>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700">
                            Tell us about your business
                        </label>
                        <div class="mt-1">
                            <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                        </div>
                    </div> <br>
                    <div class="sm:col-span-2">
                        <p class="block text-sm font-medium text-gray-700"> How many pages does your website need </p>
                        <input type="radio" id="1-5" name="pages" value="1-5">
                            <label for ="1-5">
                                1-5
                            </label> <br>
                        <input type="radio" id="5-10" name="pages" value="5-10">
                            <label for ="5-10">
                                5-10
                            </label> <br>
                        <input type="radio" id="moreThan10" name="pages" value="moreThan10">
                            <label for="moreThan10">
                                10+
                            </label>
                    </div> <br>
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
                    </div> <br>
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
                    </div> <br>
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
                    </div> <br>
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
                    </div> <br>
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
                    </div> <br> -->

                    <!--<div class="sm:col-span-2">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
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
                            </div>
                        </div> 
                    </div> 
                    <div class="sm:col-span-2">
                        <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Let's talk
                        </button>
                    </div> -->
            </div>
            </div>
            </div>
        </main>
   
    </div> 
    <!-- Footer -->
    <Footer />
</template>