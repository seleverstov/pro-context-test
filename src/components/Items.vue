<template>
  <div class="items">
    <item @itemChange="itemChange" v-for="item in items" :item="item" :key="item"></item>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'Items',
  components: {
    Item,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    itemChange(event) {
      this.$emit('itemChange', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.items {
  margin-left: 20px;
}
</style>
