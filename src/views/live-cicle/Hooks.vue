<template>
  <h1>{{ count }}</h1>
  <Test
    v-for="(item, index) of data"
    :item="item"
    :key="index"
    @remove="remove"
  />
</template>

<script>
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  ref,
  watchEffect,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered
} from 'vue'
import Test from './components/Test'
export default {
  components: { Test },
  setup() {
    const count = ref(0)
    const data = ref([
      {
        id: 1,
        title: 'first'
      },
      {
        id: 2,
        title: 'second'
      }
    ])
    setTimeout(() => (count.value += 1), 1000)
    onBeforeMount(() => console.log('onBeforeMount'))
    onMounted(() => console.log('onMounted'))
    onBeforeUpdate(() => console.log(count, 'onBeforeUpdate'))
    onUpdated(() => console.log(count, 'onUpdated'))
    // const instance = getCurrentInstance()
    watchEffect(
      () => {
        const a = count.value
        console.log(a, 'watchEffect')
      },
      { flush: 'post' }
    )
    const remove = (id) => {
      data.value = data.value.filter((item) => item.id !== id)
    }
    onErrorCaptured((e) => {
      console.log(e)
    })
    onRenderTracked((e) => {
      console.log(e)
      //   debugger
    })

    onRenderTriggered(() => {
      //   debugger
    })
    return { count, data, remove }
  }
}
</script>

<style></style>
