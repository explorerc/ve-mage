<template>
  <li class="tab-item" :class="{active:isActive}" @click="handleClick">
    <span v-if="!$slots.label">{{label}}</span>
    <slot name="label"></slot>
  </li>
</template>

<script>
export default {
  name: 'ComTab',
  props: {
    label: String,
    index: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$parent.value === this.index
    }
  },
  methods: {
    handleClick () {
      this.$parent.change(this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-item {
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  font-size: 14px;
  color: #303133;
  cursor: pointer;
  &.active {
    color: #409eff;
  }
}
</style>
