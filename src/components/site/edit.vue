<template>
  <div class="edit-container" v-show="showWrap" @click="hide" @mouseover="over">
    <div class="edit-content" :class="[{active:showEdit},customClass]" @click.stop="()=>{}">
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
    }
  },
  data () {
    return {
      showWrap: false,
      showEdit: false
    }
  },
  methods: {
    show () {
      this.showWrap = true
      setTimeout(() => {
        this.showEdit = true
      }, 0)
    },
    hide () {
      this.showEdit = false
      setTimeout(() => {
        this.showWrap = false
      }, 300)
    },
    over (e) {
      e.stopPropagation()
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
    width: 360px;
    transition: all 0.3s;
    background-color: white;
    transform: translateX(100%);
    overflow-y: auto;
    &.active {
      transform: translateX(0);
    }
  }
}
</style>
