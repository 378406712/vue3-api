<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    // const proxyObj = reactive({
    //   a: 1,
    //   b: 2
    // })
    // console.log(proxyObj)
    // const count = ref(0)
    // const count = ref({ a: 1, b: 2 })
    // console.log(count.value.a, 111)
    const count = reactive([ref(0), 1])
    console.log(count[0].value)
  }
}
</script>

<style></style>
