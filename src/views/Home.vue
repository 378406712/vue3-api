<template>
  <div class="home"></div>
  <span>reactive:{{ counts }}</span>
  <span>ref:{{ count }}</span>
  <button @click="add">+1</button>
  <Test :title="title" @change="changeName" @plus='plus'/>
</template>

<script>
import Test from './components/Test'
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'Home',
  components: { Test },

  setup() {
    console.log(this)
    const state = reactive({
      counts: 0
    })
    const title = ref('我是父组件vue2.0')
    const count = ref(1)
    const add = () => {
      count.value += 1
      state.counts += 1
    }
    setTimeout(() => {
      title.value = '我是父组件vue3.0'
    }, 2000)
    const changeName = () => {
      console.log(123)
        title.value = '我是子组件vue3.0'
    }
    const plus = (value)=>{
      count.value += value
      state.counts += value
    }
    return {
      count,
      ...toRefs(state),
      add,
      title,
      changeName,
      plus
    }
  }
  //  beforeCreate(){
  //    console.log('beforeCreate')
  //  }
}
</script>
