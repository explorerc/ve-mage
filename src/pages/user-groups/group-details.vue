<template>
  <div id="groupDetails">
    <header>{{group_title}}群组（{{total}}）</header>
    <div class="operation">
      <div class="opBtns">
        <el-dropdown @command="dialogImportShow" v-if="type === 2">
          <el-button size="small" round :disabled="selectRow.length < 1">批量操作</el-button>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item style="width: 96px;" command="export">导出</el-dropdown-item>-->
            <el-dropdown-item style="width: 96px;" command="delall">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button size="small" round v-if="type === 2" @click="batchImport">批量导入</el-button>
        <el-button size="small" round @click="exportFile" :disabled="!tableData.length>0">全部导出</el-button>
        <com-import v-if="dialogImport" @handleClick="handleClick" :isFixed="'0'" :isDis=true
                    :groupId="Number.parseInt(search.group_id)"></com-import>
      </div>
      <el-button size="small"
                 round
                 class="fr"
                 @click="userGroupsIndexReturn"
      >返回
      </el-button>
      <el-input class="search" size="small" placeholder="搜索用户ID/姓名/手机号/邮箱" suffix-icon="el-icon-search"
                v-model="search.keyword" @keyup.enter.native="onSearch" @blur="onSearch" clearable></el-input>
    </div>
    <div class="table_box">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" class="el-table"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" v-if="type === 2"></el-table-column>
        <el-table-column label="用户信息">
          <template slot-scope="scope">
            <div class="user_info">
              <img
                :src="scope.row.avatar ? `${$imgHost}/${scope.row.avatar}` :require('assets/image/avatar@2x.png')"
                alt="">
              <div>
                <span class="table_info">{{scope.row.real_name?scope.row.real_name:scope.row.nickname}}</span> &nbsp;&nbsp;
                <span class="table_info">{{scope.row.sex| getSex}} </span>
                <div v-html="scope.row.user_level "></div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="join_count" label="参与（次）"></el-table-column>
        <el-table-column prop="updated_at" label="最后活跃" show-overflow-tooltip></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="btns" type="text" size="mini" @click="handleDetails(scope.row.business_consumer_uid)">详情
            </el-button>
            <el-button v-if="type == 2 " class="btns" type="text" size="mini"
                       @click="handleDelete(scope.row.business_consumer_uid ,scope.$index)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <VePagination class="VePagination" v-show="total>10" :pageSize="search.pageSize" @changePage="changePage" :total="total"/>
    </div>
  </div>
</template>

<script>
  import VePagination from 'src/components/ve-pagination'
  import groupService from 'src/api/user_group'
  import comAddgroup from '../users-manage/components/com-addGroup'
  import comImport from '../users-manage/components/com-import'
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'group-details',
    components: { VePagination, comImport, comAddgroup },
    created () {
      this.onSearch()
      this.getGroupDetail()
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '用户群组',
        url: '/userManage/userGroupsIndex'
      }, {
        title: '详情'
      }])
    },
    filters: {
      getSex (a) {
        return a ? (a === 'M' ? '男' : '女') : '未知'
      }
    },
    data () {
      return {
        selectRow: [],
        group_title: '',
        tableData: [],
        dialogTitle: '',
        dialogImport: false,
        Group: {
          name: '',
          description: '',
          region: '',
          resource: '1'
        },
        type: Number.parseInt(this.$route.params.type),
        search: {
          group_id: this.$route.params.id,
          keyword: '',
          page: 1,
          pageSize: 10
        },
        total: 0
      }
    },
    methods: {
      handleClick () {
        this.dialogImport = false
        this.onSearch()
      },
      onSearch () {
        this.$post(groupService.USER_LISTS, this.search)
          .then(res => {
            this.total = Number.parseInt(res.data.count)
            res.data.list.forEach((item) => {
              let level
              switch (item.user_level) {
                case 1:
                  level = '<span style="color:#714cea;">优质用户</span>'
                  break
                case 2:
                  level = '<span style="color:#43D2C2;">高价值用户</span>'
                  break
                case 3:
                  level = '<span style="color:#FFD021;">一般用户</span>'
                  break
                case 4:
                  level = '<span style="color:#FB5757;">潜力用户</span>'
                  break
                case 5:
                  level = '<span style="color:#333333;">流失用户</span>'
                  break
                case 0:
                  level = '<span style="color:#4B5AFE;">没有评级</span>'
                  break
              }
              item.user_level = level
            })
            this.tableData = res.data.list
          })
      },
      changePage (nowPage) {
        this.search.page = nowPage
        this.onSearch()
      },
      handleDetails (id) { // 详情
        this.$router.push(`/userManage/info/${id}`)
      },
      dialogImportShow (a) {
        if (a === 'delall') {
          this.delAll()
        } else if (a === 'export') {
          this.exportFile()
        }
      },
      delAll () {
        let selectRowId = this.selectRow.map((item) => {
          return item.business_consumer_uid
        })
        this.handleDelete(selectRowId.join())
      },
      exportFile () {
        let _url = `/api${groupService.USER_EXPORT}?group_id=${this.search.group_id}&&keyword=${this.search.keyword}`
        window.location.href = _url
      },
      batchImport () {
        this.dialogImport = true
        this.dialogTitle = '批量导入'
      },
      getGroupDetail () {
        this.$post(groupService.GROUP_DETAIL, { group_id: this.search.group_id })
          .then((res) => {
            this.group_title = res.data.title
          })
      },
      handleSelectionChange (val) {
        this.selectRow = val
      },
      handleDelete (userId, index) {
        this.$messageBox({
          header: '删除用戶',
          type: 'error',
          width: '450px',
          content: '是否从群组内删除该用户',
          cancelText: '暂不', // 不传递cancelText将只有一个确定按钮
          confirmText: '删除',
          handleClick: (e) => {
            if (e.action === 'cancel') {
              this.$toast({
                content: '已取消删除!',
                position: 'center'
              })
            } else if (e.action === 'confirm') {
              this.$post(groupService.DEL_GROUP_USER, {
                business_consumer_uids: userId,
                group_id: this.search.group_id
              })
                .then((res) => {
                  // this.tableData.splice(index, 1)
                  setTimeout(() => {
                    this.onSearch()
                  }, 0)
                  this.$toast({
                    content: '删除成功!',
                    position: 'center'
                  })
                })
            }
          }
        })
      },
      userGroupsIndexReturn () {
        this.$router.push({path: '/userManage/userGroupsIndex'})
      }
    }
  }
</script>

<style lang="scss" scoped>
#groupDetails {
  padding: 50px 100px;
  font-family: PingFangSC-Regular;
  /deep/ {
    header {
      height: 26px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 26px;
      margin-bottom: 23px;
    }
    .operation {
      overflow: hidden;
      .opBtns {
        float: left;
      }
      .el-button {
        color: #555555;
        width: 120px;
        height: 34px;
        border-radius: 16px;
        border: 1px solid #888888;
        margin-left: 20px;
        &:hover,&:focus {
          background-color:#ffd021 ;
          border-color: #ffd021;
          color: black;
        }
      }
      .search {
        float: right;
        display: inline-block;
        width: 220px;
        .el-input__inner {
          border-radius: 20px;
          border-color: rgba(136, 136, 136, 1);
        }
      }
    }
    .table_box {
      border: 1px solid #e2e2e2;
      background-color: white;
      margin: 20px auto;
      padding: 30px;
      th.el-table_1_column_1 span.el-checkbox__inner {
        background-color: transparent;
        border: none;
      }
      th.el-table_1_column_1 span.el-checkbox__inner:before {
        content: '选择';
      }
      th.el-table_1_column_1 span.el-checkbox__inner:after {
        border: none;
      }
      tr {
        span{
          color: rgba(34, 34, 34, 1);
        }
      }
      .btns {
        color: rgba(34, 34, 34, 1);
        &:hover {
          color: rgba(75, 90, 254, 1);
        }
      }

      .user_info {
        img {
          float: left;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 5px;
          margin-top: 10px;
        }
        div {
          overflow: hidden;
          .table_info {
            display: inline-block;
            max-width: 90px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .VePagination {
      text-align: center;
      margin-top: 20px;
    }
    .el-dialog {
      .el-dialog__header {
        height: 40px;
        background: rgba(255, 208, 33, 1);
        .el-dialog__title {
          display: inline-block;
          font-size: 16px;
          transform: translateY(-5px);
        }
      }
      .downLoad_tem {
        width: 100%;
        display: block;
        text-align: right;
        margin-bottom: 10px;
        i {
          display: inline-block;
          width: 16px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border: 1px solid #222222;
          border-radius: 50%;
          margin-left: 5px;
        }
      }
      .el-dialog__body {
        padding: 30px 30px 0;
        .el-form {
          overflow: hidden;
          .el-form-item {
            .el-input {
              position: relative;
              border: 1px solid #cccccc;
              border-radius: 3px;
              .el-input__inner {
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
              }
              .el-input-group__append {
                height: 38px;
                line-height: 38px;
                width: 50px;
                position: absolute;
                right: 8px;
                color: #999999;
                text-align: right;
                top: 1px;
                border: none;
                padding: 0;
                font-size: 12px;
              }
            }
          }
        }
        .import_success {
          > i {
            display: block;
            margin: auto;
            width: 60px;
            height: 60px;
            background: url('../../assets/image/import.png') center;
            background-size: cover;
          }
          p {
            margin: 15px auto 26px auto;
            text-align: center;
            font-size: 24px;
            color: #222222;
          }
          div {
            display: flex;
            font-size: 16px;
            margin-bottom: 10px;
            span {
              text-align: center;
              flex: 1;
            }
            span:nth-child(3) {
              i {
                color: red;
              }
            }
          }
          ul {
            width: 90%;
            li {
              text-align: left;
              display: inline-block;
              width: 25%;
            }
          }
        }
      }
      .dialog-footer {
        .el-button {
          width: 120px;
          height: 40px;
          margin: -15px 15px 20px auto;
          background: rgba(255, 208, 33, 1);
          border-radius: 20px;
          span {
            color: #222222;
          }
        }
      }
    }
  }
}
</style>
