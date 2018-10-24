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
        <el-checkbox-group v-model="restoreData.id" :max="max" :class='"data-list"'>
          <el-checkbox v-for="(item,idx) in dataList" :label="item.id" :key="idx" :checked="item.checked" @change='selectCheck($event,item.id)'>{{item.name}}</el-checkbox>
        </el-checkbox-group>
        <div class="foot-box">
          <span class='count'>已选择 <i :class="{'max':restoreData.id.length === max}">{{restoreData.id.length}}</i> 个{{name}}</span>
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
      restoreData: {
        id: [],
        name: []
      },
      dataList: [],
      groupListData: [
        {
          name: '互联网客户 (460人）',
          id: 1,
          checked: false
        },
        {
          name: '物联网客户 (235人）',
          id: 2,
          checked: false
        },
        {
          name: '产品团队 (22人）',
          id: 3,
          checked: false
        },
        {
          name: '客户服务团队 (54人）',
          id: 4,
          checked: false
        },
        {
          name: '客户服务团队 (54人）',
          id: 5,
          checked: false
        }
      ],
      tagListData: [
        {
          name: '年龄/00后',
          id: 1,
          checked: false
        },
        {
          name: '地区/北上广深',
          id: 2,
          checked: false
        },
        {
          name: '资料完整度/参会人',
          id: 3,
          checked: false
        },
        {
          name: '观看时完整度/完美用户',
          id: 4,
          checked: false
        },
        {
          name: '地区/海外',
          id: 5,
          checked: false
        }
      ],
      activelistData: [
        {
          name: '百度人工智能大会发布芯片',
          id: 1,
          checked: false
        },
        {
          name: '创想聚能 艾瑞年对高峰会议',
          id: 2,
          checked: false
        },
        {
          name: '艺术二维码的设计思路',
          id: 3,
          checked: false
        },
        {
          name: '腾讯向爱而生文创生态大会',
          id: 4,
          checked: false
        },
        {
          name: '2name:018西南互联网趋势峰会',
          id: 5,
          checked: false
        },
        {
          name: '百度人工智能大会发布芯片',
          id: 6,
          checked: false
        },
        {
          name: '创想聚能 艾瑞年对高峰会议',
          id: 7,
          checked: false
        },
        {
          name: '艺术二维码的设计思路',
          id: 8,
          checked: false
        },
        {
          name: '腾讯向爱而生文创生态大会',
          id: 9,
          checked: false
        },
        {
          name: '2name:018西南互联网趋势峰会',
          id: 10,
          checked: false
        },
        {
          name: '百度人工智能大会发布芯片',
          id: 11,
          checked: false
        },
        {
          name: '创想聚能 艾瑞年对高峰会议',
          id: 12,
          checked: false
        },
        {
          name: '艺术二维码的设计思路',
          id: 13,
          checked: false
        },
        {
          name: '腾讯向爱而生文创生态大会',
          id: 14,
          checked: false
        },
        {
          name: '2name:018西南互联网趋势峰会',
          id: 15,
          checked: false
        },
        {
          name: '百度人工智能大会发布芯片',
          id: 16,
          checked: false
        },
        {
          name: '创想聚能 艾瑞年对高峰会议',
          id: 17,
          checked: false
        },
        {
          name: '艺术二维码的设计思路',
          id: 18,
          checked: false
        },
        {
          name: '腾讯向爱而生文创生态大会',
          id: 19,
          checked: false
        },
        {
          name: '2name:018西南互联网趋势峰会',
          id: 20,
          checked: false
        }
      ]
    }
  },
  created () {
    this.restoreData = this.checkedData
  },
  mounted () {
    switch (this.name) {
      case '活动':
        this.dataList = this.activelistData
        break
      case '标签':
        this.dataList = this.tagListData
        break
      case '固定群组':
        this.dataList = this.groupListData
        break
    }
  },
  computed: {
    // checkedData () {
    //   this.restoreData.checkedId = this.checkedData
    // }
  },
  props: {
    checkedData: { // 已选中的组别ID
      type: Object,
      default () {
        return {}
      }
    },
    max: { // 最大选中数量
      type: Number,
      default: 3
    },
    name: { // 选择弹窗名称
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$emit('handleClick', {
        action: 'cancel'
      })
      // this.checkedData = []
    },
    confirm () {
      this.$emit('selectComConfirm', this.restoreData)
      this.close()
    },
    search () {
      this.$emit('searchHandler', this.searchVal)
      // this.checkedData = []
    },
    selectCheck (res, id) {
      const data = {
        isChecked: res,
        id: id
      }
      // this.$emit('selectCom', data)
      this.regroupData(data, this.dataList)
    },
    regroupData (data, findArray) {
      findArray.forEach((item, idx) => {
        if (item.id === data.id) {
          findArray[idx].checked = data.isChecked
          if (data.isChecked) {
            this.restoreData.name.push(item.name)
          } else {
            this.restoreData.name.forEach((element, count) => {
              if (element === item.name) {
                this.restoreData.name.splice(count, 1)
              }
            })
          }
          // console.log(this.restoreData)
        }
      })
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
