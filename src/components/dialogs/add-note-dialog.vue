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
import NoteForm, { type NoteFormRef } from '@/components/forms/note-form.vue'
import ButtonGenerateDescription from '@/components/ButtonGenerateDescription.vue'
import { ref } from 'vue'
import type { NoteSchemasType } from '@/lib/schemas/notes'

defineOptions({ name: 'AddNoteDialog' })
const btn = ref<HTMLButtonElement | null>(null)
const formRef = ref<NoteFormRef | null>(null)

const handleSubmit = () => {
  if (btn.value) {
    btn.value.click() // ou autre
  }
}

const onSubmit = (value: NoteSchemasType) => {
  console.log('Submit', value)
}

const getTitle = (): string | undefined => {
  if (formRef.value) {
    return formRef.value.getTitle?.()
  }
}

const setDescription = (description: string) => {
  if (formRef.value) {
    return formRef.value.setDescription(description)
  }
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
      <NoteForm ref="formRef" @on-submit="onSubmit">
        <button ref="btn" type="submit" class="hidden">Enregistrer</button>
        <template #genDescription>
          <ButtonGenerateDescription
            @on-generate-description="setDescription"
            :get-title="getTitle"
          />
        </template>
      </NoteForm>
      <DialogFooter>
        <DialogClose as-child>
          <Button type="button" variant="secondary"> Fermer </Button>
        </DialogClose>
        <Button type="button" @click="handleSubmit"> Enregistrer </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
