<template>
  <input type="text" v-model="text" name="" id="" />
  <div @click="foos.num += 1">{{ foos.num }} ---reactive定义的响应式数据</div>
  <div @click="bar.num += 1">{{ bar.num }}---markRaw定义的非响应式数据</div>
  <div>{{ state.age }}----{{ state.nested.count }}</div>
  <button>点击</button>
</template>

<script>
import {
  customRef,
  isReactive,
  markRaw,
  reactive,
  shallowReactive,
  isReadonly,
  shallowReadonly,
  shallowRef,
  toRaw
} from 'vue'
function unDebounced(value, delay = 2000) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          // do something
          console.log(value)
          trigger()
        }, delay)
      }
    }
  })
}
export default {
  setup() {
    const foos = reactive({ num: 1 })
    const bar = markRaw({ num: 2 })
    console.log(isReactive(foos)) // false
    console.log(isReactive(bar)) // false

    const state = shallowReactive({
      age: 1,
      nested: {
        count: 2
      }
    })
    const stateReadonly = shallowReadonly({
      foo: 1,
      nested: {
        bar: 2
      }
    })

    const foo = shallowRef({}) // ref中传入的是一个对象， 则调用reactive方法转换成深层响应式代理
    // 更改对操作会触发响应
    // 但上面新赋的这个对象并不会变为响应式对象
    console.log(isReactive(foo.value), 'shallowRef') // false "shallowRef"
    // 变更 stateReadonly 的自有属性会失败
    stateReadonly.foo++
    // ...但是嵌套的对象是可以变更的
    isReadonly(stateReadonly.nested) // false
    stateReadonly.nested.bar++ // 嵌套属性依然可修改
    console.log(
      isReactive(state) // false
    )
    console.log(
      isReactive(state.age) // false
    )
    console.log(
      isReactive(state.nested) // false
    )
    // 变更 state 的自有属性是响应式的
    state.age++

    const baz = {}
    const reactiveFoo = reactive(baz)

    console.log(toRaw(reactiveFoo) === baz, 'toRaw') // true
    return {
      text: unDebounced('hello'),
      foos,
      bar,
      state,
      stateReadonly
    }
  }
}
</script>

<style></style>
