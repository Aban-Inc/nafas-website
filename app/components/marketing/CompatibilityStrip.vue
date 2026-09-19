<script setup lang="ts">
const badges = [
  'netstandard2.0',
  '.NET Core 2.0+',
  '.NET 5+',
  '.NET Framework 4.6.1+',
  'SQLite',
  'SQL Server 2016+'
]
</script>

<template>
  <section class="compat">
    <div class="container">
      <div class="badges">
        <UiBadge v-for="b in badges" :key="b">{{ b }}</UiBadge>
      </div>
    </div>
  </section>
</template>

<style scoped>
.compat { padding: 24px 0 56px; }
.badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
</style>
