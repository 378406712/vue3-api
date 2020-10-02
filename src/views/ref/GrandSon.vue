<template>
  <div ref="grandsons">孙子</div>
  <button @click="changeSonName">改变grandson</button>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const grandsons = ref(null)
    const changeSonName = () => {
      console.log(grandsons.value)
    }
    onMounted(() => console.log(grandsons.value))
    return { grandsons, changeSonName }
  }
}
</script>
