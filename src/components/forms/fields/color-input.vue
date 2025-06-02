<script setup lang="ts">
import { colors } from '@/constants/colors'
defineOptions({ name: 'ColorChoisesInput' })

type Props = {
  value?: string | number
}

type Emit = {
  onChange: [value: string | number]
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emit>()

const handleSelectColor = (color: number | string) => {
  emit('onChange', color)
}
</script>
<template>
  <div class="flex flex-wrap gap-3">
    <div v-for="(color, idx) in colors" :key="`key${idx}`" class="flex flex-wrap gap-3">
      <div
        :class="[
          'w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer ',
          props.value === color.id ? 'ring-2 ring-blue-500' : '',
        ]"
        :style="{ backgroundColor: color.bgColor }"
        @click="handleSelectColor(color.id)"
      />
    </div>
    <div
      class="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer"
      :style="{ backgroundColor: 'transparent' }"
      @click="handleSelectColor('')"
    />
  </div>
</template>

<style scoped></style>
