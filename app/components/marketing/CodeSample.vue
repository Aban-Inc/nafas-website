<script setup lang="ts">
const code = `builder.Services.AddNafasServer();

var app = builder.Build();
app.UseNafasDashboard("/nafas");

app.Run();`
</script>

<template>
  <section class="code-sample">
    <div class="container two-col">
      <div class="copy">
        <h2>That's the whole integration.</h2>
        <p>
          No collector to run, no exporter to configure, no separate storage
          to stand up. <code class="font-mono">AddNafasServer()</code> wires
          up SQLite storage and real ingestion; <code class="font-mono">UseNafasDashboard()</code>
          mounts the dashboard at whatever path your app chooses.
        </p>
      </div>
      <UiCard class="snippet">
        <pre class="font-mono"><code>{{ code }}</code></pre>
      </UiCard>
    </div>
  </section>
</template>

<style scoped>
.code-sample { padding: 64px 0; }
.two-col {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 48px;
  align-items: center;
}
h2 { font-size: 26px; margin: 0 0 14px; }
.copy p { color: var(--text-secondary); line-height: 1.65; font-size: 15px; }
.copy code {
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.9em;
  color: var(--accent-bright);
}
.snippet pre {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--text-primary);
  white-space: pre-wrap;
  word-break: break-word;
}
.snippet :deep(pre) { overflow-x: auto; }

@media (max-width: 860px) {
  .two-col { grid-template-columns: 1fr; }
}
</style>
