<template>
  <div class="list-index">
    <div class="list-panel">
      <Lists :lists="lists"></Lists>
    </div>
    <div class="list-panel">
      <list-explorer :lists="lists"></list-explorer>
    </div>
  </div>
</template>

<script>
import Lists from './Lists.vue';
import ListExplorer from './ListExplorer.vue';

export default {
  name: 'ListIndex',
  components: { ListExplorer, Lists },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-index {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  min-height: 600px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 10px;
  .list-panel {
    width: 45%;
    border: 1px solid black;
  }
}
@media only screen and (max-width: 768px) {
  .list-index {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .list-panel {
      width: 100%;
    }
  }
}
</style>
