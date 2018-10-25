<template>
  <div class='com-addGroup-wrap'>
    <div class="com-modal"></div>
    <div class="com-addGroup-box">
      <div class="header">
        <span class="title">添加到群组</span>
        <button @click='close'><i class="iconfont icon-close"></i></button>
      </div>
      <div class="content">
        <div class="item">
          <label class='label'>导入规则:</label>
          <el-radio v-model="radio" label="1">新建固定群组</el-radio>
          <el-radio v-model="radio" label="0">导入固定群组</el-radio>
        </div>
        <div class="tab-box">
          <div class="tab" v-if='radio === "1"'>
            <div class="item spe">
              <label class='label'>群组名称:</label>
              <com-input :value.sync="name" placeholder="输入固定群组名称" :max-length="10" class='inp' :class="{ 'error':titleEmpty }" @focus='titleEmpty = false'></com-input>
            </div>
            <div class="item spe">
              <label class='label'>群组描述:</label>
              <com-input type="textarea" :value.sync="desc" placeholder="输入群组描述" :max-length="10" class='inp inp-desc' :class="{ 'error':descEmpty }" @focus='descEmpty = false'></com-input>
            </div>
          </div>
          <div class="tab" v-else>
             <div class="item spe"  @click='optSel = false'>
              <label class='label'>选择群组:</label>
              <el-select v-model="selval" placeholder="请选择" :class="{ 'error':optSel }">
                <el-option
                  v-for="item in groupData"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <el-button round class='primary-button confirm' @click='addHandler'>添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import userManage from 'src/api/userManage-service'
export default {
  data () {
    return {
      name: '',
      desc: '',
      radio: '1',
      titleEmpty: false,
      descEmpty: false,
      optSel: false,
      selval: '',
      groupData: [
        {
          value: '1',
          label: '黄金糕'
        }
      ]
    }
  },
  props: {
  },
  mounted () {
    this.initGrouplist()
  },
  methods: {
    close () {
      this.$emit('handleClick', {
        action: 'cancel'
      })
    },
    addHandler () {
      if (this.verifyEmpty()) {
        const data = {
          type: this.radio,
          group_id: this.selval,
          title: this.name,
          describe: this.desc
        }
        // console.log(data)
        this.$emit('groupData', data)
      }
    },
    verifyEmpty () {
      if (this.radio === '1') {
        if (!this.name.length) {
          this.titleEmpty = true
          return false
        }
        if (!this.desc.length) {
          this.descEmpty = true
          return false
        }
        return true
      } else {
        if (!this.selval.length) {
          this.optSel = true
          return false
        }
        this.name = ''
        this.desc = ''
        this.titleEmpty = false
        this.descEmpty = false
        return true
      }
    },
    initGrouplist () {
      this.$get(userManage.GET_GROUP_LIST).then((res) => {
        console.log(res)
        this.groupData = this.reArrange(res.data.list)
      })
    },
    reArrange (array) {
      const arr = []
      array.forEach(item => {
        arr.push({
          id: item.group_id,
          name: item.title
        })
      })
      return arr
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
.com-addGroup-box /deep/ {
  z-index: 2002;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -159px;
  margin-left: -240px;
  width: 480px;
  height: 318px;
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
    .label {
      color: $color-font-sub;
      width: 80px;
      padding-right: 15px;
    }
    .el-select .el-input__inner {
      border: 1px solid #e2e2e2;
      width: 330px;
    }
    .el-select.error .el-input__inner {
      border-color: $color-error;
    }
    .confirm {
      position: absolute;
      bottom: 20px;
      right: 35px;
    }
  }
  .com-input {
    width: 330px;
    &.error input,
    &.error textarea {
      border-color: $color-error;
    }
  }
  textarea {
    height: 68px;
  }
  .inp-desc {
    .limit.area {
      bottom: 9px;
      right: 5px;
    }
  }
  .item {
    margin-bottom: 20px;
    &.spe .label {
      float: left;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
