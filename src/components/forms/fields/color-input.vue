<script setup lang="ts">
import type { ColorSchemasType } from '@/lib/schemas/notes'
defineOptions({ name: 'ColorChoisesInput' })

type Props = {
  value?: ColorSchemasType
}

type Emit = {
  onChange: [value: ColorSchemasType]
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const colors: ColorSchemasType[] = [
  { bgColor: 'blue', textColor: '#fff' },
  { bgColor: 'red', textColor: '#fff' },
]

const isSelected = (color: ColorSchemasType) => {
  return props.value?.bgColor === color.bgColor && props.value.textColor === color.textColor
}
const handleSelectColor = (color: ColorSchemasType) => {
  emit('onChange', color)
}
</script>
<template>
  <div class="flex gap-5 items-center">
    <div v-for="(color, idx) in colors" :key="`key${idx}`">
      <div
        :class="['h-10 w-10 cursor-pointer rounded-full', isSelected(color) && 'ring-2']"
        :style="{ backgroundColor: color.bgColor }"
        @click="handleSelectColor(color)"
      />
    </div>
  </div>
</template>

<style scoped></style>
