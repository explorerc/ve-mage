<template>
  <div class="search-box">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      @focus.stop="focus"
      @blur.stop="blur"
      @keyup.native.13="enter($event)"
      v-model="val">
    </el-input>
    <transition name="fade">
      <i class="iconfont icon-delete"
         @click="clear"
         v-show="delShow"></i>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 've-search',
    data () {
      return {
        val: '',
        isfocus: false
      }
    },
    props: {
      value: {
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    },
    computed: {
      delShow () {
        return this.isfocus && this.val.length > 0
      }
    },
    watch: {
      val (newVal) {
        this.$emit('input', newVal)
      },
      value (newVal) {
        this.val = newVal
      }
    },
    methods: {
      focus () {
        this.isfocus = true
      },
      blur () {
        const st = setTimeout(() => {
          this.isfocus = false
          clearTimeout(st)
        }, 500)
      },
      clear () {
        this.val = ''
      },
      enter (e) {
        this.$emit('enter', e)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .search-box {
    position: relative;
    float: right;
    width: 200px;
    .iconfont {
      display: block;
      position: absolute;
      top: 12px;
      right: 7px;
      font-size: 16px;
      color: #666;
      opacity: 0.8;
      transition: opacity .3s;
      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
