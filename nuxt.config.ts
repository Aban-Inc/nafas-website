// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  // Dark-only, single-language (English) site for v1 -- see app/assets/css/tokens.css
  // for why 'dir' stays 'ltr' even though the underlying dashboard product defaults to
  // Farsi/RTL: the marketing site's own audience (NuGet/GitHub, international) is English.
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en', dir: 'ltr' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/icon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },

  css: ['~/assets/css/tokens.css', '~/assets/css/main.css'],

  // Consumed by @nuxtjs/sitemap and @nuxtjs/robots so every generated URL
  // (sitemap entries, canonical tags, OG urls) resolves to the final custom
  // domain, not the GitHub Pages *.github.io URL used before DNS cutover.
  site: {
    url: 'https://package.nafas.cloud',
    name: 'Nafas'
  },

  nitro: {
    prerender: {
      // Every route reachable from '/' (nav links, docs cross-links) gets
      // pre-rendered to real static HTML -- this is what makes the site
      // servable as plain files (GitHub Pages today, any static host
      // later) and crawlable by search engines with no client-side-only
      // shell. failOnError so a broken/unlinked docs page fails the build
      // loudly instead of silently shipping a 404 at that path.
      crawlLinks: true,
      failOnError: true,
      routes: ['/']
    }
  }
})
