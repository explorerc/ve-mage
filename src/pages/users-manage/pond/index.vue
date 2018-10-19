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
          <el-button round>批量导入</el-button>
        </div>
        <div class="right">
          <com-input :value.sync="filterVal" placeholder="姓名/昵称/手机号/邮箱"   @focus=""></com-input>
          <span @click='showFilter = !showFilter'>精准搜索<i class='el-submenu__icon-arrow el-icon-arrow-down'></i></span>
        </div>
      </div>
      <transition name='fade' mode='out-in'>
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
            <span class="label">首次访问</span>
            <div class="condition">
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
            <span class="label">最后访问</span>
            <div class="condition">
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
            <el-button round v-if='!activityArray.length'>选择活动</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in activityArray'>{{item}} <span class='close' @click="handleDel(idx,'activityArray')"></span></li>
              </ol>
              <span class="added"></span>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">活动表情</span>
            <el-button round v-if='!tagArray.length'>选择标签</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in tagArray'>{{item}} <span class='close' @click="handleDel(idx,'tagArray')"></span></li>
              </ol>
              <span class="added"></span>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">所属群组</span>
            <el-button round v-if='!groupArray.length'>选择分组</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in groupArray'>{{item}} <span class='close' @click="handleDel(idx,'groupArray')"></span></li>
              </ol>
              <span class="added"></span>
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
    <com-addgroup></com-addgroup>
  </div>
</template>

<script>
import comAddgroup from '../components/com-addGroup'
import VePagination from 'src/components/ve-pagination'
export default {
  data () {
    return {
      filterVal: '',
      showFilter: true,
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
        '啊啊啊',
        'asdasd',
        '阿斯达刷卡机打卡时间',
        '撒电风扇的风',
        '匹配',
        '似懂非懂'
      ],
      tagArray: [
        '富含丰富和',
        '吃v报告',
        '会封号',
        '可开始',
        '啊'
      ],
      groupArray: [
        '吃v报告',
        '富含丰富和',
        '啊',
        '可开始',
        '会封号'
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
      }
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
    }
  },
  components: {
    VePagination,
    comAddgroup
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
        .added {
          cursor: pointer;
          display: inline-block;
          border-radius: 100px;
          width: 19px;
          height: 19px;
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
