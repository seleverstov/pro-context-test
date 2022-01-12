<template>
  <div @click="showItems = !showItems" class="list">
    <input @click.stop type="checkbox">
    <p class="list-name">{{list.name}}</p>
  </div>
  <items @itemChange="changeItem" v-if="showItems" :items="list.items"></items>
</template>

<script>
import Items from './Items.vue';

export default {
  name: 'List',
  data() {
    return {
      showItems: false,
    };
  },
  components: { Items },
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeItem(event) {
      const payload = {
        list: this.list,
        oldItem: event.oldItem,
        newItem: event.newItem,
      };
      this.$store.commit('changeItem', payload);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: lightcyan;
  }
}
</style>
