<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container grid">
      <div class="col brand">
        <div class="logo">
          <img src="/icon.png" width="24" height="24" alt="" />
          <span>Nafas</span>
        </div>
        <p class="tagline">Self-hosted, embeddable observability for ASP.NET Core.</p>
      </div>

      <div class="col">
        <div class="col-title">Docs</div>
        <a href="/docs/getting-started/quick-start">Quick start</a>
        <a href="/docs/configuration/options">Configuration</a>
        <a href="/docs/deployment/desktop-apps">Desktop apps</a>
      </div>

      <div class="col">
        <div class="col-title">Packages</div>
        <a href="https://www.nuget.org/packages/Nafas.Observability" target="_blank" rel="noopener noreferrer">Nafas.Observability</a>
        <a href="https://www.nuget.org/packages/Nafas.Observability.Server" target="_blank" rel="noopener noreferrer">Nafas.Observability.Server</a>
      </div>

      <div class="col">
        <div class="col-title">Project</div>
        <a href="https://github.com/Aban-Inc/nafas.observability.package" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/docs/contributing">License</a>
      </div>
    </div>

    <div class="container bottom">
      <span>&copy; {{ year }} Aban-Inc</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border-subtle);
  margin-top: 96px;
  padding-top: 48px;
}
.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 32px;
  padding-bottom: 32px;
}
.brand .logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 16px; }
.tagline { color: var(--text-muted); font-size: 13.5px; margin-top: 10px; max-width: 32ch; }

.col { display: flex; flex-direction: column; gap: 10px; }
.col-title { font-size: 12px; font-weight: 600; letter-spacing: 0.6px; color: var(--text-label); margin-bottom: 4px; }
.col a { font-size: 13.5px; color: var(--text-secondary); }
.col a:hover { color: var(--accent-bright); }

.bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 20px 24px;
  font-size: 12.5px;
  color: var(--text-muted);
}

@media (max-width: 720px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
</style>
