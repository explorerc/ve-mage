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
        <img :src="imgHost + scope.row.avatar" class='protrait'>
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
        <template slot-scope="scope">
          <span >{{scope.row.role === "HOST" ? "主持人" : "助理"}}</span>
        </template>
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
          <el-button type="text" size="small"><a href=''>进入直播</a></el-button>
          <el-button type="text" size="small" @click="copyLink(scope.$index,scope.row)">复制链接</el-button>
          <el-button type="text" size="small" @click="copyInfo(scope.$index,scope.row)">复制邀请信息</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleKick(scope.$index,scope.row)" :class='scope.row.online == true ? "disabled" : ""'>踢出</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.$index,scope.row)" v-if='scope.row.role != "HOST"'>删除角色</el-button>
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
              actionUrl="/api/upload/image"
              inputName="file"
              :fileSize="1024"
              @error="uploadError"
              @progress="uploadProgress"
              @load="uploadImgSuccess">
               <div class="upload-file-box" title="点击上传">
                  <el-progress v-if="percentImg" type="circle" :percentage="percentImg"></el-progress>
                  <i class="iconfont icon-jiahao"></i>
                  <span>上传头像</span>
                  <div v-if="modalData.avatar" class="upload-file-botton" >编辑</div>
                  <div class="temp-img" v-if="modalData.avatar"
                       :style="{backgroundImage:'url('+imgHost+'/'+modalData.avatar+')'}"></div>
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
          <p><button @click='saveSetting(activityId)'>确定</button></p>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import prepareHttp from 'src/api/activity-manger'
export default {
  data () {
    return {
      tableData: [
        {
          id: '',
          activityId: '',
          avatar: '',
          nickname: '',
          role: '',
          password: '',
          online: true
        },
        {
          id: '',
          activityId: '',
          avatar: '',
          nickname: '',
          role: '',
          password: '',
          online: false
        }
      ],
      modalData: {
        isShow: false,
        title: '添加角色',
        nickname: '',
        password: '',
        avatar: '',
        id: '',
        idx: ''
      },
      webinar: {
        name: '张三',
        title: '什么什么什么直播',
        time: '2018-07-15 23:20:00'
      },
      activityId: '',
      msgKick: false,
      msgDelete: false,
      loading: false,
      copyDataval: 'www.baidu.com',
      imgHost: 'http://dev-zhike.oss-cn-beijing.aliyuncs.com/',
      percentImg: 0 // 图片上传进度
    }
  },
  created () {
    // debugger // eslint-disable-line
    this.activityId = this.$route.params.id
    this.getRolelist()
  },
  methods: {
    handleClick (e) {
      console.log(e)
    },
    handleEdit (idx, res) {
      this.modalData = {
        isShow: true,
        title: '编辑角色',
        nickname: res.nickname,
        password: res.password,
        avatar: res.avatar,
        id: res.id,
        idx: idx
      }
    },
    handleKick (idx, res) {
      this.msgKick = true
    },
    handleDelete (idx, res) {
      console.log(idx)
      // console.log(res)
      this.msgDelete = true
      this.modalData.id = res.id
      this.modalData.idx = idx
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
        let data = {
          id: this.modalData.id
        }
        prepareHttp.delAss(data).then((res) => {
          this.msgDelete = false
          if (res.code === 200) {
            console.log(res)
            this.$toast({
              content: '删除成功',
              position: 'center'
            })
            // 更新data
            this.tableData.splice([this.modalData.idx], 1)
          }
        }).catch((res) => {
          this.$toast({
            content: res.msg,
            position: 'center'
          })
          this.msgDelete = false
        })
      } else {
        this.msgDelete = false
      }
    },
    uploadError (data) {
      console.log('上传失败:', data)
    },
    uploadProgress (data) {
      // console.log('上传进度:', data)
      // console.log(data)
      this.percentImg = parseFloat(parseFloat(data.percent.replace('%', '')).toFixed(2))
      if (this.percentImg === 100) {
        this.percentImg = 0
      }
    },
    uploadImgSuccess (data) {
      // console.log('上传成功:', data)
      const fildObj = JSON.parse(data.data)
      this.modalData.avatar = fildObj.data.name
      // this.imgHost = fildObj.data.host
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
        avatar: '',
        id: ''
      }
    },
    saveSetting () {
      if (this.modalData.nickname.length === 0) {
        this.$toast({
          content: '请输入角色昵称',
          position: 'center'
        })
        return false
      } else if (this.modalData.password.length === 0) {
        this.$toast({
          content: '请输入口令',
          position: 'center'
        })
        return false
      } else if (this.modalData.avatar.length === 0) {
        this.$toast({
          content: '请上传角色头像',
          position: 'center'
        })
        return false
      }
      // 判断是否是编辑
      let saveData = {
        id: this.modalData.id,
        activityId: this.activityId,
        password: this.modalData.password,
        nickname: this.modalData.nickname,
        avatar: this.modalData.avatar
      }
      let isNew = this.modalData.title.search('编辑') >= 0
      prepareHttp.handleAss(isNew, saveData).then((res) => {
        if (res.code === 200) {
          this.$toast({
            content: isNew ? '编辑成功' : '创建成功',
            position: 'center'
          })
          // update data
          if (!isNew) { // new
            let pushData = {
              id: res.data.id,
              activityId: saveData.activityId,
              avatar: saveData.avatar,
              nickname: saveData.nickname,
              role: 'ASSISTANT',
              password: saveData.password,
              online: true
            }
            this.tableData.push(pushData)
          } else { // update
            this.tableData[this.modalData.idx].avatar = saveData.avatar
            this.tableData[this.modalData.idx].nickname = saveData.nickname
            this.tableData[this.modalData.idx].password = saveData.password
          }
        } else {
          this.$toast({
            content: res.msg,
            position: 'center'
          })
        }
        this.modalData.isShow = false
      }).catch((e) => {
        console.log(e)
      })
    },
    getRolelist () {
      this.loading = true
      prepareHttp.roleList(this.activityId).then((res) => {
        this.loading = false
        if (res.code === 200) {
          console.log(res)
          this.tableData = res.data.list
        }
      }).catch(() => {
        this.loading = false
      })
    },
    copyLink (idx, res) {
      const str = this.copyDataval
      str.copyClipboard((e) => {
        let str
        if (e === 'success') {
          str = '复制成功'
        } else {
          str = '复制失败'
        }
        this.$toast({
          content: str,
          position: 'center'
        })
      })
    },
    copyInfo (idx, res) {
      const str = `您好，《${this.webinar.name}》的直播，以下为直播的详细信息及参会信息，请准时参加，谢谢\n直播名称：${this.webinar.title}\n直播ID：${this.activityId}\n开始时间：${this.webinar.name}\n嘉宾口令：${this.tableData[idx].password}\n加入链接：http://t.e.vhall.com/mywebinar/login/${this.activityId}`
      str.copyClipboard((e) => {
        let str
        if (e === 'success') {
          str = '复制成功'
        } else {
          str = '复制失败'
        }
        this.$toast({
          content: str,
          position: 'center'
        })
      })
    }
  }
}
</script>

<style lang='scss' scope>
@import '~assets/css/variable';

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}
.copy-info,
.copy-link {
  opacity: 0;
  height: 1px;
  position: absolute;
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
.upload-file-box {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  color: #999;
  text-align: center;
  overflow: hidden;
  .iconfont {
    display: inline-block;
    margin-top: 44px;
    font-size: 30px;
  }
  span {
    display: block;
  }
  .upload-file-botton {
    position: absolute;
    bottom: -30px;
    left: 0;
    height: 30px;
    width: 100%;
    line-height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    transition: bottom 0.5s;
    z-index: 10;
  }
  &:hover {
    transition: border 0.3s;
    opacity: 0.8;
    border-style: solid;
    .upload-file-botton {
      bottom: 0;
    }
  }
}
.upload-file-box {
  .temp-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
  .el-progress--circle {
    margin-top: 12px;
  }
}
</style>
