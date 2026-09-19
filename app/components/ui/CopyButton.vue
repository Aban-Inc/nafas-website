<script setup lang="ts">
const props = defineProps<{ text: string }>()

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
  } catch {
    // Clipboard API needs a secure context, satisfied here (https/localhost)
    // -- if it still throws (very old browser, denied permission), fail
    // silently rather than surface an error for a nice-to-have convenience.
    return
  }
  copied.value = true
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => { copied.value = false }, 1600)
}
</script>

<template>
  <button
    type="button"
    class="copy-btn"
    :class="{ copied }"
    @click="copy"
    :aria-label="copied ? 'Copied' : 'Copy to clipboard'"
  >
    <svg v-if="!copied" width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
    <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<style scoped>
.copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-hover);
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.copy-btn:hover { background: var(--bg-card); color: var(--text-primary); border-color: var(--border-medium); }
.copy-btn.copied { color: var(--accent-bright); border-color: rgba(0, 191, 165, 0.35); }
</style>
