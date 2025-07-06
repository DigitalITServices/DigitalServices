import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'
export default defineNuxtPlugin(() => {
  // Initialise PostHog only if consent is given
  if (typeof window !== 'undefined') {
    const consent = getConsentCategory()
    if (consent.includes('analytics')) {
      posthog.init('phc_ltaJgnJ6mhUSb8txyagX8KX6xEwNOQHI6x1iU12ePDj', {
        api_host: 'https://watermelon.dreamdigital.uk',
        capture_pageview: true,
      })
    }
  }
})

function getConsentCategory(): string[] {
  const consentCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('cookieyes-consent='))
  if (!consentCookie) return []

  try {
    const value = decodeURIComponent(consentCookie.split('=')[1])
    return value.split(',')
  } catch (e) {
    return []
  }
}

window.addEventListener('cookieyes_consent_update', () => {
  const categories = getConsentCategory()
  if (categories.includes('analytics') && !posthog.__loaded) {
    posthog.init('phc_ltaJgnJ6mhUSb8txyagX8KX6xEwNOQHI6x1iU12ePDj', {
      api_host: 'https://watermelon.dreamdigital.uk',
      capture_pageview: true,
    })
  }
})