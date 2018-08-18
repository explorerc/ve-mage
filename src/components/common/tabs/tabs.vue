<template>
  <div class="com-tabs" :class="{card:type==='card',customClass}">
    <ul class="tab-header">
      <slot></slot>
    </ul>
    <div v-if="type==='card'" class="bottom-boader"></div>
    <div v-if="type==='slider'" class="tab-line">
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
    type: {
      type: String,
      default: ''
    },
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
.com-tabs {
  position: relative;
  &.card {
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    .tab-header {
      background-color: #f5f7fa;
      margin-bottom: -1px;
    }
    .bottom-boader {
      border-bottom: 1px solid #e4e7ed;
    }
    .tab-item.active {
      color: #409eff;
      background-color: #fff;
      border-right: 1px solid #dcdfe6;
      border-left: 1px solid #dcdfe6;
    }
    .tab-content {
      padding: 15px;
    }
  }
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
    margin-bottom: 15px;
    .line-slider {
      transition: all 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      background-color: #409eff;
    }
  }
  .tab-content {
    position: relative;
  }
}
</style>
