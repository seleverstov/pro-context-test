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
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
};
</script>

<style scoped>

</style>
