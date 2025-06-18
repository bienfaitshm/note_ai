<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Loader2 } from 'lucide-vue-next'

defineOptions({ name: 'ButtonLoader' })

type Props = {
  isLoading?: boolean
  loadingText?: string
  onclick?: () => void
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  loadingText: 'Chargement...',
  type: 'button',
})
</script>
<template>
  <Button :type="props.type" :disabled="props.isLoading" :onclick="props.onclick">
    <template v-if="props.isLoading">
      <Loader2 className="h-4 w-4 animate-spin mr-2" />
      <span> {{ props.loadingText }}</span>
    </template>
    <template v-if="!props.isLoading">
      <slot></slot>
    </template>
  </Button>
</template>
