import { ref } from "vue"
/**
 *
 * @param initialValue the initial value of counter
 * @returns
 */
export function useCounter(initialValue:number = 0, step:number = 1) {
  const count = ref<number>(initialValue)
  const increment = ()=>{
    count.value = count.value + step
  }

  const decrement = ()=>{
    count.value = count.value - step
  }
  return {
    count,
    increment,
    decrement
  }
}
