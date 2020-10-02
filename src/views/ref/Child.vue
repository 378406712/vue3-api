<template>
  ChildName:{{ name }}
  <GrandSon ref="grandson" />
  <ul>
    <li
      v-for="(item, index) of student"
      :key="index"
      :ref="
        (el) => {
          list[index] = el
        }
      "
    >
      {{ item.id }}---{{ item.name }}
    </li>
  </ul>
</template>

<script>
import GrandSon from './GrandSon'
import { onMounted, reactive, ref } from 'vue'
export default {
  components: { GrandSon },
  setup() {
    const list = ref([])
    const name = ref('张三')
    const student = reactive([
      { id: 1, name: '小红' },
      { id: 2, name: '小黄' },
      { id: 3, name: '小紫' },
      { id: 4, name: '小绿' }
    ])
    const changeChildName = () => {
      name.value = '李四'
    }

    onMounted(() => console.log(list.value[1]))
    return { name, changeChildName, student, list }
  }
}
</script>

<style></style>
