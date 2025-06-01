<script setup lang="ts">
import Counter from '@/components/Counter.vue'
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="space-y-4">
      <h1>Bonjour le monde</h1>
      <Counter :initial-value="2" :step="2" />
    </div>
  </div>
</template>

<style scoped></style>
