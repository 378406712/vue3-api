<template>
  <div>
    <span>{{ item.title }}</span>
    <button @click="remove(item.id)">删除</button>
  </div>
</template>

<script>
import { onBeforeUnmount , onUnmounted } from 'vue'
export default {
  props: {
    item: Object
  },
  setup(props, ctx) {
    const remove = (id) => {
      ctx.emit('remove', id)
    }
    onBeforeUnmount(() => {
      console.log(`id为${props.item.id}的项即将被删除`)
    })
    onUnmounted(() => {
      console.log(`id为${props.item.id}的项即将被删除`)
    })
   
    return {
      remove
    }
  }
}
</script>

<style></style>
