<script setup lang="ts">
const rows = [
  { signal: 'Logs', source: 'ILogger / ILoggerProvider', note: 'Every log call in your app and its dependencies, no bespoke sink.' },
  { signal: 'Traces', source: 'Activity / ActivitySource', note: 'The same primitives OpenTelemetry itself is built on.' },
  { signal: 'Metrics', source: 'Meter / MeterListener', note: 'Your own custom meters, plus CPU/memory resource metrics.' },
  { signal: 'Resource usage', source: 'GC.GetGCMemoryInfo / Win32 fallback', note: 'Container-aware where the runtime supports it.' }
]
</script>

<template>
  <section class="signal-table">
    <div class="container">
      <h2>Automatic. No instrumentation code.</h2>
      <p class="sub">Ingestion is decoupled from your request pipeline via a bounded, non-blocking channel — a burst of traffic slows nothing down.</p>
      <UiCard class="table-card">
        <div class="row header">
          <span>Signal</span><span>Source</span><span>Notes</span>
        </div>
        <div v-for="r in rows" :key="r.signal" class="row">
          <span class="signal">{{ r.signal }}</span>
          <span class="source font-mono">{{ r.source }}</span>
          <span class="note">{{ r.note }}</span>
        </div>
      </UiCard>
    </div>
  </section>
</template>

<style scoped>
.signal-table { padding: 40px 0; }
h2 { text-align: center; font-size: 26px; margin: 0 0 10px; }
.sub { text-align: center; color: var(--text-secondary); max-width: 56ch; margin: 0 auto 28px; font-size: 14.5px; }
.table-card { padding: 6px 24px; }
.row {
  display: grid;
  grid-template-columns: 130px 260px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 13.5px;
  align-items: baseline;
}
.row:last-child { border-bottom: none; }
.row.header { color: var(--text-label); font-size: 11.5px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; }
.signal { font-weight: 600; color: var(--text-primary); }
.source { color: var(--accent-bright); }
.note { color: var(--text-secondary); }

@media (max-width: 720px) {
  .row { grid-template-columns: 1fr; gap: 4px; padding: 16px 0; }
  .row.header { display: none; }
}
</style>
