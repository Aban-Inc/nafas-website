<template>
  <section class="cta-band">
    <div class="container inner">
      <h2>Two NuGet packages. Zero infrastructure.</h2>
      <p>Nafas.Observability for any ASP.NET Core app, Nafas.Observability.Server for WinForms/WPF/console apps with no pipeline of their own.</p>
      <div class="row">
        <UiButton to="https://www.nuget.org/packages/Nafas.Observability" external>Nafas.Observability</UiButton>
        <UiButton to="https://www.nuget.org/packages/Nafas.Observability.Server" variant="secondary" external>Nafas.Observability.Server</UiButton>
        <UiButton to="/docs" variant="ghost">Read the docs →</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-band { padding: 56px 0; }
.inner {
  text-align: center;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 48px 24px;
  background: radial-gradient(480px 200px at 50% 0%, var(--accent-dim), transparent 70%);
}
h2 { font-size: 24px; margin: 0 0 10px; }
p { color: var(--text-secondary); max-width: 52ch; margin: 0 auto 24px; font-size: 14.5px; }
.row { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
</style>
