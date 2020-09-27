<template>
  <!-- {{ count }} -->
  <h1 ref="myRef"></h1>
  <Time />
</template>

<script>
// import { watchEffect, ref, onMounted, watch } from 'vue'
export default {
//   setup() {
//     const count = ref(0)
//     setInterval(() => {
//       count.value = 1
//     }, 1000)
//     // const stop = watchEffect((onInvalidate) => {
//     //   console.log('count=> ', count.value)
//     //   if (count.value > 5) clearInterval(timer)
//     //   if (count.value > 6) stop()
//     //   onInvalidate(() => console.log('onInvalidate'))
//     // })
//     // watchEffect(
//     //   () => {
//     //     console.log(count.value)
//     //   },
//     //   {
//     //     flush: 'sync'
//     //   }
//     // )
//     // onBeforeUpdate(() => {
//     //   console.log('onBeforeUpdate')
//     // })
//     const myRef = ref(null)
//     watch(
//       () => {
//         return count.value
//       },
//       (count, prevCount) => {
//         console.log(count, 'count')
//         console.log(prevCount, 'prevCount')
//       }
//     )
//     onMounted(() => {
//       watchEffect(
//         () => {
//           console.log(myRef.value)
//         },
//         {
//           onTrack(e) {
//             console.log(e, 'onTrack')
//           }
//         },
//         {
//           onTrigger(e) {
//             console.log(e, 'onTrigger')
//           }
//         }
//       )
//     })
//     return {
//       myRef
//     }
//   }
}
</script>

<style></style>
