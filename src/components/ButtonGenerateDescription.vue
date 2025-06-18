<script setup lang="ts">
import { useGenerateDescription } from '@/hooks/queries'
import ButtonLoader from './ButtonLoader.vue'
import { Brain } from 'lucide-vue-next'

defineOptions({ name: 'ButtonGenerateDescription' })
type Props = {
  getTitle?: () => string | undefined
}
type Emits = {
  onGenerateDescription: [description: string]
}

const props = withDefaults(defineProps<Props>(), {})
const emits = defineEmits<Emits>()

const mutation = useGenerateDescription()

const handleGenerateDescription = () => {
  const title = props.getTitle?.()
  if (title) {
    mutation.mutate(
      { title },
      {
        onSuccess(data) {
          emits('onGenerateDescription', data.choices[0].message.content)
        },
      },
    )
  }
}
</script>

<template>
  <ButtonLoader :is-loading="mutation.isPending.value" :onclick="handleGenerateDescription">
    <Brain />
    <span>Generer une description</span>
  </ButtonLoader>
</template>
