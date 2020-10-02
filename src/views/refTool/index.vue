<template>
  <Child :state="state" />
  <button @click="btnClick">click</button>
  <!-- {{ person.name }}---{{ person.age }} -->

  {{ count.title }}
  <div>{{ fruit }}</div>
</template>

<script>
import {
  isRef,
  reactive,
  toRef,
  toRefs,
  isProxy,
  isReactive,
  isReadonly,
  readonly,
  ref
} from 'vue'
import Child from './Child'
export default {
  components: { Child },
  setup() {
    // const toUnref = () => {
    //   alert(unref(count))
    // }
    // const person = ref({name:'jackie',age:12})
    const state = reactive({ name: 'jackie', age: 12 })
    const newState = reactive({ name: 'jackie', age: 1212 })
    const stateRef = toRefs(newState)
    const ageRef = toRef(state, 'name')
    const count = reactive({ title: readonly('tomato') })
    const fruit = readonly(ref('banana'))
    console.log(isRef(stateRef), 'isRef') //false 检查一个值是否为一个 ref 对象。
    console.log(isRef(ageRef), 'isRef') //true检查一个值是否为一个 ref 对象。
    console.log(isProxy(state), 'isProxy') //true 检查一个对象是否是由 reactive 方法创建的代理。
    console.log(isProxy(stateRef), 'isProxy') //false 检查一个对象是否是由 reactive/readonly  方法创建的代理。
    console.log(isReactive(count), 'isReactive') //true 检查一个对象是否是由reactive 创建的响应式代理(readonly包裹一层也算)。
    console.log(isReadonly(fruit), 'isReadonly') //false检查一个对象是否是由 reactive 创建的响应式代理。
    console.log(fruit.value, 'isReadonly') //true  检查一个对象是否是由 readonly 创建的只读代理。


    const btnClick = () => {
      state.name = 'chen'
    }
    return {
      state,
      ageRef,
      newState,
      fruit,
      //   toUnref,
      count,
      btnClick
    }
  }
}
</script>

<style></style>
