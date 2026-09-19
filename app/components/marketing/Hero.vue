<template>
  <section class="hero">
    <div class="container hero-inner">
      <UiBadge>Free &amp; open source · FSL-1.1-ALv2</UiBadge>
      <h1>Self-hosted observability,<br />embedded in your own app.</h1>
      <p class="lead">
        Logs, metrics, traces, and alerts for ASP.NET Core, with real
        ingestion and <strong>zero external dependencies</strong>. No
        collector, no separate service, no Docker Compose file. Two calls in
        <code class="font-mono">Program.cs</code> and it's running.
      </p>

      <div class="cta-row">
        <UiButton to="/docs/getting-started/quick-start" variant="primary">Get started</UiButton>
        <UiButton to="https://github.com/Aban-Inc/nafas.observability.package" variant="secondary" external>
          View on GitHub
        </UiButton>
      </div>

      <div class="install-line font-mono">
        <span><span class="prompt">&gt;</span> dotnet add package Nafas.Observability</span>
        <UiCopyButton text="dotnet add package Nafas.Observability" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 88px 0 56px;
  background:
    radial-gradient(680px 340px at 50% -10%, var(--accent-dim), transparent 70%);
}
.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 22px;
}
h1 {
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.12;
  font-weight: 700;
  letter-spacing: -0.02em;
  max-width: 16ch;
  margin: 6px 0 0;
}
.lead {
  max-width: 62ch;
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}
.lead code {
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.9em;
  color: var(--accent-bright);
}
.cta-row { display: flex; gap: 12px; margin-top: 6px; }

.install-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 18px;
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 12px 14px 12px 20px;
  font-size: 14px;
  color: var(--text-secondary);
}
.install-line .prompt { color: var(--accent-bright); margin-inline-end: 8px; }
</style>
