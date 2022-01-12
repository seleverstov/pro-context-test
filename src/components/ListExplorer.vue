<template>
 <div class="list-explorer">
   <expanded-list
     v-for="list in lists"
     :key="list"
     :list="list"
   >
   </expanded-list>
 </div>
</template>

<script>
import ExpandedList from './ExpandedList.vue';

export default {
  name: 'ListExplorer',
  components: { ExpandedList },
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
