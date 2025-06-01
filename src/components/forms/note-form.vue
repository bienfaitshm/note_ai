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
}
const props = withDefaults(defineProps<Props>(), {})
const emits = defineEmits<Emits>()

const form = useForm<NoteSchemasType>({
  validationSchema: toTypedSchema(NoteSchemas),
  initialValues: { ...DEFAULT_VALUES, ...props.defaultValues },
})

const onSubmit = form.handleSubmit((values) => {
  emits('onSubmit', values)
})
</script>

<template>
  <form @submit="onSubmit" class="space-y-5">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription> Titre de la note </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="description">
      <FormItem>
        <FormLabel>Description</FormLabel>
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
          <!-- <Textarea placeholder="Aa" v-bind="componentField" /> -->
        </FormControl>
        <FormDescription>Couleur de la carte</FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <slot></slot>
  </form>
</template>
