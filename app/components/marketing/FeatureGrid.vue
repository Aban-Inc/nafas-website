<script setup lang="ts">
// Icon path data reused verbatim from the dashboard's own sidebar
// (Nafas.Observability/ClientApp/src/components/AppSidebar.vue) -- an
// already-solved, on-brand icon set, not new artwork invented for the site.
const features = [
  {
    title: 'Logs',
    description: 'Every ILogger call, captured automatically the moment AddNafasServer() runs — no bespoke sink to wire up.',
    icon: 'M4 6h16M4 12h16M4 18h10'
  },
  {
    title: 'Metrics',
    description: 'Built on System.Diagnostics.Metrics — CPU, memory, and your own custom meters, charted out of the box.',
    icon: 'M4 17l4-5 3 3 4-7 5 6'
  },
  {
    title: 'Traces',
    description: 'Distributed traces via Activity/ActivitySource, the same primitives OpenTelemetry itself is built on.',
    icon: 'M7 6h6a3 3 0 013 3v0M7 18h6a3 3 0 003-3v0',
    extraIcon: 'M5 6m-2.2 0a2.2 2.2 0 105 0 2.2 2.2 0 10-5 0M5 18m-2.2 0a2.2 2.2 0 105 0 2.2 2.2 0 10-5 0M19 12m-2.2 0a2.2 2.2 0 105 0 2.2 2.2 0 10-5 0'
  },
  {
    title: 'Alerting',
    description: 'Threshold and absence rules, authored from the dashboard — fires only on state transitions, delivered to your own webhook.',
    icon: 'M12 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 005 15h14a1 1 0 00.707-1.707L18 11.586V8a6 6 0 00-6-6zM9 18a3 3 0 006 0H9z'
  }
]
</script>

<template>
  <section class="features">
    <div class="container">
      <h2>One package. Every signal.</h2>
      <div class="grid">
        <UiCard v-for="f in features" :key="f.title" class="feature-card">
          <div class="icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path :d="f.icon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
              <path v-if="f.extraIcon" :d="f.extraIcon" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.description }}</p>
        </UiCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features { padding: 40px 0; }
h2 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 32px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.feature-card { display: flex; flex-direction: column; gap: 10px; }
.icon-wrap {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  background: var(--accent-dim);
  color: var(--accent-bright);
  display: flex;
  align-items: center;
  justify-content: center;
}
h3 { font-size: 16px; margin: 4px 0 0; }
p { font-size: 13.5px; color: var(--text-secondary); line-height: 1.55; margin: 0; }

@media (max-width: 860px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
