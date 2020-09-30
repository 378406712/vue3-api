<template>
  Child: {{ name.title }}
  <div>主题：{{ theme }},,,{{ hobby }}</div>
  <div>
    {{ hobnewColorby }}
    <div>
      {{ name.title }}-1
      <button @click="changeName">changename</button>
      <button @click="changeRead">子组件改值</button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const theme = inject('ThemeSymbol', 'light' /* optional default value */),
      hobby = inject('hobby', '1'),
      hobnewColorby = inject('hobnewColorby', '1'),
      name = inject('name', '1'),
      changeName = inject('changeName')
    const changeRead = () => {
      name.title = '改值成功'
    }
    return {
      theme,
      hobby,
      hobnewColorby,
      name,
      changeName,
      changeRead
    }
  }
}
</script>

<style></style>
