<script setup lang="ts">
withDefaults(defineProps<{
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
}>(), {
  variant: 'primary'
})
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="btn"
    :class="`btn-${variant}`"
  >
    <slot />
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: var(--radius-md);
  font-size: 14.5px;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s;
  white-space: nowrap;
}
.btn:active { transform: translateY(1px); }

.btn-primary {
  background: var(--accent);
  color: #04120F;
}
.btn-primary:hover { background: var(--accent-bright); }

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border-color: var(--border-medium);
}
.btn-secondary:hover { background: var(--bg-hover); border-color: var(--accent); }

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
}
.btn-ghost:hover { color: var(--text-primary); background: var(--bg-hover); }
</style>
