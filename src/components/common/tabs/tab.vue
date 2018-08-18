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
  data () {
    return {
      width: 0,
      offsetLeft: 0
    }
  },
  mounted () {
    this.width = this.$el.children[0].offsetWidth
    this.offsetLeft = this.$el.children[0].offsetLeft
    this.$parent.panels.push(this)
  },
  computed: {
    isActive () {
      if (this.$parent.value === this.index) {
        this.$parent.lineWidth = this.width
        this.$parent.lineLeft = this.offsetLeft
        return true
      }
      return false
    }
  },
  methods: {
    handleClick () {
      this.$parent.change(this.index, this)
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
