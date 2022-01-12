<template>
  <div class="list-index">
    <div class="list-panel">
      <Lists></Lists>
    </div>
    <div class="list-panel">
      <list-explorer></list-explorer>
    </div>
  </div>
</template>

<script>
import Lists from './Lists.vue';
import ListExplorer from './ListExplorer.vue';

export default {
  name: 'ListIndex',
  components: { ListExplorer, Lists },
};
</script>

<style lang="scss" scoped>
.list-index {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 10px;
  .list-panel {
    width: 45%;
    border: 1px solid black;
  }
}
</style>
