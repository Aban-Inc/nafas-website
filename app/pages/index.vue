<script setup lang="ts">
// No explicit `title` here -- app.vue's titleTemplate already renders the
// no-title fallback as the full branded headline ("Nafas — Self-hosted
// observability..."); setting one here would either duplicate it or (with
// the template's "<title> · Nafas" suffix) read as "<title> · Nafas · Nafas".
useSeoMeta({
  description: 'Logs, metrics, traces, and alerts for ASP.NET Core, embedded in your own app with real ingestion and zero external dependencies. Two calls in Program.cs.'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: 'Nafas.Observability',
        description: 'Self-hosted, embeddable observability dashboard for ASP.NET Core -- logs, metrics, traces, and alerts, with real ingestion and zero external dependencies.',
        codeRepository: 'https://github.com/Aban-Inc/nafas.observability.package',
        programmingLanguage: 'C#',
        license: 'https://github.com/Aban-Inc/nafas.observability.package/blob/main/LICENSE.md',
        applicationCategory: 'DeveloperApplication'
      })
    }
  ]
})
</script>

<template>
  <div>
    <MarketingHero />
    <MarketingFeatureGrid />
    <MarketingCodeSample />
    <MarketingSignalTable />
    <MarketingComparisonCallout />
    <MarketingCompatibilityStrip />
    <MarketingCtaBand />
  </div>
</template>
