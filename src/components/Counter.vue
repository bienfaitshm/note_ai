<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useCounter } from '@/hooks/counter'

defineOptions({ name: 'AppCounter' })

interface CounterProps {
  initialValue?: number
  step?: number
}

const props = withDefaults(defineProps<CounterProps>(), {
  initialValue: 0,
})

const { count, decrement, increment } = useCounter(props.initialValue, props.step)
</script>

<template>
  <div class="flex items-center gap-4">
    <Button @click="decrement" aria-label="Decrease counter"> Diminuer </Button>
    <h1 class="text-5xl font-bold select-none" aria-live="polite">
      {{ count }}
    </h1>
    <Button @click="increment" aria-label="Increase counter"> Augmenter </Button>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
