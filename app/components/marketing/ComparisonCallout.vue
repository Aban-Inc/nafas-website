<template>
  <section class="callout">
    <div class="container">
      <UiCard class="callout-card">
        <h2>Is this for you?</h2>
        <div class="two-col">
          <div>
            <h3 class="yes">Nafas is a good fit if</h3>
            <ul>
              <li>you run one app (or a handful) and want real observability without standing up infrastructure</li>
              <li>you want the same "just works" posture as Hangfire's own dashboard: secured to local requests by default</li>
              <li>SQLite or SQL Server already covers your storage needs</li>
            </ul>
          </div>
          <div>
            <h3 class="no">Reach for OTel + Prometheus/Grafana instead if</h3>
            <ul>
              <li>you need federation across dozens of services or long-term, high-cardinality storage</li>
              <li>you're already exporting to a central observability backend</li>
              <li>you need a query language beyond what a single embedded dashboard offers</li>
            </ul>
          </div>
        </div>
      </UiCard>
    </div>
  </section>
</template>

<style scoped>
.callout { padding: 40px 0; }
.callout-card { padding: 32px; }
h2 { margin: 0 0 24px; font-size: 24px; text-align: center; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
h3 { font-size: 14.5px; margin: 0 0 12px; }
h3.yes { color: var(--accent-bright); }
h3.no { color: var(--text-secondary); }
ul { margin: 0; padding-inline-start: 18px; display: flex; flex-direction: column; gap: 10px; }
li { font-size: 14px; color: var(--text-secondary); line-height: 1.55; }

@media (max-width: 720px) {
  .two-col { grid-template-columns: 1fr; gap: 28px; }
}
</style>
