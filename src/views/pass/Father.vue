<template>
  Father: <Child :name="name" />
  {{ theme }}
</template>

<script>
import Child from './Child'
import {inject} from 'vue'
export default {
  components: { Child },
  name: 'Father',
  props: {
    name: String
  },
  setup() {
    const theme = inject('ThemeSymbol', 'light' /* optional default value */)
    return {
      theme
    }
  }
}
</script>

<style></style>
