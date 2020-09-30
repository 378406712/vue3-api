<template>
  <Father />
  <button @click="changeTheme">更改主题</button>
</template>

<script>
import { provide, reactive, ref, readonly } from 'vue'
import Father from './Father'
export default {
  name: 'GF',
  components: { Father },
  setup() {
    const name = reactive({
      title: '张三'
    })
    const newColor = ref('yellow')
    const changeTheme = () => {
      name.title = '李四'
      newColor.value = 'green'
    }
    const changeName = () => {
      name.title = '王五'
      console.log(name.title)
    }
    provide('ThemeSymbol', readonly(name.title))
    provide('hobby', 'tennis')
    provide('hobnewColorby', newColor)
    provide('name', name)
    provide('changeName', changeName)
    return { name, changeTheme }
  }
}
</script>

<style></style>
