<template>
  <div class="search-box">
    <el-input
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      @focus.stop="focus"
      @blur.stop="blur"
      @change.stop="blur"
      v-model="val">
    </el-input>
    <i class="iconfont icon-delete"
       @click.stop="clear"
       v-show="delShow"></i>
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
        this.isfocus = false
      },
      clear () {
        this.val = ''
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
    }
  }
</style>
