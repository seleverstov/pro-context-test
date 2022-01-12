<template>
<div :style="backgroundColor" class="square">
</div>
</template>

<script>
export default {
  name: 'ColorSquare',
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundColor() {
      return { background: this.color };
    },
  },
};
</script>

<style lang="scss" scoped>
.square {
  width: 10px;
  height: 10px;
  margin: 1px;
  cursor: pointer;
}
</style>
