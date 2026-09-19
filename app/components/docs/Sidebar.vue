<script setup lang="ts">
const route = useRoute()

const { data: navigation } = await useAsyncData('docs-navigation', () =>
  queryCollectionNavigation('docs')
)

// The navigation root is the `docs` collection's own top-level entry (whose
// `path` is `/docs` itself, from content/docs/index.md) -- its `children`
// are the numbered group folders (1.getting-started, 2.how-it-works, ...),
// each of those in turn holding the actual page links we want in the nav.
const groups = computed(() => navigation.value?.[0]?.children ?? [])

// Same trailing-slash normalization as pages/docs/[...slug].vue -- a real
// visit's route.path carries the trailing slash a static host serves
// directory routes with (e.g. "/docs/foo/"), but item.path/group.path from
// Content's nav tree never do, so a literal === would never highlight the
// active item outside of local dev preview.
const normalizedRoutePath = computed(() => route.path.replace(/(.+)\/$/, '$1'))
const isActive = (path: string) => normalizedRoutePath.value === path
</script>

<template>
  <nav class="docs-nav" aria-label="Documentation">
    <div v-for="group in groups" :key="group.path" class="group">
      <!-- A folder group (Getting Started, How It Works, ...) has its own
           children to list; a lone top-level page (Contributing, with no
           subfolder of its own) IS the link -- rendering it as an inert
           group-title with nothing underneath would make it unreachable
           from the nav. -->
      <template v-if="group.children?.length">
        <div class="group-title">{{ group.title }}</div>
        <NuxtLink
          v-for="item in group.children"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: isActive(item.path) }"
        >
          {{ item.title }}
        </NuxtLink>
      </template>
      <NuxtLink
        v-else
        :to="group.path"
        class="nav-item group-link"
        :class="{ active: isActive(group.path) }"
      >
        {{ group.title }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.docs-nav { display: flex; flex-direction: column; gap: 22px; }
.group-title {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: var(--text-label);
  padding: 0 12px 8px;
}
.nav-item {
  display: block;
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 13.5px;
  color: var(--text-secondary);
}
.nav-item:hover { background: var(--bg-hover); color: var(--text-primary); }
.nav-item.active {
  color: var(--accent-bright);
  background: var(--accent-dim);
  font-weight: 600;
}
/* Deliberately plain .nav-item styling, not the muted uppercase
   .group-title look -- this row IS a clickable link (the section has no
   subfolder of its own), and disguising it as an inert header would make
   it read as unclickable. */
.group-link { font-weight: 600; }
</style>
