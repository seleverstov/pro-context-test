<template>
 <div class="expanded-list">
   <p class="expanded-list-name">{{list.name}}</p>
   <expanded-item
     @itemChange="changeItem"
     v-for="item in list.items"
     :key="item"
     :item="item"
   ></expanded-item>
 </div>
</template>

<script>
import ExpandedItem from './ExpandedItem.vue';

export default {
  name: 'ExpandedList',
  components: { ExpandedItem },
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
.expanded-list {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px auto;
  border: 1px solid black;
}
</style>
