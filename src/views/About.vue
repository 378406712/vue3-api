<script>
import { h, ref, reactive } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    return () =>
      h('h1', [
        h('span', ['1', h('span', [count.value])]),
        h('span', [object.foo])
      ])
  }
}
</script>

<style></style>
