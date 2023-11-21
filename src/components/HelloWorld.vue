<template>
  <div class="hello">
    <h1>{{ msgInternal }}</h1>
  </div>
</template>

<script setup>
import { 
  computed,
  // toRefs, // uncomment it to fix eslint error
  defineProps
} from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const { msg } = toRefs(props)
const msgInternal = computed(() => msg.value)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
