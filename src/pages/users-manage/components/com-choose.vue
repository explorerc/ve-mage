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
          <input class='inp' v-model="searchVal" @keyup.enter='search' :placeholder="`输入${name}名称`"/>
        </div>
        <el-checkbox-group v-model="restoreData.id" :max="max" :class='"data-list"'>

          <template v-if="dataList.length">
            <el-checkbox v-for="(item,idx) in dataList" :label="item.id" :key="idx" :checked="item.checked"
                         @change='selectCheck($event,item.id)'>{{item.name}}
            </el-checkbox>
          </template>
          <div class="empty" v-if="isNoDataShow">
            <div class="img"></div>
            <div class="txt">暂无数据</div>
          </div>
        </el-checkbox-group>
        <div class="foot-box">
          <span class='count'>已选择 <i :class="{'max':restoreData.id.length === max}">{{restoreData.id.length}}</i> 个{{name}}</span>
          <el-button class='primary-button confirm' @click='confirm'>确定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import userManage from 'src/api/userManage-service'

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
          // {
          //   name: '互联网客户 (460人）',
          //   id: 1,
          //   checked: false
          // }
        ],
        tagListData: [
          // {
          //   name: '年龄/00后',
          //   id: 1,
          //   checked: false
          // }
        ],
        activelistData: [
          // {
          //   name: '百度人工智能大会发布芯片',
          //   id: 1,
          //   checked: false
          // }
        ],
        isNoDataShow: false // 空白页是否显示
      }
    },
    created () {
      this.restoreData = JSON.parse(JSON.stringify(this.checkedData))
    },
    mounted () {
      if (this.list.length) {
        this.dataList = this.list
      } else {
        this.init()
      }
    },
    computed: {
      // checkedData () {
      //   this.restoreData.checkedId = this.checkedData
      // }
    },
    props: {
      list: { // 传进来的数据 没有会自动请求替换
        type: Array,
        default () {
          return []
        }
      },
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
      init () {
        switch (this.name) {
          case '活动':
            this.queryActList()
            break
          case '标签':
            this.queryTaglist()
            break
          case '固定群组':
            this.queryGrouplist()
            break
        }
      },
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
        this.$emit('searchHandler', {'val': this.searchVal, 'name': this.name})
        // this.checkedData = []
        switch (this.name) {
          case '标签':
            this.queryTaglist()
            break
          case '活动':
            this.queryActList()
            break
          case '固定群组':
            this.queryGrouplist()
            break
        }
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
      },
      // 查询标签
      queryTaglist (keyword) {
        this.$get(userManage.GET_TAG_LIST, {
          keyword: this.searchVal
        }).then((res) => {
          const tempArr = []
          console.log(res.data.list)
          res.data.list.forEach(item => {
            tempArr.push({
              name: item.tag_name,
              id: item.tag_id,
              checked: false
            })
          })
          this.tagListData = tempArr
          this.dataList = this.tagListData
          console.log(this.dataList)
          if (this.dataList.length) {
            this.isNoDataShow = false
          } else {
            this.isNoDataShow = true
          }
        })
      },
      // 查询群组
      queryGrouplist (keyword) {
        this.$get(userManage.GET_GROUP_LIST, {
          keyword: this.searchVal,
          type: '2'
        }).then((res) => {
          const tempArr = []
          res.data.list.forEach(item => {
            tempArr.push({
              name: item.title + `(${item.user_count})`,
              id: item.group_id,
              checked: false
            })
          })
          this.groupListData = tempArr
          this.dataList = this.groupListData
          if (this.dataList.length) {
            this.isNoDataShow = false
          } else {
            this.isNoDataShow = true
          }
        })
      },
      // 查询活动
      queryActList () {
        const data = {
          keyword: this.searchVal,
          page: 1,
          pageSize: 30
        }
        this.$get(userManage.GET_ACTIVE_LIST, data).then((res) => {
          console.log(res.data.list)
          const tempArr = []
          res.data.list.forEach(item => {
            tempArr.push({
              name: item.title,
              id: item.id,
              checked: false
            })
          })
          this.activelistData = tempArr
          this.dataList = this.activelistData
          if (this.dataList.length) {
            this.isNoDataShow = false
          } else {
            this.isNoDataShow = true
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~assets/css/mixin.scss';

  .com-addChoose-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
  }

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
    position: fixed;
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
        /*.loading {
          display: block;
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: $color-font;
          font-size: 14px;
        }*/
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
        line-height: 34px;
        .inp {
          width: 220px;
          padding: 0 15px;
          height: 34px;
          line-height: 35px;
          border-radius: 17px;
          border: 1px solid #CECECE;
          &:hover {
            border-color: $color-gray-hover;
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
      .empty {
        text-align: center;
        margin: 20px 0;
        .txt {
          padding-top: 15px;
          font-size: 16px;
          color: #8E9198;
        }
        .img {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          background: url('~assets/image/nodata@2x.png') no-repeat center;
          background-size: contain;
        }
      }
    }
  }
</style>
