<script setup lang="ts">
import DialogNote from '@/components/dialogs/add-note-dialog.vue'
import ButtonLoader from './components/ButtonLoader.vue'
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="space-y-4">
      <h1>Bonjour le monde</h1>
      <ButtonLoader :is-loading="false"> Generer La description </ButtonLoader>
      <DialogNote />
    </div>
  </div>
</template>

<style scoped></style>
