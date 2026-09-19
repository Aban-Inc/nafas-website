<script setup lang="ts">
// Overrides Nuxt Content's default `<pre>` renderer for every fenced code
// block across all docs pages (component name must be exactly `ProsePre`,
// at components/ root with no subfolder -- a nested folder like
// components/content/ProsePre.vue gets path-prefixed to `ContentProsePre`
// by Nuxt's auto-import, which would silently NOT override anything).
defineOptions({ inheritAttrs: false })

const props = defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
}>()

const attrs = useAttrs()
const preEl = ref<HTMLPreElement | null>(null)

// Prefer the raw `code` prop Nuxt Content passes in; fall back to reading
// the rendered <code> text directly so this still works even if that prop
// isn't populated for some content source.
const copyText = computed(() => props.code ?? preEl.value?.textContent ?? '')
</script>

<template>
  <div class="pro-pre">
    <div class="pro-pre-bar">
      <span class="pro-pre-lang">{{ language || filename || 'code' }}</span>
      <UiCopyButton :text="copyText" />
    </div>
    <pre ref="preEl" v-bind="attrs"><slot /></pre>
  </div>
</template>

<style scoped>
.pro-pre {
  position: relative;
  /* Each fenced code block is its own block-level element with the inner
     <pre>'s own margin forced to 0 below -- without this, consecutive
     blocks (e.g. a bash line immediately followed by a csharp block) sit
     flush against each other with no breathing room. */
  margin: 24px 0;
}
.pro-pre-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-bottom: none;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.pro-pre-lang {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11.5px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--text-label);
}
.pro-pre :deep(pre) {
  /* !important: docs/[...slug].vue's own `.docs-article :deep(pre)` rule
     sets all four corners rounded at the same specificity -- this only
     needs to win the top two now that the language/copy bar sits above. */
  border-radius: 0 0 var(--radius-md) var(--radius-md) !important;
  margin: 0;
}
/* Shiki assigns each token its own inline color (light/dark theme pair via
   CSS vars), tuned for a generic light/dark background -- against this
   site's own dark palette some of those (a bash "flag"-like token color in
   particular) read as low-contrast/hard to parse next to plain text, and
   the resulting multi-color wall clashes with the rest of the site's
   single-accent-color restraint. Flattened to one readable color, same
   choice the homepage's own code sample (MarketingCodeSample, plain text,
   no highlighter) already made. */
.pro-pre :deep(pre) span {
  color: var(--text-primary) !important;
}
</style>
