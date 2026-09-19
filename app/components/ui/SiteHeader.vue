<script setup lang="ts">
const links = [
  { label: 'Docs', to: '/docs' },
  { label: 'GitHub', to: 'https://github.com/Aban-Inc/nafas.observability.package', external: true },
  { label: 'NuGet', to: 'https://www.nuget.org/packages/Nafas.Observability', external: true }
]
</script>

<template>
  <header class="site-header">
    <div class="container bar">
      <NuxtLink to="/" class="logo">
        <img src="/icon.png" width="28" height="28" alt="" />
        <span class="logo-text">
          <span class="logo-name">Nafas</span>
          <span class="logo-sub">OBSERVABILITY</span>
        </span>
      </NuxtLink>

      <nav class="nav">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.to"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="nav-link"
        >{{ link.label }}</a>
        <UiButton to="/docs/getting-started/quick-start" variant="primary">Get started</UiButton>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid var(--border-subtle);
  background: color-mix(in srgb, var(--bg-base) 78%, transparent);
  backdrop-filter: blur(12px);
}
.bar {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logo-text { display: flex; flex-direction: column; line-height: 1; }
.logo-name { font-size: 16px; font-weight: 700; letter-spacing: -0.3px; color: var(--text-primary); }
.logo-sub { font-size: 9px; font-weight: 600; letter-spacing: 1.4px; color: var(--text-label); margin-top: 3px; }

.nav { display: flex; align-items: center; gap: 22px; }
.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.15s;
}
.nav-link:hover { color: var(--text-primary); }

@media (max-width: 640px) {
  .nav-link { display: none; }
}
</style>
