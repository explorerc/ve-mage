<template>
  <div id="groupDetails">
    <header>{{group_title}}群组（{{total}}）</header>
    <div class="operation">
      <el-dropdown @command="SelectData">
        <span class="el-dropdown-link">
          选择<!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="NowPage">全选本页数据</el-dropdown-item>
          <el-dropdown-item command="AllPage">全选列表所有数据</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="dialogImportShow">
        <span class="el-dropdown-link">
          批量操作<!--<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="import" v-if="type === 2">导入</el-dropdown-item>
          <el-dropdown-item>导出</el-dropdown-item>
          <el-dropdown-item disabled>添加到群组</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <transition name='fade' mode='out-in' v-if="dialogImport">
        <com-import @handleClick="handleClick"></com-import>
      </transition>

      <el-input class="search" size="small" placeholder="搜索用户ID/姓名/手机号/邮箱" suffix-icon="el-icon-search"
                v-model="search.name" @keyup.enter.native="onSearch" clearable></el-input>
    </div>
    <div class="table_box">
      <el-table :data="tableData" border class="el-table">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="用户信息">
          <template slot-scope="scope">
            <div class="user_info">
              <img src="./../../assets/image/icon_data_hover.png" alt="">
              <div>
                <span>{{scope.row.real_name}}</span>&nbsp;&nbsp; {{scope.row.sex| getSex}} <br><span
                v-html="scope.row.user_level "></span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="attention_goods_count" label="参与（次）"></el-table-column>
        <el-table-column prop="updated_at" label="最后活跃"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="btns" type="text" size="mini" @click="handleDetails(scope.row.name,scope.row.date)">详情
            </el-button>
            <el-button v-if="type == 2 " class="btns" type="text" size="mini"
                       @click="handleDelete(scope.row.business_consumer_uid)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <VePagination class="VePagination" :pageSize="search.pageSize" @changePage="changePage" :total="total"/>
    </div>

  </div>
</template>

<script>
import VePagination from 'src/components/ve-pagination'
import groupService from 'src/api/user_group'
import comAddgroup from '../users-manage/components/com-addGroup'
import comImport from '../users-manage/components/com-import'

export default {
  name: 'group-details',
  components: { VePagination, comImport, comAddgroup },
  created () {
    this.onSearch()
    this.getGroupDetail()
  },
  filters: {
    getSex (a) {
      return a === 'M' ? '男' : '女'
    }
  },
  data () {
    return {
      group_title: '',
      tableData: [],
      isSelect: -1, // 当前是本页数据还是全部数据
      poster: '',
      uploadFileErrorMsg: '', // 上传文件错误提示
      isClose: false,
      dialogTitle: '',
      dialogImport: false,
      inpNameLen: 0,
      inpDesLen: 0,
      Group: {
        name: '',
        description: '',
        region: '',
        resource: '1'
      },
      type: Number.parseInt(this.$route.params.type),
      search: {
        group_id: this.$route.params.id,
        name: '',
        page: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  watch: {
    search: {
      handler (val) {
        if (this.isSelect === 1 && val) {
          this.selectCheck()
        }
      },
      deep: true
    }

  },
  methods: {
    handleClick () {
      this.dialogImport = false
    },
    onSearch () {
      this.$post(groupService.USER_LISTS, this.search)
        .then(res => {
          console.log(res)
          this.total = Number.parseInt(res.data.count)
          res.data.list.forEach((item) => {
            let level
            switch (item.user_level) {
              case 1:
                level = '<span style="color:#0FBDAA;">优质用户</span>'
                break
              case 2:
                level = '<span style="color:#714CEA;">高价值用户</span>'
                break
              case 3:
                level = '<span style="color:#FFAA00;">一般客户</span>'
                break
              case 4:
                level = '<span style="color:#FB5757;">潜在用户</span>'
                break
              case 5:
                level = '<span style="color:#333333;">流失客户</span>'
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
      console.log(nowPage)
      this.search.page = nowPage
      this.onSearch()
    },
    handleDetails () { // 详情
    },
    dialogImportShow (a) {
      if (a === 'import') {
        this.dialogImport = true
        this.dialogTitle = '批量导入'
      }
    },
    selectCheck () {
      this.$nextTick(() => {
        document.querySelector('.table_box th.el-table_1_column_1 span.el-checkbox__inner').click()
      })
    },
    SelectData (a) {
      this.selectCheck()
      if (a === 'NowPage') {
        this.isSelect = 0
      } else {
        this.isSelect = 1
      }
    },
    getGroupDetail () {
      this.$post(groupService.GROUP_DETAIL, { group_id: this.search.group_id })
        .then((res) => {
          this.group_title = res.data.title
        })
    }
  }
}
</script>

<style lang="scss">
#groupDetails {
  padding: 50px 100px;
  font-family: PingFangSC-Regular;
  header {
    height: 26px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 26px;
    margin-bottom: 23px;
  }
  .operation {
    .el-dropdown {
      span {
        display: inline-block;
        width: 120px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        border: 1px solid rgba(136, 136, 136, 1);
        border-radius: 17px;
      }
      &:hover {
        /*border: 1px solid rgba(75,90,254,1);*/
        border-radius: 17px;
        border-color: rgba(75, 90, 254, 1) !important;
        color: rgba(75, 90, 254, 1);
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
    border: 1px dashed #cccccc;
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
</style>
