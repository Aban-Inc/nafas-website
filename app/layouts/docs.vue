<template>
  <div class="page">
    <UiSiteHeader />
    <div class="container docs-shell">
      <aside class="rail rail-left">
        <DocsSidebar />
      </aside>
      <main class="docs-main">
        <slot />
      </main>
      <aside class="rail rail-right">
        <slot name="toc" />
      </aside>
    </div>
    <UiSiteFooter />
  </div>
</template>

<style scoped>
.docs-shell {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 200px;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 80px;
  align-items: start;
}
.rail { position: sticky; top: 88px; }
.rail-right { font-size: 13px; }

@media (max-width: 960px) {
  .docs-shell { grid-template-columns: 200px minmax(0, 1fr); }
  .rail-right { display: none; }
}
@media (max-width: 680px) {
  .docs-shell { grid-template-columns: 1fr; }
  .rail-left { display: none; }
}
</style>
