<template>
  <h1>1</h1>
  <WatchEffect/>
</template>

<script>
import { readonly, reactive, watchEffect } from 'vue'
import WatchEffect from './WatchEffect'
export default {
    components:{WatchEffect},
  setup() {
    const reactiveObj = reactive({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      }
    })
    const newObj = readonly(reactiveObj)
    reactiveObj.a = 3
    newObj.c.e = 4
    console.log(newObj)
    watchEffect(() => {
      console.log(newObj, 'newObj')
    })
  }
}
</script>

<style></style>
