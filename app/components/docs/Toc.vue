<script setup lang="ts">
defineProps<{
  links?: Array<{ id: string; text: string; depth: number; children?: any[] }>
}>()
</script>

<template>
  <nav v-if="links?.length" class="toc" aria-label="On this page">
    <div class="toc-title">On this page</div>
    <a v-for="link in links" :key="link.id" :href="`#${link.id}`" class="toc-link">
      {{ link.text }}
    </a>
  </nav>
</template>

<style scoped>
.toc { display: flex; flex-direction: column; gap: 2px; }
.toc-title {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--text-label);
  margin-bottom: 8px;
}
.toc-link {
  font-size: 13px;
  color: var(--text-muted);
  padding: 5px 0;
  border-inline-start: 2px solid transparent;
  padding-inline-start: 10px;
}
.toc-link:hover { color: var(--text-primary); border-inline-start-color: var(--border-medium); }
</style>
