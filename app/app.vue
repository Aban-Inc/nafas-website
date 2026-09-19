<script setup lang="ts">
// Site-wide SEO defaults -- every page overrides title/description via its
// own useSeoMeta call (marketing pages directly, docs pages from Nuxt
// Content frontmatter); this is only the fallback + shared OG/theme values.
useSeoMeta({
  titleTemplate: (title) => (title ? `${title} · Nafas` : 'Nafas — Self-hosted observability for ASP.NET Core'),
  description: 'Nafas.Observability is a self-hosted, embeddable observability dashboard for ASP.NET Core: logs, metrics, traces, and alerts, with real ingestion and zero external dependencies.',
  themeColor: '#0F1117',
  ogType: 'website',
  ogSiteName: 'Nafas',
  ogImage: 'https://package.nafas.cloud/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
