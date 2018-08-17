<!--角色设置-->
<template>
  <div v-ComLoading="loading" com-loading-text="拼命加载中">
    <p>角色设置<i>？</i><span @click="add">添加助理</span></p>
    <div class="content">
      <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        label="头像"
        width="150">
      <template slot-scope="scope">
        <img :src="scope.row.avatar" class='protrait'>
      </template>
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="昵称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="role"
        label="角色"
        width="150">
      </el-table-column>
      <el-table-column
        label="关联活动账号"
        width="150"
        prop='activityId'>
      </el-table-column>
      <el-table-column
        prop="password"
        label="口令"
        width="150">
      </el-table-column>
      <el-table-column
        label="状态"
        width="150">
        <template slot-scope="scope">
          <span>{{scope.row.online === true ? "在线" : "离线"}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">进入直播</el-button>
          <el-button type="text" size="small">复制链接</el-button>
          <el-button type="text" size="small">复制邀请信息</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleKick(scope.row)" :class='scope.row.online == true ? "disabled" : ""'>踢出</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)" v-show='scope.row.role != "主持人"'>删除角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    </div>
    <message-box v-if="msgKick" header="提示" content="执行踢出操作后，该角色将从发起端中被强制踢出，是否继续操作？" cancelText="取消" confirmText='确定' @handleClick="kickConfirm">
    </message-box>
    <message-box v-if="msgDelete" header="提示" content="是否确认删除该角色？" cancelText="取消" confirmText='确定' @handleClick="deleteConfirm">
    </message-box>
   <transition name='fade'>
      <div class="modal-cover" v-if='modalData.isShow' @click="closeModal">
        <div class='created-modal'>
          <p>{{modalData.title}}</p>
          <div class="btm">
            <div>
              <label>头像:</label>
              <com-upload
              accept="png|jpg|jpeg"
              actionUrl="/api/edu/database/doc-upload"
              inputName="resfile"
              :fileSize="modalData.fileSize"
              @load="uploadLoad"
              @error="uploadError"
              @over="uploadOver"
              >
              <div class="upload-section">
                <img class='img' src="modalData.avatar" v-if='modalData.avatar'>
                <div class='img' v-else>图片尺寸建议上传50*50，大小不超过1M</div>
              </div>
              </com-upload>
            </div>
            <div>
              <label>昵称:</label>
              <com-input :value.sync="modalData.nickname" placeholder="请输入昵称" :max-length="10" ></com-input>
            </div>
            <div>
              <label>口令:</label>
              <com-input :value.sync="modalData.password" placeholder="请输入口令" :max-length="6" ></com-input>
            </div>
          </div>
          <p><button @click='saveSetting'>确定</button></p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import liveHttp from 'src/api/activity-manger'
export default {
  data () {
    return {
      tableData: [
        {
          activityId: '',
          avatar: '../asdsd/aa.png',
          nickname: '张三',
          role: '主持人',
          password: '66666',
          online: true
        },
        {
          activityId: '',
          avatar: '../asdsd/aa.png',
          nickname: '李四',
          role: '助理',
          password: '33333',
          online: false
        }
      ],
      id: '',
      msgKick: false,
      msgDelete: false,
      modalData: {
        isShow: false,
        title: '添加角色',
        fileSize: 1024,
        nickname: '',
        password: '',
        portrait: ''
      },
      loading: false
    }
  },
  created () {
    // debugger // eslint-disable-line
    this.id = this.$route.params.id
    this.getRolelist()
  },
  methods: {
    handleClick (e) {
      console.log(e)
    },
    handleEdit (res) {
      this.modalData = {
        isShow: true,
        title: '编辑角色',
        nickname: res.nickname,
        password: res.password,
        portrait: res.avatar
      }
    },
    handleKick (e) {
      this.msgKick = true
    },
    handleDelete (e) {
      this.msgDelete = true
    },
    kickConfirm (e) {
      if (e.action === 'confirm') {
        // 请求踢出接口
      } else {
        this.msgKick = false
      }
    },
    deleteConfirm (e) {
      if (e.action === 'confirm') {
        // 请求删除接口
      } else {
        this.msgDelete = false
      }
    },
    uploadLoad () {

    },
    uploadError () {

    },
    uploadOver () {

    },
    closeModal (e) {
      if (e.target.className === 'modal-cover') {
        this.modalData.isShow = false
      }
    },
    add () {
      this.modalData = {
        isShow: true,
        title: '创建角色',
        nickname: '',
        password: '',
        avatar: ''
      }
    },
    saveSetting () {
      if (this.modalData.nickname.length === 0) {
        this.$toast({
          header: ``,
          customClass: 'msgError',
          content: '请输入角色昵称',
          autoClose: 3000,
          position: 'center'
        })
      } else if (this.modalData.password.length === 0) {
        this.$toast({
          header: ``,
          customClass: 'msgError',
          content: '请输入口令',
          autoClose: 3000,
          position: 'center'
        })
      } else if (this.modalData.avatar.length === 0) {
        this.$toast({
          header: ``,
          customClass: 'msgError',
          content: '请上传角色头像',
          autoClose: 3000,
          position: 'center'
        })
      }
    },
    getRolelist () {
      this.loading = true
      liveHttp.roleList(this.id).then((res) => {
        this.loading = false
        if (res.code === 200) {
          console.log(res)
          this.tableData = res.data.list
        }
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang='scss' scope>
@import '~assets/css/variable';
@import '~assets/css/base';
.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}

.created-modal {
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .btm {
    padding: 20px 0;
  }
}
.protrait {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 200px;
}
.upload-section {
  .img {
    cursor: pointer;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 200px;
    border: 1px solid #ccc;
  }
}
.msgError {
  color: red;
}
</style>
