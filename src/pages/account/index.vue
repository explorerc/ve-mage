<template>
  <div>
    <div class="v-info">
      <p class="v-title">
        基本信息
      </p>
      <com-editor :value.sync="account" type="readOnly"><span class="v-explain">账号</span></com-editor>
      <com-editor :value.sync="accountName" type="input" @saveInfo="save(accountName)" clickType="save"><span class="v-explain">账户名</span></com-editor>
      <div class="v-editor">
        <span class="v-explain">账户头像</span>
        <com-upload
          accept="png|jpg|jpeg|bmp|gif"
          actionUrl="/api/edu/database/doc-upload"
          inputName="resfile"
          :fileSize="5000"
          @selected="uploadSelected"
        >
        <div class="test-upload">+++</div>
        </com-upload>
      </div>
      <com-editor :value.sync="accountPhone" type="input" @clickSaveBtn="clickSave(accountPhone,'popup')" clickType="popup"><span class="v-explain">注册手机</span></com-editor>
      <com-editor :value.sync="accountPassword" type="input" @clickSaveBtn="clickSave(accountPassword,'popup')" clickType="popup"><span class="v-explain">登录密码</span></com-editor>
      <com-editor :value.sync="companyName"  type="readOnly"><span class="v-explain">公司名称</span></com-editor>

      <com-editor :value.sync="state" type="input" @clickSaveBtn="clickSave(state,'popup')" clickType="popup" btnName="查看"><span class="v-explain">认证状态</span></com-editor>
      <com-editor :value.sync="selectIndustry" type="select" :selectValue="industry"  @saveInfo="save(selectIndustry)" clickType="save"><span class="v-explain">所属行业</span></com-editor>
      <com-editor :value.sync="companyWebsite" type="input" @saveInfo="save(companyWebsite)" clickType="save" :max-length="40"><span class="v-explain">公司网址</span></com-editor>
    </div>
    <div class="v-info">
      <p class="v-title">
        指定联系人
      </p>
      <com-editor :value.sync="userName" type="input" @saveInfo="save(userName)" clickType="save" :max-length="20"><span class="v-explain">姓名</span></com-editor>
      <com-editor :value.sync="userPost" type="input" @saveInfo="save" clickType="save" :max-length="20"><span class="v-explain">职务</span></com-editor>
      <com-editor :value.sync="userPhone" type="input" @clickSaveBtn="clickSave(userPhone,'popup')" clickType="popup"><span class="v-explain">手机</span></com-editor>
      <com-editor :value.sync="officeNo" type="input" @saveInfo="save(officeNo)" clickType="save" :max-length="12"><span class="v-explain">办公电话</span></com-editor>
      <com-editor :value.sync="userEmail" type="input" @saveInfo="save(userEmail)" clickType="save"><span class="v-explain">邮箱</span></com-editor>
      <com-editor :value.sync="userWechat" type="input" @clickSaveBtn="saveInfo(userWechat)" clickType="save" :max-length="40"><span class="v-explain">微信</span></com-editor>
      <com-editor :value.sync="userQQ" type="input" @clickSaveBtn="saveInfo(userQQ)" clickType="save" :max-length="20"><span class="v-explain">QQ</span></com-editor>
      <com-editor :value.sync="userRemarks" type="input" @saveInfo="save(userRemarks)" clickType="save" :max-length="60"><span class="v-explain">备注</span></com-editor>
    </div>
    <message-box v-show="messageBoxShow" @handleClick="messageBoxClick" width="800px">
      <div slot="header">{{messageBoxTitle}}</div>
      <template v-if="messageBoxType === 'changeMobile'">
        <!-- <com-input :value.sync="outValue" placeholder="" class="v-input" :class="{warning:isWarning}" type="password"></com-input> -->
      </template>
      <template v-else-if="messageBoxType === 'changePassword'">

      </template>
      <template v-else-if="messageBoxType === 'seeState'">

      </template>
    </message-box>
  </div>
</template>
<script>
  import Editor from './info-editor'
  export default {
    data () {
      return {
        account: '',
        accountName: '',
        selectIndustry: '',
        accountPhone: '1521111111',
        accountPassword: '666',
        companyName: '',
        state: '',
        industry: [{
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }],
        companyWebsite: '',
        userName: '',
        userPost: '',
        userPhone: '',
        officeNo: '',
        userEmail: '',
        userWechat: '',
        userQQ: '',
        userRemarks: '',
        messageBoxShow: true, // 是否显示弹窗
        messageBoxTitle: '', // 弹窗标题
        messageBoxType: 'changeMobile'// 弹窗类型 更换手机（changeMobile）、修改密码（changePassword）、查看认证信息（seeState）
      }
    },
    components: {
      'com-editor': Editor
    },
    created () {
    },
    watch: {
      value: function () {
      }
    },
    methods: {
      uploadSelected () {
        console.log('图片上传完成')
      },
      save (val, saveType) {
        if (saveType === 'save') {
          console.log('save' + saveType)
        } else if (saveType === 'popup') {
          console.log('save' + saveType)
        } else if (saveType === 'link') {
          console.log('save' + saveType)
        }
      },
      seeState () {

      },
      modifyPassword () {
        console.log('修改密码')
      },
      modifyAccountPhone () {
        console.log('修改注册手机')
      },
      modifyUserPhone () {
        console.log('修改用户手机')
      },
      clickSave (val, type) {
        console.log(val + '...' + type)
      },
      messageBoxClick (e) {
        console.log(e)
        if (e.action === 'cancel') {
          console.log('取消或者关闭按钮')
          this.messageBoxShow = false
        } else if (e.action === 'confirm') {
          console.log('点击了确定按钮')
          this.messageBoxShow = false
        }
      }
    }
  }
</script>
<style lang="scss">
.v-info {
  width: 1170px;
  margin: 35px auto 0;
  border: 1px solid #333;
  padding: 10px;
  .v-editor {
    display: block;
    margin-bottom: 20px;
    height: 42px;
    line-height: 42px;
    .v-explain {
      display: inline-block;
      width: 65px;
    }
    .v-indo-label {
      display: inline-block;
      width: 155px;
      text-align: left;
      margin-right: 45px;
      overflow: hidden;
      vertical-align: middle;
    }
  }
  .v-title {
    text-align: left;
    font-size: 14px;
    color: #333;
  }
}
</style>
