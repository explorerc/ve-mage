<template>
  <div class='com-addChoose-wrap'>
    <div class="com-modal"></div>
    <div class="com-addChoose-box">
      <div class="header">
        <span class="title">选择{{name}}</span>
        <button @click='close'><i class="iconfont icon-close"></i></button>
      </div>
      <div class="content">
        <div class="search-box">
          <input class='inp' v-model="searchVal" @keyup.enter='search' :placeholder="`输入${name}名称`"></input>
        </div>
        <el-checkbox-group v-model="checkedData" :max="max" :class='"data-list"'>
          <el-checkbox v-for="(item,idx) in data" :label="item" :key="idx">{{item}}</el-checkbox>
        </el-checkbox-group>
        <div class="foot-box">
          <span class='count'>已选择 <i :class="{'max':checkedData.length === max}">{{checkedData.length}}</i> 场{{name}}</span>
          <el-button  class='primary-button confirm' @click='confirm'>确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchVal: '',
      checkedData: []
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    max: {
      type: Number,
      default: 3
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('handleClick', {
        action: 'cancel'
      })
      this.checkedData = []
    },
    confirm () {
      this.$emit('selectConfirm', this.checkedData)
      this.close()
    },
    search () {
      this.$emit('searchHandler', this.searchVal)
      this.checkedData = []
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.com-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #000;
  z-index: 2001;
}
.com-addChoose-box /deep/ {
  z-index: 2002;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -222.5px;
  margin-left: -300px;
  width: 600px;
  height: 445px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  .header {
    height: 40px;
    line-height: 40px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #ffd021;
    padding: 0 20px;
    padding-bottom: 10px;
    text-align: left;
    button {
      position: absolute;
      top: 15px;
      right: 15px;
      padding: 0;
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .icon-close {
      position: relative;
      top: -3px;
    }
  }
  .content {
    padding: 30px;
    font-size: 14px;
    .data-list {
      margin: 20px 0 20px 0;
      height: 250px;
      overflow-y: scroll;
      label {
        margin: 0;
        display: block;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e2e2e2;
        .el-checkbox__label {
          color: $color-font;
        }
        .el-checkbox__input {
          float: right;
          margin: 20px 20px 0 0;
        }
        &.is-checked {
          background: rgba(246, 247, 254, 1);
          .el-checkbox__label {
            color: $color-font;
          }
        }
      }
    }
    .search-box {
      .inp {
        width: 220px;
        padding: 0 15px;
        height: 34px;
        line-height: 35px;
        border-radius: 17px;
        border: 1px solid rgba(136, 136, 136, 1);
        &:hover {
          border-color: $color-blue-hover;
        }
      }
    }
    .foot-box {
      line-height: 40px;
      span.count {
        padding-left: 10px;
        i {
          color: $color-blue;
          &.max {
            color: $color-error;
          }
        }
      }
      .confirm {
        float: right;
        position: relative;
      }
    }
  }
}
</style>
