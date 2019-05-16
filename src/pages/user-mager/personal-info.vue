<template>
  <div class="personal">
    <header>
      <p>管理员中心</p>
    </header>
    <div class="content">
      <div class="item">
        <span class="v-title">id：</span>
        <span class="info">{{userInfo.id}}</span>
      </div>
      <div class="item">
        <span class="v-title">姓名：</span>
        <span class="info" v-if="!isNameUpdate">
          {{userInfo.name}}
        </span>
        <el-input v-model="userInfo.name" v-else class="info"></el-input>
        <span class="update" v-if="!isNameUpdate" @click="isNameUpdate=true">修改</span>
        <span class="update" v-else @click="saveName">保存</span>
      </div>
      <div class="item">
        <span class="v-title">密码：</span>
        <span class="info">
          ......
        </span>
        <span class="update" @click="isPwdUpdate=true">修改</span>
      </div>
    </div>
    <message-box v-if="isPwdUpdate"
                 class="add-rater"
                 width="460px"
                 type="prompt"
                 header="修改密码"
                 comfirmText="保存"
                 @handleClick="editPwd">
      <div class="message-box-content">
        <el-form :model="updatePwd" ref="" :rules="rules" label-width="83px" class="demo-ruleForm">
          <el-form-item label="旧密码：" prop="team_id">
            <el-input v-model="updatePwd.oldPwd" class="slot_inp_b" placeholder="请输入旧密码"></el-input>
            <span v-if="oldPwdErr" class="errMsg">{{oldPwdErr}}</span>
          </el-form-item>
          <el-form-item label="新密码：" prop="team_id">
            <el-input v-model="updatePwd.pwd" class="slot_inp_b" placeholder="请输入新密码"></el-input>
            <span v-if="newPwdErr" class="errMsg">{{newPwdErr}}</span>
          </el-form-item>
          <el-form-item label="验证密码：" prop="team_id">
            <el-input v-model="updatePwd.comfirmPwd" class="slot_inp_b" placeholder="请输再次输入新密码"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </message-box>
  </div>
</template>

<script>
  import EventBus from '../../utils/eventBus'
  import mageServer from 'src/api/mage-service'
  export default {
    name: 'init-rating',
    data () {
      return {
        userInfo: JSON.parse(sessionStorage.getItem('userInfo'))[0],
        updatePwd: {
          oldPwd: '',
          pwd: '',
          comfirmPwd: ''
        },
        isNameUpdate: false,
        isPwdUpdate: false,
        oldPwdErr: '',
        newPwdErr: ''
      }
    },
    methods: {
      saveName () {
        this.$post(mageServer.POST_MAGE_NAME, {
          id: this.userInfo.id,
          name: this.userInfo.id
        }).then(res => {
          if (res.code === 200) {
            this.isNameUpdate = false
            sessionStorage.setItem('userInfo', this.userInfo)
          }
        })
      },
      editPwd (e) {
        if (e.action === 'cancel') {
          this.isPwdUpdate = false
        } else {
          if (!this.checkPwd()) return
          this.$post(mageServer.POST_MAGE_PASSWORD, {
            id: this.userInfo.id,
            password: this.updatePwd.pwd
          }).then(res => {
            if (res.code === 200) {
              this.isPwdUpdate = false
            } else if (res.code === 205) {
              this.oldPwdErr = res.msg
            }
          })
        }
      },
      checkPwd () {
        if (!this.updatePwd.oldPwd) {
          this.oldPwdErr = '请输入旧密码'
          return false
        }
        if (!this.updatePwd.pwd) {
          this.newPwdErr = '请输入新密码'
          return false
        }
        if (this.updatePwd.pwd !== this.updatePwd.comfirmPwd) {
          this.newPwdErr = '两次密码不一致'
          return false
        }
      }
    },
    created () {
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '管理员中心'
      }])
    }
  }
</script>

<style scoped lang="scss">
.personal {
  /*min-height: 630px;*/
  /*background-color: #fff;*/
  border-radius: 8px;
  padding: 0 30px;
  /*border: 1px solid #e2e2e2;*/
  header {
    position: relative;
    overflow: hidden;
    text-align: right;
    line-height: 60px;
    margin-bottom: 7px;
    margin-top: 32px;
    p {
      float: left;
      height: 60px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 60px;
    }
    .default-button,
    .primary-button {
      transition: unset;
      height: 30px;
      line-height: 30px;
    }

    .btn-box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      line-height: 30px;
      .com-button {
        padding: 0 20px;
      }
      .add-goods {
        /*width: 130px;*/
        padding: 0 20px;
        margin-left: 20px;
      }
    }
  }
  .content {
    /*margin-top: 30px;*/
    min-height: 300px;
    padding-top: 50px;
    background-color: #fff;
  }
  .item {
    height: 40px;
    position: relative;
    margin-bottom: 10px;
    line-height: 40px;
    text-align: center;
    .v-title {
      display: inline-block;
      width: 100px;
      text-align: right;
    }
    .info {
      display: inline-block;
      width: 200px;
      margin-right: 20px;
      text-align: left;

    }
    .update {
      position: absolute;
      cursor: pointer;
    }
    /deep/ {
      .el-input {
        width: 200px;
      }
    }
  }
  .errMsg {
    position: absolute;
    top: 70%;
    left: 0;
  }
}
</style>
