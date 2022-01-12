<template>
  <div class="lists">
    <list v-for="list in lists" :key="list" :list="list"></list>
  </div>
</template>

<script>
import List from './List.vue';

export default {
  name: 'Lists',
  components: { List },
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
