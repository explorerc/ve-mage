<template>
  <div class="edit-container" v-show="showWrap" @click="hide" @mouseover="over">
    <div class="edit-content" :class="[{active:showEdit},customClass,{follow:follow}]" :style="styles" @click.stop="()=>{}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: ''
    },
    follow: {
      type: Boolean,
      default: false
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      showWrap: false,
      showEdit: false,
      rect: undefined
    }
  },
  created () {

  },
  methods: {
    show (rect) {
      if (this.follow) {
        this.rect = rect
      }
      this.$emit('show', this.rect)
      this.showWrap = true
      setTimeout(() => {
        this.showEdit = true
      }, 0)
    },
    hide () {
      this.$emit('hide')
      this.showEdit = false
      setTimeout(() => {
        this.showWrap = false
      }, 300)
    },
    over (e) {
      e.stopPropagation()
    }
  },
  computed: {
    styles () {
      let ret = {}
      if (this.rect) {
        ret = {
          top: `${this.rect.top + this.offsetTop}px`,
          left: `${this.rect.left}px`,
          width: `${this.rect.width}px`,
          // height: `${this.rect.height + Math.abs(this.offsetTop)}px`
          height: `auto`
        }
      }
      return ret
    }
  }
}
</script>

<style scoped lang="scss">
.edit-container /deep/ {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
  .edit-content {
    position: absolute;
    right: 0;
    height: 100%;
    width: 460px;
    transition: all 0.3s;
    background-color: white;
    transform: translateX(100%);
    overflow-y: auto;
    &.active {
      transform: translateX(0);
    }
    &.follow {
      transform: translateX(0);
      background-color: transparent;
    }
  }
}
</style>
