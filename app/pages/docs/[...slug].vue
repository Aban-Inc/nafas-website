<script setup lang="ts">
// Layout applied explicitly below (not via definePageMeta) so the docs
// layout's right-rail TOC slot can be filled with this page's own table of
// contents -- definePageMeta's automatic layout only forwards the default
// slot, with no way to target a layout's named slots from the page.
definePageMeta({ layout: false })

const route = useRoute()

const { data: page } = await useAsyncData(`docs-${route.path}`, () =>
  queryCollection('docs').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <NuxtLayout name="docs">
    <article class="docs-article" v-if="page">
      <h1>{{ page.title }}</h1>
      <p class="lede">{{ page.description }}</p>
      <ContentRenderer :value="page" />
    </article>
    <template #toc>
      <DocsToc :links="page?.body?.toc?.links" />
    </template>
  </NuxtLayout>
</template>

<style scoped>
.docs-article { max-width: 74ch; }
h1 { font-size: 30px; margin: 0 0 8px; }
.lede { color: var(--text-secondary); font-size: 15.5px; margin: 0 0 32px; }

.docs-article :deep(h2) { font-size: 21px; margin: 40px 0 14px; padding-top: 8px; }
.docs-article :deep(h3) { font-size: 16.5px; margin: 28px 0 10px; }
.docs-article :deep(p) { color: var(--text-secondary); line-height: 1.7; font-size: 15px; }
.docs-article :deep(ul),
.docs-article :deep(ol) { color: var(--text-secondary); line-height: 1.7; font-size: 15px; padding-inline-start: 22px; }
.docs-article :deep(li) { margin-bottom: 6px; }
.docs-article :deep(a) { color: var(--accent-bright); text-decoration: underline; text-underline-offset: 2px; }
.docs-article :deep(code) {
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.88em;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--accent-bright);
}
.docs-article :deep(pre) {
  background: var(--bg-solid);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  overflow-x: auto;
}
.docs-article :deep(pre code) { background: none; border: none; padding: 0; color: var(--text-primary); }
.docs-article :deep(table) { width: 100%; border-collapse: collapse; font-size: 14px; margin: 8px 0 24px; }
.docs-article :deep(th),
.docs-article :deep(td) { text-align: start; padding: 10px 12px; border-bottom: 1px solid var(--border-subtle); }
.docs-article :deep(th) { color: var(--text-label); font-size: 12px; text-transform: uppercase; letter-spacing: 0.4px; }
.docs-article :deep(blockquote) {
  border-inline-start: 3px solid var(--accent);
  margin: 20px 0;
  padding: 4px 16px;
  color: var(--text-secondary);
}
</style>
