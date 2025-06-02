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
  DialogClose,
} from '@/components/ui/dialog'
import NoteForm from '@/components/forms/note-form.vue'
import { ref } from 'vue'
import type { NoteSchemasType } from '@/lib/schemas/notes'

defineOptions({ name: 'AddNoteDialog' })
const btn = ref<HTMLButtonElement | null>(null)

const handleSubmit = () => {
  // compRef.value?.click()
  console.log(btn.value?.click)
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
        <Button type="submit">Enregistrer</Button>
      </NoteForm>
      <DialogFooter>
        <DialogClose as-child>
          <Button ref="btn" type="button" variant="secondary"> Fermer </Button>
        </DialogClose>
        <Button type="button" @click="handleSubmit"> Enregistrer </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
