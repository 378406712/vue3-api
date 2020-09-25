<template>
  <button @click="change">change</button>
  {{ count }}{{ name }}
</template>
<script>
import { onBeforeUpdate, ref, watch, watchEffect } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const name = ref('张三')

    const change = () => {
      count.value++
    }
    // onBeforeUpdate(() => {
    //   console.log('onBeforeUpdate')
    // })
  const  stop =  watch(count, (newCount, oldCount, onInvalidate) => {
      console.log(newCount, oldCount)
      onInvalidate(() => {
        console.log('onInvalidate is triggerd')
      })
    })
    setTimeout(()=>{
        stop()
    },2000)
    return { change, count, name }
  }
}
</script>

<style></style>
