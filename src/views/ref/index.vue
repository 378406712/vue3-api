<template>
  <Child ref="child" />
  <button @click="changeChildName">改变childName</button>
</template>

<script>
import { ref } from 'vue'
import Child from './Child'
export default {
  components: { Child },
  setup() {
    const child = ref(null)

    const changeChildName = () => {
      child.value.changeChildName()
    }
    return {
      child,
      changeChildName
    }
  }
}
</script>

<style></style>
