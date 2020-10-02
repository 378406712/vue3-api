<template>
  <div>{{ state.name }}</div>
  <div>{{ foo }}---{{ bar }}</div>
</template>

<script>
import { toRefs, reactive } from 'vue'
function useFeatureX() {
  const state = reactive({
    foo: 'foo',
    bar: 'bar'
  })

  // 对 state 的逻辑操作

  // 返回时将属性都转为 ref
  return toRefs(state)
}
export default {
  props: {
    state: String
  },
  setup() {
    // 可以解构，不会丢失响应性
    const { foo, bar } = useFeatureX()

    return {
      foo,
      bar
    }
  }
}
</script>

<style></style>
