<template>
  <div class="nav-menu-box">
    <span :class="{'nav-menu-item':true,active:selectMenuIdx==idx}" v-for="(menu,idx) in menus"
          @click="selectMenu(idx)">{{menu}}</span>
  </div>
</template>

<script>
  export default {
    name: 'nav-menu',
    data () {
      return {
        selectMenuIdx: 0
      }
    },
    props: {
      menus: Array,
      currentMenu: Number
    },
    watch: {
      currentMenu: {
        handler (newVal) {
          this.selectMenuIdx = newVal
        },
        immediate: true
      }
    },
    methods: {
      selectMenu (idx) {
        this.selectMenuIdx = idx
        this.$emit('changeMenu', idx)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav-menu-box {
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 0;
    border-radius: 15px;
    border: solid 1px #e2e2e2;
    box-sizing: border-box;
    overflow: hidden;
    user-select: none;
    .nav-menu-item {
      display: inline-block;
      font-size: 14px;
      padding: 0 20px;
      border-right: solid 1px #e2e2e2;
      min-width: 70px;
      &:last-child {
        border-right: none;
      }
      &:hover, &.active {
        background-color: #FDD43F;
        transition: background-color .2s;
      }
      &:hover {
        cursor: pointer;
        background-color: #FDD43F;
        opacity: .9;
      }
      &:active {
        background-color: #EEC11A;
      }
    }
  }
</style>
