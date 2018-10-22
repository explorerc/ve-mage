<!--用户池页面-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >用户池</span>
    </div>
    <div class="content from-box">
      <div class="handle-bar">
        <div class="left">
          <el-button round>选择</el-button>
          <el-button round>批量操作</el-button>
          <el-button round @click='showImport = true'>批量导入</el-button>
        </div>
        <div class="right">
          <com-input :value.sync="filterVal" placeholder="姓名/昵称/手机号/邮箱"   @focus=""></com-input>
          <span @click='showFilter = !showFilter'>精准搜索<i class='el-submenu__icon-arrow el-icon-arrow-down' :class="{'is-open':showFilter }"></i></span>
        </div>
      </div>
      <transition name="left-right"  mode="out-in">
        <div class="handle-filter page-bg" v-show='showFilter'>
          <div class='filter-item'>
            <div class="condition">
              <span class="label">用户级别</span>
               <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">来源</span>
               <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">参与场次</span>
              <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class='filter-item'>
            <div class="condition">
              <span class="label">所属地域</span>
              <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">性别</span>
              <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">所属行业</span>
              <el-select v-model="grandVal" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class='filter-item'>
            <div class="condition">
            <span class="label">首次访问</span>
               <el-date-picker
                v-model="firstVal"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd hh:mm"
                align="left">
              </el-date-picker>
            </div>
            <div class="condition">
            <span class="label">最后访问</span>
               <el-date-picker
                v-model="lastVal"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd hh:mm"
                align="left">
              </el-date-picker>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">参与活动</span>
            <el-button round v-if='!activityArray.length' @click='showChooseActive = true'>选择活动</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in activityArray' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'activityArray')"></span></li>
                <li class="added" @click='showChooseActive = true'></li>
              </ol>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">活动标签</span>
            <el-button round v-if='!tagArray.length' @click='showChooseTag = true'>选择标签</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in tagArray' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'tagArray')"></span></li>
                <li class="added" @click='showChooseTag = true'></li>
              </ol>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">所属群组</span>
            <el-button round v-if='!groupArray.length' @click='showChooseGroup = true'>选择分组</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in groupArray' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'groupArray')"></span></li>
                <li class="added" @click='showChooseGroup = true'></li>
              </ol>
            </div>
          </div>
          <div class="filter-confirm">
            <el-button round class='primary-button'>查询</el-button>
            <el-button round>取消</el-button>
          </div>
        </div>
      </transition>
      <div class="users-list page-bg">
        <el-table
          ref="multipleTable"
          :data="usersListData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="用户信息"
            width="200">
            <template slot-scope="scope">
              <dl class="users-info">
                <dt><img :src="scope.row.avatar"></dt>
                <dd>{{ scope.row.name }} {{ scope.row.gender }}</dd>
                <dd>{{ scope.row.tag }}</dd>
              </dl>
            </template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="mail"
            label="邮箱"
            show-overflow-tooltip>
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="bottom">
                <p class='mail-tooltips' v-for="(item,idx) in scope.row.mail">
                  <span>{{item.value}}</span>
                  <span>{{item.type}}</span>
                </p>
                <div slot="reference" class="name-wrapper">
                  {{ scope.row.mail[1].value }}
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column
            prop="count"
            label="参与(次)"
            width="100">
          </el-table-column>
          <el-table-column
            prop="lastActive"
            label="最后活跃"
            width="150">
          </el-table-column>
          <el-table-column
            prop="comment"
            label="备注"
            width="150"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="count"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button class='detail'
                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                type="text"
                size="small">
                详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
          <div class="pagination-box">
            <div class="page-pagination">
                <ve-pagination
                  :total="total"
                  :pageSize="queryData.pageSize"
                  :currentPage="currPage"
                  @changePage="currentChange"/>
            </div>
          </div>
      </div>
    </div>
  <transition name='fade' mode='out-in' v-if="showAddgroup">
    <com-addgroup  @handleClick="handleClick"></com-addgroup>
  </transition>
  <transition name='fade' mode='out-in' v-if="showChooseActive">
    <com-choose  @handleClick="handleClick" @selectConfirm="selectConfirmActive" :max='10' @searchHandler='searchHandler' :data='activelistData' :name="'活动'"></com-choose>
  </transition>
  <transition name='fade' mode='out-in' v-if="showChooseTag">
    <com-choose  @handleClick="handleClick" @selectConfirm="selectConfirmTag" :max='10' @searchHandler='searchHandler' :data='tagListData' :name="'标签'"></com-choose>
  </transition>
  <transition name='fade' mode='out-in' v-if="showChooseGroup">
    <com-choose  @handleClick="handleClick" @selectConfirm="selectConfirmGroup" :max='10' @searchHandler='searchHandler' :data='groupListData' :name="'固定群组'"></com-choose>
  </transition>
  <transition name='fade' mode='out-in' v-if="showImport">
    <com-import @handleClick="handleClick"></com-import>
  </transition>
  </div>
</template>

<script>
import comChoose from '../components/com-choose'
import comAddgroup from '../components/com-addGroup'
import VePagination from 'src/components/ve-pagination'
import comImport from '../components/com-import'
export default {
  data () {
    return {
      filterVal: '',
      showFilter: false,
      grands: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      grandVal: '',
      firstVal: [new Date(2018, 10, 10, 10, 10), new Date(2018, 10, 11, 10, 10)],
      lastVal: [new Date(2018, 10, 10, 10, 10), new Date(2018, 10, 11, 10, 10)],
      activityArray: [

      ],
      tagArray: [

      ],
      groupArray: [

      ],
      usersListData: [
        {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }, {
          avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '王小虎',
          gender: '男',
          phone: '18513152512',
          mail: [
            {
              type: 'import',
              value: 'asdasd@qq.com'
            }, {
              type: 'center',
              value: '123123@qq.com'
            }, {
              type: 'appoint',
              value: 'gfhg@qq.com'
            }, {
              type: 'sruvey',
              value: 'ghjgh@qq.com'
            }
          ],
          lastActive: '2018-10-11',
          comment: '哈哈',
          tag: '潜力客户',
          count: '10'
        }
      ],
      multipleSelection: [],
      total: 7,
      currPage: 1,
      totalPage: 1,
      queryData: {
        page: 1,
        pageSize: 10
      },
      showAddgroup: false,
      showChooseActive: false,
      showChooseTag: false,
      showChooseGroup: false,
      showImport: false,
      chooseType: '活动',
      groupListData: ['互联网客户 (460人）', '物联网客户 (235人）', '产品团队 (22人）', '客户服务团队 (54人）', '客户服务团队 (54人）'],
      tagListData: ['年龄/00后', '地区/北上广深', '资料完整度/参会人', '观看时完整度/完美用户', '地区/海外'],
      activelistData: ['百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会', '百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会', '百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会', '百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会', '百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会', '百度人工智能大会发布芯片', '创想聚能 艾瑞年对高峰会议', '艺术二维码的设计思路', '腾讯向爱而生文创生态大会', '2018西南互联网趋势峰会']
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    currentChange (e) {
      this.queryData.page = e
      this.queryList()
    },
    queryList () {

    },
    handleDel (idx, type) {
      this[type].splice(idx, 1)
    },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.showAddgroup = false
        this.showChooseActive = false
        this.showChooseTag = false
        this.showChooseGroup = false
        this.showImport = false
      }
    },
    selectConfirmActive (res) {
      console.log(res)
      this.activityArray = res
    },
    selectConfirmTag (res) {
      console.log(res)
      this.tagArray = res
    },
    selectConfirmGroup (res) {
      console.log(res)
      this.groupArray = res
    },
    searchHandler (res) {
      console.log(res)
    }
  },
  components: {
    VePagination,
    comAddgroup,
    comChoose,
    comImport
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.pond-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .content .handle-filter .selected {
      max-width: 880px !important;
    }
  }
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
    // padding: 40px 80px;
    // background: rgba(255, 255, 255, 1);
    // border-radius: 4px;
    // border: 1px solid rgba(226, 226, 226, 1);
    .handle-bar {
      .left {
        display: inline-block;
      }
      .right {
        float: right;
        .com-input {
          margin-right: 10px;
        }
        .com-input input {
          padding-right: 10px;
          padding-left: 15px;
        }
        span {
          cursor: pointer;
          position: relative;
          color: $color-blue;
          padding-right: 18px;
          .el-submenu__icon-arrow {
            right: 0px;
            margin-top: -6px;
            -webkit-transition: -webkit-transform 0.3s;
            transition: -webkit-transform 0.3s;
            transition: transform 0.3s;
            transition: transform 0.3s, -webkit-transform 0.3s;
            font-size: 12px;
            &.is-open {
              -webkit-transform: rotateZ(180deg);
              transform: rotateZ(180deg);
            }
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .page-bg {
      padding: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(226, 226, 226, 1);
      margin-top: 20px;
    }
    .handle-filter {
      .label {
        color: $color-font-sub;
        padding-right: 10px;
        float: left;
        height: 34px;
        line-height: 34px;
      }
      .filter-item {
        margin-bottom: 20px;
      }
      .filter-confirm {
        text-align: center;
      }
      .condition {
        display: inline-block;
        margin-right: 60px;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
      .selected {
        display: inline-block;
        max-width: 1200px;
        .added {
          cursor: pointer;
          display: inline-block;
          border-radius: 100px;
          width: 19px;
          height: 19px;
          padding: 0;
          margin: 0;
          border: 1px solid rgba(136, 136, 136, 1);
          background: url('~assets/image/add_icon.svg') no-repeat;
          background-position: center;
          background-size: contain;
          position: relative;
          top: 4px;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .tag-box {
        display: inline-block;
        li {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(240, 241, 254, 1);
          border-radius: 20px;
          border: 1px solid rgba(240, 241, 254, 1);
          margin-right: 10px;
          margin-bottom: 10px;
          .close {
            cursor: pointer;
            display: inline-block;
            position: relative;
            top: 2px;
            background: url('~assets/image/close.svg') no-repeat;
            background-position: center;
            background-size: 6px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            border-radius: 100px;
            border: 1px solid rgba(75, 90, 254, 1);
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
    .users-list {
      .el-table {
        .users-info {
          width: 110px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 500px;
          }
          dt {
            float: left;
            padding-right: 10px;
            padding-top: 7px;
          }
          dd {
            float: left;
            &:nth-of-type(1) {
              color: $color-font;
            }
            &:nth-of-type(2) {
              color: $color-gray;
              &.protential {
                color: $color-red;
              }
              &.common {
                color: $color-default;
              }
              &.good {
                color: $color-success;
              }
              &.high {
                color: #714cea;
              }
            }
          }
        }
        .detail {
          color: #4b5afe;
        }
      }
      .pagination-box {
        text-align: center;
        margin-top: 20px;
      }
    }
    /* reset element ui */
    .el-select {
      border: 1px solid RGBA(226, 226, 226, 1);
      .el-input__inner {
        padding: 0 15px;
        height: 34px;
        line-height: 34px;
      }
    }
    .el-date-editor {
      .el-range-input {
        height: 60%;
        width: 45%;
        font-size: 14px;
        position: relative;
        bottom: 1px;
      }
      .el-range__close-icon {
        display: none;
      }
      &.el-input__inner {
        height: 34px;
        line-height: 34px;
        padding: 0 8px;
        width: 260px;
      }
      .el-range__icon {
        display: none;
      }
      .el-range-separator {
        width: 10%;
      }
    }
    .com-input input {
      height: 34px;
      line-height: 34px;
      border-radius: 17px;
    }
    .el-table tr {
      height: 70px;
    }
    .el-table .cell {
      color: $color-font;
    }
  }
}

.el-date-range-picker__editors-wrap /deep/ {
  background: red;
  .el-date-range-picker__time-picker-wrap {
    width: 100%;
    &:nth-of-type(2) {
      display: none;
    }
  }
}
.mail-tooltips {
  width: 280px;
  padding: 10px 13px;
  span:nth-of-type(2) {
    float: right;
    width: 60px;
    text-align: left;
  }
}
</style>
