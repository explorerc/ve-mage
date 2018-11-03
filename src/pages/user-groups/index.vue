<template>
  <div id="userGroups">
    <div class="operation">
      <h4>用户群组</h4>
      <div>
        <el-input size="small" placeholder="输入群组名称" suffix-icon="el-icon-search"
                  v-model="search.keyword" @keyup.enter.native="onSearch" @blur="onSearch" clearable></el-input>
        <el-button size="small" @click="showDialog(2)" round>新建固定群组</el-button>
        <el-button size="small" @click="showDialog(3)" round>新建智能群组</el-button>
      </div>
    </div>
    <div class="table-box">
      <el-table :data="tableData" border class="el-table">
        <el-table-column label="群组名称">
          <template slot-scope="scope">
            <div>
              <span>{{scope.row.title}}</span>
              <span class="default" v-if="scope.row.type=== 1"></span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="群组类型">
          <template slot-scope="scope">
            <div>{{scope.row.type| getType}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="user_count" label="群组人数"></el-table-column>
        <el-table-column label="更新时间">
          <template slot-scope="scope">
            <span>{{scope.row.updated_at?scope.row.updated_at:scope.row.created_at}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="describe" label="群组描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="btns" type="text" size="mini" @click="handleDetails(scope.row.group_id,scope.row.type)">详情
            </el-button>
            <el-button class="btns" v-if="scope.row.type !== 1" type="text" size="mini"
                       @click="handleEdit(scope.row.group_id,scope.row.title,scope.row.describe,scope.row.type,scope.row.rules)">
              编辑
            </el-button>
            <el-button class="btns" v-if="scope.row.type !== 1" type="text" size="mini"
                       @click="handleDelete(scope.row.group_id, scope.row.type,scope.$index)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <VePagination class="VePagination" :pageSize="search.pageSize" @changePage="changePage" :total="total"/>
    </div>
    <!--dialog-->
    <el-dialog :title="dialogTitle" :visible.sync="dialogFixedOrIntel" width="30%" :before-close="handleCloseDialog">
      <div>
        <el-form :model="Group" :rules="rules" ref="Group">
          <el-form-item prop="title">
            <com-input v-if="dialogFixedOrIntel" class="input_s" @input="inpC(Group.title,1)" :max-length=10
                       v-model.trim="Group.title"
                       placeholder="请输入群组名称">
            </com-input>
          </el-form-item>
          <el-form-item prop="describe">
            <com-input v-if="dialogFixedOrIntel" class="input_s" @input="inpC(Group.describe,2)" :max-length=30
                       v-model.trim="Group.describe"
                       placeholder="请输入群组描述">
            </com-input>
          </el-form-item>
        </el-form>
        <div class="screen">
          <condOption v-if="Group.type===3" ref="cond_option" @optionData="optionData" :rule="Group.rule"
                      :type="isAddOrEdit"></condOption>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="save('Group')">保 存</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import groupService from 'src/api/user_group'
  import VePagination from 'src/components/ve-pagination'
  import condOption from 'src/pages/user-groups/cond-option'

  export default {
    name: 'index',
    components: { VePagination, condOption },
    created () {
      this.onSearch()
    },
    filters: {
      getType (val) {
        let _type = ''
        switch (val) {
          case 1:
            _type = '系统分组'
            break
          case 2:
            _type = '固定分组'
            break
          case 3:
            _type = '智能分组'
            break
          default:
            break
        }
        return _type
      }
    },
    data () {
      let valiRepeatName = (rule, value, callback) => {
        if (value) {
          let par = {
            title: value
          }
          if (this.isAddOrEdit === 'edit') { // 编辑不用检查自身是否重复
            this.$set(par, 'group_id', this.Group.group_id)
          }
          this.repeatTitle(par).then((res) => {
            if (res.code !== 200) {
              return callback(new Error('该群组名称已存在'))
            } else {
              callback()
            }
          }).catch((err) => {
            if (err.code !== 200) {
              return callback(new Error('该群组名称已存在'))
            } else {
              callback()
            }
          })
        } else {
          return callback(new Error('群组名称不能为空'))
        }
      }
      return {
        dialogTitle: '',
        isAddOrEdit: '', // 当前点击的是新建还是编辑
        inpNameLen: 0,
        inpDesLen: 0,
        search: {
          pageSize: 10,
          keyword: '',
          page: 1
        },
        total: 0,
        Group: {
          title: '',
          describe: '',
          type: '',
          rule: []
        },
        dialogFixedOrIntel: false,

        tableData: [],
        rules: {
          title: [
            { validator: valiRepeatName, trigger: 'blur' }
          ],
          describe: [
            { required: true, message: '群组描述不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    /* watch: {
      dialogFixedOrIntel (nval, oval) {
        if (this.$refs['Group']) this.$refs['Group'].resetFields()
      }
    }, */
    methods: {
      onSearch () { // 搜索
        this.$post(groupService.GROUPS_LIST, this.search)
          .then(res => {
            this.tableData = res.data.list
            this.total = Number.parseInt(res.data.count)
          })
      },
      repeatTitle (par) {
        return this.$config({ handlers: true }).$post(groupService.VALI_TITLE, par)
      },
      handleDetails (id, type) { // 详情
        this.$router.push(`/userManage/userGroupsDetails/${id}/${type}`)
      },
      handleEdit (groupId, title, describe, type, rule) { // 编辑
        this.isAddOrEdit = 'edit' // 当前点击是编辑
        this.Group.group_id = groupId
        this.Group.title = title
        this.Group.describe = describe
        this.inpNameLen = title.length
        this.inpDesLen = describe.length
        this.Group.type = type
        if (type === 2) {
          this.dialogTitle = '编辑固定群组'
        } else {
          this.$set(this.Group, 'rule', JSON.parse(rule))
          this.dialogTitle = '编辑智能群组'
        }
        this.dialogFixedOrIntel = true
        console.log('此刻点击编辑，数据是：' + JSON.stringify(this.Group))
      },
      handleDelete (id, type, index) { // 删除群组
        this.$messageBox({
          header: '删除群组',
          type: 'error',
          width: '450px',
          content: '<span>删除群组后，组内人员将不再归属于该组。</br> 是否确认删除群组？</span> ',
          cancelText: '暂不', // 不传递cancelText将只有一个确定按钮
          confirmText: '删除',
          handleClick: (e) => {
            console.log(e)
            if (e.action === 'cancel') {
              this.$message({
                type: 'info',
                message: '已取消删除'
              })
            } else if (e.action === 'confirm') {
              this.$post(groupService.DEL_GROUP, { group_id: id, type: type })
                .then(res => {
                  this.tableData.splice(index, 1)
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  })
                })
            }
          }
        })
      },
      changePage (curPage) { // 分页
        this.search.page = curPage
        this.onSearch()
      },
      showDialog (type) { // 新建群组弹框
        this.isAddOrEdit = 'add' // 点击的是新建
        this.Group.type = type // 智能群组还是固定群组
        this.Group.title = ''
        this.Group.describe = ''
        this.Group.rule = ''
        this.dialogFixedOrIntel = true
        if (type === 2) {
          this.dialogTitle = '创建固定群组'
        } else {
          this.dialogTitle = '创建智能群组'
        }
        console.log('此刻点击新建，数据是：' + JSON.stringify(this.Group))
      },
      inpC (a, type) {
        if (type === 1) {
          this.inpNameLen = a.length
        } else {
          this.inpDesLen = a.length
        }
      },
      optionData (a) { // 新建或者编辑 返回的规则
        this.Group.rules = JSON.stringify(a)
        this.sendData()
      },
      sendData () { // 发送数据
        let _url = ''
        if (this.isAddOrEdit === 'add') { // 判断是新建还是编辑
          _url = groupService.CREATE_GROUP
        } else {
          _url = groupService.UPDATE_GROUP
        }

        this.$post(_url, this.Group)
          .then((res) => {
            if (res.code === 200) {
              this.Group.type = -1
              this.dialogFixedOrIntel = false
              this.isAddOrEdit = '' // 重置
              this.inpNameLen = 0
              this.inpDesLen = 0
              this.onSearch()
            }
          })
      },
      save (group) { // 保存按钮点击
        this.$refs[group].validate((valid) => {
          if (valid) {
            if (this.Group.type === 2) { // 固定群组 直接发送数据
              this.sendData()
            } else if (this.Group.type === 3) { // 智能群组 调规则页面返回数据
              this.$refs.cond_option.save()
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleCloseDialog (done) {
        this.Group.type = -1
        this.isAddOrEdit = '' // 重置
        this.dialogFixedOrIntel = false
        done()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #userGroups {
    font-family: PingFangSC-Regular;
    padding: 40px 100px;
    /deep/ {
      header {
        height: 40px;
        width: 100%;
        line-height: 40px;
        padding-left: 20px;
        display: inline-block;
        background: #cccccc;
      }
      .operation {
        overflow: hidden;
        h4 {
          display: inline-block;
          height: 26px;
          color: rgba(34, 34, 34, 1);
          line-height: 26px;
          font-size: 24px;
          float: left;
          font-weight: 400;
        }
        div {
          float: right;
          .el-input {
            float: left;
            width: 220px;
            height: 34px;
            margin-right: 20px;
            .el-input__inner {
              border-radius: 20px;
              border-color: rgba(136, 136, 136, 1);
              &:hover {
                border-color: #5D6AFE;
              }
            }
          }
          .el-button {
            color: rgba(85, 85, 85, 1);
            width: 120px;
            height: 34px;
            border-radius: 16px;
            border: 1px solid rgba(136, 136, 136, 1);
          }
        }
      }
      .table-box {
        margin-top: 22px;
        padding: 30px;
        border: 1px dashed #cccccc;
        .el-table {

          .btns {
            color: rgba(34, 34, 34, 1);
            &:hover {
              color: rgba(75, 90, 254, 1);
            }
          }
          .default:after {
            content: '默认';
            color: #4B5AFE;
            height: 17px;
            font-size: 10px;
            padding: 0 3px;
            border: 1px solid #4B5AFE;
          }
        }
        .VePagination {
          text-align: center;
          margin-top: 20px;
        }
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
        .el-dialog__body {
          padding: 30px 30px 0;
          .el-form {
            .el-form-item {
              .input_s {
                width: 100%;
              }
              .el-input {
                position: relative;
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

  .userGroupDelConfirm {
    border: none;
    .el-message-box__header {
      border-top: 6px solid #FC5659;
    }
    .userGroupDelConfirmBtn {
      width: 120px;
      background-color: #FC5659;
      color: #222;
    }

  }

</style>
