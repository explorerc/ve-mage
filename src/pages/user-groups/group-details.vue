<template>
  <div id="groupDetails">
    <header>优质用户群组（987）</header>
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
      <el-dialog :title="dialogTitle" :visible.sync="dialogImport" width="30%">
        <div v-if="!isClose">
          <a href="javascript:void (0)" class="downLoad_tem">下载模板
            <el-tooltip class="item" effect="dark" placement="left-start">
              <div slot="content">导入用户数据时，手机号为必填项，<br/>如果单行用户数据未输入手机号码，<br/>该行数据将被忽略"</div>
              <i>?</i>
            </el-tooltip>
          </a>
          <el-form :model="Group" :rules="rules" ref="importData" label-width="100px">
            <el-form-item label="上传面板:">
              <VeUpload title="请使用csv模板上传" accept="csv" :defaultFile="defaultFile" :fileSize="2048"
                        :errorMsg="uploadFileErrorMsg" @error="uploadError" @success="uploadfileSuccess"></VeUpload>
            </el-form-item>
            <el-form-item label="导入规则:">
              <el-radio-group v-model="Group.resource">
                <el-radio label="1">新建固定群组</el-radio>
                <el-radio label="2">导入固定群组</el-radio>
              </el-radio-group>
            </el-form-item>
            <div v-if="Group.resource == '1'">
              <el-form-item prop="name" label="群组名称:">
                <el-input @input="inpC(Group.name,1)" :maxlength=10 v-model="Group.name" placeholder="请输入群组名称">
                  <template slot="append">{{inpNameLen}}/10</template>
                </el-input>
              </el-form-item>
              <el-form-item prop="description" label="群组描述:">
                <el-input @input="inpC(Group.description,2)" :maxlength=30 v-model="Group.description"
                          placeholder="请输入群组描述">
                  <template slot="append">{{inpDesLen}}/30</template>
                </el-input>
              </el-form-item>
            </div>
            <div v-else-if="Group.resource == '2'">
              <el-form-item label="选择群组:" prop="region">
                <el-select v-model="Group.region" placeholder="请选择群组">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
          <div></div>
        </div>
        <div v-else class="import_success">
          <i></i>
          <p>恭喜您，批量导入成功！</p>
          <div>
            <span>成功导入：<i>855</i></span>
            <span>错误用户：<i>855</i></span>
            <span>重复数据：<i>855</i></span>
          </div>
          <ul>
            <li v-for="(item,ind) in repeatData" :key="ind" v-show="ind<8">{{item}}
              <span v-show="ind != 3 || ind != 7"> 、</span>

            </li>
            <span v-if="repeatData.length>8">...</span>
          </ul>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" v-if="isClose" @click="importFileClose">关 闭</el-button>
          <el-button size="small" v-else @click="importFile">导 入</el-button>
        </div>
      </el-dialog>


      <el-input class="search" size="small" placeholder="搜索用户ID/姓名/手机号/邮箱" suffix-icon="el-icon-search"
                v-model="search.name"></el-input>
    </div>
    <div class="table_box">
      <el-table :data="tableData" border class="el-table">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="用户信息">
          <template slot-scope="scope">
            <div class="user_info">
              <img src="./../../assets/image/icon_data_hover.png" alt="">
              <div><span>{{scope.row.name}}</span>&nbsp;&nbsp; {{scope.row.sex| getSex}} <br>{{scope.row.user_level
                |get_userLevel}}
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
  import VeUpload from 'src/components/ve-upload-group'
  import groupService from 'src/api/user_group'

  export default {
    name: 'group-details',
    components: { VePagination, VeUpload },
    created () {
      this.onSearch()
    },
    filters: {
      getSex (a) {
        return a === 'M' ? '男' : '女'
      },
      get_userLevel (type) {
        let level = ''
        switch (type) {
          case 1:
            level = '<span style="color:#0FBDAA ;">优质用户</span>'
            break
          case 2:
            level = '<span style="color:#714CEA ;">高价值用户</span>'
            break
          case 3:
            level = '<span style="color:#FFAA00 ;">一般客户</span>'
            break
          case 4:
            level = '<span style="color:#FB5757 ;">潜在用户</span>'
            break
          case 5:
            level = '<span style="color: #333333; ">流失客户</span>'
            break
          case 0:
            level = '<span style="color:#0FBDAA ;">没有评级</span>'
            break
        }
        return level
      }
    },
    data () {
      return {
        isSelect: -1, // 当前是本页数据还是全部数据
        repeatData: ['13555555555', '13555555555', '13555555555', '13555555555', '13555555555', '13555555555', '13555555555', '13555555555', '13555555555'],
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
        total: 0,

        tableData: [],
        rules: {
          name: [
            // { required: true, validator: validateName, trigger: 'change' }
            { message: '群组名称不能为空', trigger: 'blur' }
            /* { min: 0, max: 10, message: '群组名称不能超过10个字', trigger: 'blur' } */
          ],
          resource: [
            { message: '请选择', trigger: 'change' }
          ],
          region: [
            { message: '请选择群组', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
      defaultFile () {
        return this.poster ? `${this.$imgHost}/${this.poster}` : ''
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
      onSearch () {
        this.$post(groupService.USER_LISTS, this.search)
          .then(res => {
            console.log(res)
            this.total = Number.parseInt(res.data.count)
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
      importFile () {
        this.dialogTitle = '导入观众组'
        this.isClose = true
      },
      importFileClose () {
        setTimeout(() => {
          this.isClose = false
        }, 100)
        this.dialogImport = false
      },
      inpC (a, type) {
        type === 1 ? this.inpNameLen = a.length : this.inpDesLen = a.length
      },
      dialogImportShow (a) {
        if (a === 'import') {
          this.dialogImport = true
          this.dialogTitle = '批量导入'
        }
      },
      uploadfileSuccess (data) {
        this.poster = data.name
      },
      uploadError (data) {
        console.log('上传失败:', data)
        this.uploadFileErrorMsg = data.msg
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
        content: "选择";
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
