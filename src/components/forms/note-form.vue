<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import ColorInput from '@/components/forms/fields/color-input.vue'

import { NoteSchemas, type NoteSchemasType } from '@/lib/schemas/notes'

export type NoteFormRef = {
  getTitle: () => string
  setDescription: (description: string) => void
}

type Props = {
  defaultValues?: Partial<NoteSchemasType>
}

type Emits = {
  onSubmit: [value: NoteSchemasType]
}

defineOptions({ name: 'NoteForm' })

const DEFAULT_VALUES: NoteSchemasType = {
  title: '',
  description: '',
  color: '',
}
const props = withDefaults(defineProps<Props>(), {})
const emits = defineEmits<Emits>()

const form = useForm<NoteSchemasType>({
  validationSchema: toTypedSchema(NoteSchemas),
  initialValues: { ...DEFAULT_VALUES, ...props.defaultValues },
  validateOnMount: false,
})

const onSubmit = form.handleSubmit((values) => {
  emits('onSubmit', values)
})

const getTitle = () => form.values.title
const setDescription = (description: string) => {
  form.setFieldValue('description', description)
}

defineExpose({
  getTitle,
  setDescription,
})
</script>

<template>
  <form @submit="onSubmit" class="space-y-5">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Aa." v-bind="componentField" />
        </FormControl>
        <FormDescription> Titre de la note </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <div class="flex flex-row justify-between items-center">
          <FormLabel>Description</FormLabel>
          <slot name="genDescription"></slot>
        </div>
        <FormControl>
          <Textarea placeholder="Aa" v-bind="componentField" />
        </FormControl>
        <FormDescription>Description de la note.</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="color">
      <FormItem>
        <FormLabel>Couleur</FormLabel>
        <FormControl>
          <ColorInput :value="componentField.modelValue" @on-change="componentField.onChange" />
        </FormControl>
        <FormDescription>Couleur de la carte</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <slot></slot>
  </form>
</template>
