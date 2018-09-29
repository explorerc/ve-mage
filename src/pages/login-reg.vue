<template>
  <div class="v-login-reg"
       @click="changeState">
    <div class="v-info"
         id="toggler-div">
      <img :src="avatarImg" alt="" class="v-avatar" id="toggler-img" @avatarChange="avatarChange($event)">
      <span class="v-name"
            id="toggler-span">{{name}}</span>
    </div>
    <ul class="v-select"
        v-show="isShow">
      <li id="preventClick"
          :title="name">
        {{name}}
      </li>
      <li>
        <a href="/setAccount"><i class="iconfont icon-shezhi21"></i>账号设置</a>
      </li>
      <li>
        <a href="javascript:;"
           @click="logOff()"><i class="iconfont icon-tuichu1"></i>退出</a>
      </li>
    </ul>
  </div>
</template>
<script>
import userService from 'src/api/user-service.js'
import { mapMutations, mapState } from 'vuex'
import * as types from 'src/store/mutation-types'
import EventBus from 'src/utils/eventBus'
export default {
  props: {
    isShow: { // 头像下拉是否显示
      type: Boolean,
      required: false
    }
  },
  data () {
    return {
      name: '',
      avatar: ''
    }
  },
  components: {
  },
  computed: {
    ...mapState('login', {
      isLogin: state => state.isLogin
    }),
    avatarImg: function () {
      return this.avatar ? this.$imgHost + '/' + this.avatar : ''
    }
  },
  created () {
    EventBus.$on('avatarChange', (val) => {
      this.avatar = val
    })
  },
  mounted () {
    let accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
    if (accountInfo && accountInfo.userName) {
      this.name = accountInfo.name
      this.avatar = accountInfo.avatar
    }
  },
  methods: {
    ...mapMutations('login', {
      setIsLogin: types.UPDATE_IS_LOGIN
    }),
    changeState (event) {
      if (event.target.id === 'preventClick') return false
      this.$emit('changeState')
    },
    logOff () {
      this.$post(userService.POST_LOGOUT).then((res) => {
        sessionStorage.removeItem('isLogin')
        sessionStorage.removeItem('accountInfo')
        sessionStorage.removeItem('contactInfo')
        this.setIsLogin(0)
        this.$router.replace('/login')
      })
    }
  }
}
</script>
<style  scoped lang="scss">
.v-login-reg /deep/ {
  width: 110px;
  position: absolute;
  top: 13px;
  right: 30px;
  text-align: left;
  z-index: 2;
  cursor: pointer;
  .v-name {
    display: inline-block;
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .v-avatar {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
  .v-select {
    width: 200px;
    position: absolute;
    z-index: 3;
    top: 46px;
    right: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding-bottom: 5px;
    li {
      padding: 0 20px;
      text-align: left;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background-color: #f0f1fe;
      }
      &:first-child {
        height: 70px;
        line-height: 70px;
        font-size: 18px;
        color: #222;
        border-bottom: 1px solid #e2e2e2;
        cursor: default;
        &:hover {
          background-color: #fff;
        }
      }
      a {
        display: block;
        width: 100%;
        height: 100px;
        font-size: 14px;
        i {
          font-size: 16px;
          color: #555;
          margin-right: 5px;
          &.icon-tuichu1 {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>

