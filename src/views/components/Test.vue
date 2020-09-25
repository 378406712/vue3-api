<template>
  <h1>{{ attrs.title }}</h1>
  <button @click="changeName">子组件触发</button>
  <button @click="plus">子组件触发+100</button>
</template>

<script>
// import { watchEffect, watch } from 'vue'
export default {
  name: 'Test',
  //   props: {
  //     title: String
  //   },

  setup(props, { attrs, emit }) {
    console.log(attrs.title)

    const changeName = () => {
      emit('change', '我是子组件vue3.0')
    }
    // watch(
    //   () => props.title,
    //   (newValue) => {
    //     console.log(newValue, 'newValue')
    //   }
    // )
    // console.log(props)
    // watchEffect(() => {
    //   console.log(`name is: ` + props.title)
    // })
    const plus = () => {
      emit('plus', 100)
    }
    return {
      attrs,
      changeName,
      plus
    }
  }
}
</script>

<style></style>
