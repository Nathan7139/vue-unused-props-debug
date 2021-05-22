<template>
  <div class="hello">
    <h1>{{ msgInternal }}</h1>
  </div>
</template>

<script>
import { computed, defineComponent, toRefs } from '@vue/composition-api';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const { msg } = toRefs(props);

        return {
            msgInternal: computed(() => msg.value),
        }
    }
});
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
