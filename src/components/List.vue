<template>
  <div @click="showItems = !showItems" class="list">
      <input
        :indeterminate="isIndeterminate"
        :checked="isChecked"
        @click.stop
        type="checkbox"
        @change="listCheck"
        class="list-checkbox"
      >
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
  computed: {
    isIndeterminate() {
      return !this.$store.getters.isAllChecked(this.list)
        && !this.$store.getters.isAllUnchecked(this.list);
    },
    isChecked() {
      return this.$store.getters.isAllChecked(this.list);
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
    listCheck(event) {
      if (!this.$store.getters.isAllChecked(this.list) && event.target.checked) {
        this.$store.commit('checkAll', this.list);
      } else {
        this.$store.commit('uncheckAll', this.list);
      }
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
  &-checkbox:before {
    border: 3px solid transparent;
    background-color: white;
    box-sizing: border-box;
    content: '';
    display: inline-block;
    height: 12px;
    outline: 1px solid black;
    width: 12px;
  }
  &-checkbox:checked:before {
    content:'';
    opacity: 0;
  }
  &-checkbox:indeterminate:before {
    background-color: black;
    border-color: white;
  }
}
</style>
