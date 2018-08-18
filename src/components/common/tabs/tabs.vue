<template>
  <div class="com-tabs" :class="customClass">
    <ul class="tab-header">
      <slot></slot>
    </ul>
    <div class="tab-line">
      <div class="line-slider" :style="sliderStyle"></div>
    </div>
    <com-container :panels="panels"></com-container>
  </div>
</template>

<script>
import Container from './container.vue'

export default {
  name: 'ComTabs',
  components: {
    ComContainer: Container
  },
  props: {
    customClass: String,
    disabled: Boolean,
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      lineWidth: 0,
      lineLeft: 0,
      panels: []
    }
  },
  methods: {
    change (index) {
      if (this.disabled) return
      this.$emit('update:value', index)
      this.$emit('change', index)
    }
  },
  watch: {
    value: {
      handler (n) {

      },
      immediate: true
    }
  },
  computed: {
    sliderStyle () {
      return {
        width: `${this.lineWidth}px`,
        transform: `translateX(${this.lineLeft}px)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.com-tabs /deep/ {
  position: relative;
  .tab-header {
    font-size: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .tab-line {
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    position: relative;
    .line-slider {
      transition: all 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      background-color: #409eff;
    }
  }
}
</style>
