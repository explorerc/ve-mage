<template>
  <div class="com-tabs" :class="[{card:type==='card'},position,customClass]">
    <ul class="tab-header" :class="{slider:type==='slider'}">
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
    position: {
      type: String,
      default: ''
    },
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
      lineSize: 0,
      lineOffset: 0,
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
      if (this.position) {
        return {
          height: `${this.lineSize}px`,
          transform: `translateY(${this.lineOffset}px)`
        }
      } else {
        return {
          width: `${this.lineSize}px`,
          transform: `translateX(${this.lineOffset}px)`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.com-tabs {
  position: relative;
  height: 100%;
  &.left {
    overflow: hidden;
    &.card {
      .tab-header {
        margin-bottom: 0;
        margin-right: -1px;
      }
      .tab-item.active {
        border-right: 0;
        border-left: 0;
        border-top: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
      }
    }
    .tab-header {
      float: left;
      text-align: right;
      height: 100%;
      &.slider {
        margin-bottom: 0;
        border-bottom: 0;
        margin-right: -2px;
        border-right: 2px solid #e4e7ed;
      }
    }
    .tab-line {
      width: 2px;
      height: 2px;
      float: left;
      margin-bottom: 0;
      margin-right: 15px;
      .line-slider {
        width: 2px;
      }
    }
    .tab-item {
      display: block;
    }
    .tab-content {
      float: left;
    }
  }
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
    &.slider {
      border-bottom: 2px solid #e4e7ed;
      margin-bottom: -2px;
    }
  }
  .tab-line {
    width: 100%;
    height: 2px;
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
