<template>
 <div class="item" @click="editCount = !editCount">
   <input
     :checked="item.checked"
     type="checkbox"
     @click.stop
     @change="checkboxChanged"
   >
   <p class="name">{{item.name}}</p>
   <div class="item-value">
     <p
       @click.stop="editCount = !editCount"
       v-if="!editCount"
       class="item-value-number"
     >
       {{item.value}}
     </p>
     <input
       v-else
       @change="countChanged"
       :min="0"
       :value="item.value"
       @click.stop
       class="item-value-new-number"
       type="number"
     >
     <input
       class="item-value-color"
       type="color"
       :value="item.color"
       @change="colorChanged"
       @click.stop
     >
   </div>
 </div>
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      editCount: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    countChanged(event) {
      if (event.target.value < 0) return;
      const newItem = { ...this.item, value: Number(event.target.value) };
      this.changeItem(newItem);
    },
    colorChanged(event) {
      const newItem = { ...this.item, color: event.target.value };
      this.changeItem(newItem);
    },
    checkboxChanged(event) {
      const newItem = { ...this.item, checked: event.target.checked };
      this.changeItem(newItem);
    },
    changeItem(newItem) {
      this.$emit('itemChange', {
        oldItem: this.item,
        newItem,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
    &-color {
      width: 20px;
      height: 20px;
      border: none;
      background: none;
    }
    &-new-number {
      width: 20px;
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
}
</style>
