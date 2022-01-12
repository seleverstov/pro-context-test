<template>
 <div class="expanded-item" v-if="item.checked">
   <color-square
     @click="describeValue"
    :color="item.color"
    v-for="index in item.value"
    :key="index"
   ></color-square>
 </div>
</template>

<script>
import ColorSquare from './ColorSquare.vue';

export default {
  name: 'ExpandedItem',
  components: { ColorSquare },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    describeValue() {
      this.$emit('itemChange', {
        oldItem: this.item,
        newItem: { ...this.item, value: this.item.value - 1 },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.expanded-item {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px;
}
</style>
