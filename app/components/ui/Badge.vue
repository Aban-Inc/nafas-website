<template>
  <span class="badge"><slot /></span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 5px 11px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 600;
  background: var(--accent-dim);
  color: var(--accent-bright);
  border: 1px solid rgba(0,191,165,0.22);
}
</style>
