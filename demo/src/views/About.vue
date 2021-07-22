<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>count: {{ count }}</h2>
    <button @click="add">add</button>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Home',
  components: {
  },
  setup() {
    let count = ref(0);

    function add() {
      count.value++;
    }
    
    return {
      count,
      add
    }
  }
}
</script>