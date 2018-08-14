<template>
  <div
  class="com-input"
  v-if="type!=='textarea'"
  :class="customClass"
  >
    <i v-if="type==='search'" class="iconfont icon-search"></i>
    <input
    type="text"
    :style="style"
    :placeholder="placeholder"
    v-model="innerValue"
    @focus="showDelete=true"
    @blur="hideDelete"
    >
    <i v-if="type==='search'" v-show="showDelete" class="iconfont icon-delete" @click="empty"></i>
    <span class="limit" v-if="maxLength&&type!=='search'"><i class="length" v-text="innerValue.gbLength()">0</i>/<i>{{maxLength}}</i></span>
  </div>
  <div v-else>
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: 'ComInput',
  props: {
    placeholder: String,
    customClass: String,
    value: String,
    type: {
      type: String,
      default: 'input'
    },
    maxLength: Number
  },
  data () {
    return {
      innerValue: '',
      showDelete: false
    }
  },
  created () {
    this.innerValue = this.value
  },
  methods: {
    empty () {
      this.innerValue = ''
    },
    hideDelete () {
      setTimeout(() => {
        this.showDelete = false
      }, 200)
    }
  },
  watch: {
    innerValue (value) {
      if (this.maxLength && value.gbLength() > this.maxLength) {
        this.innerValue = value.substring(0, value.gbIndex(this.maxLength) + 1)
      }
      this.$emit('update:value', this.innerValue)
    }
  },
  computed: {
    style () {
      const ret = {}

      if (this.type === 'search') {
        ret.paddingLeft = '30px'
        ret.paddingRight = '30px'
      } else if (this.maxLength) {
        ret.paddingRight = '45px'
      }
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.com-input /deep/ {
  position: relative;
  display: inline-block;
  width: 200px;
  input {
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    &:hover {
      border-color: #40a9ff;
    }
    &:focus {
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    &::-moz-placeholder {
      color: #bfbfbf;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: #bfbfbf;
    }
    &::-webkit-input-placeholder {
      color: #bfbfbf;
    }
  }
  .limit {
    font-size: 14px;
    color: #999999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    .length {
      color: #5ea6ed;
    }
  }
  .icon-search {
    color: #999999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 8px;
  }
  .icon-delete {
    color: #999999;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    cursor: pointer;
  }
}
</style>
