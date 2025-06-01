<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import NoteForm from '@/components/forms/note-form.vue'
// import { useTemplateRef } from 'vue'
import type { NoteSchemasType } from '@/lib/schemas/notes'

defineOptions({ name: 'AddNoteDialog' })
// const compRef = useTemplateRef<HTMLButtonElement>('button-add-note-form')

const handleSubmit = () => {
  // compRef.value?.click()
}

const onSubmit = (value: NoteSchemasType) => {
  console.log('Submit', value)
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline"> Edit Profile </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Nouvelle note</DialogTitle>
        <DialogDescription> Ajouter une note </DialogDescription>
      </DialogHeader>
      <NoteForm @on-submit="onSubmit" :default-values="{ title: 'kilumba' }">
        <Button ref="button-add-note-form" type="submit">Enregistrer</Button>
      </NoteForm>
      <DialogFooter>
        <Button type="button" @click="handleSubmit"> Save changes </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
