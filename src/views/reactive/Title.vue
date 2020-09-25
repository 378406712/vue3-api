<template>
  <h1>{{ newTitle.user }}</h1>
  <ReadOnly />
  <Time/>
</template>

<script>
import ReadOnly from './Readonly'
import Time from './Time'

import { computed, reactive } from 'vue'
export default {
  name: 'Title',
  components: { ReadOnly,Time },
  setup() {
    const newTitle = reactive({
      user: 'clover'
    })
    const getTitle = computed({
      get: () => console.log(111111111111),
      set: (val) => (newTitle.user = val)
    })
    getTitle.value = 'candy'
    console.log(newTitle.user)
    return {
      newTitle
    }
  }
}
</script>

<style></style>
