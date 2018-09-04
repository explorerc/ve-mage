<template>
  <div class="share-container" v-if="value.enable">
    <div v-if="showDialog" class="_dialog-container" @click="closeDialog">
      <div class="_dialog" @click.stop="">
        <div class="_dialog-header">分享到微信<i class="iconfont icon-close" @click="closeDialog"></i></div>
        <div class="_dialog-content">
          <div class="title">《易烊千玺缺席中戏开学原因曝光 参加亚运闭幕表演》</div>
          <div  class="des">将视频分享给微信好友或微信好友圈</div>
          <div  class="qr">
            <img src="//qrcode.iqiyipic.com/qrcoder/?data=http%3A%2F%2Fbird.sns.iqiyi.com%2Fjump%3Fjump_url%3Dwww.iqiyi.com%252Fv_19rqz9nt74.html%253Fmsrc%253D10_107_192%2526u1%253Dqyid1486805902&amp;&amp;salt=827a581a67dc0e61dde03860230ac1dd&amp;width=162&amp;property=0" >
          </div>
          <div  class="ps">使用微信扫一扫</div>
        </div>
      </div>
    </div>
    <div ref="target" class="share" >
      <ul class="share-group">
        <li>
          <a class="share-item" @click="doSina">
            <div class="icon sina"></div>
            <span>新浪微博</span>
          </a>
        </li>
        <li>
          <a class="share-item" @click="doQQSpace">
            <div class="icon qq-space"></div>
            <span>QQ空间</span>
          </a>
        </li>
        <li>
          <a class="share-item" @click="doQQ">
            <div class="icon qq"></div>
            <span>QQ好友</span>
          </a>
        </li>
        <li>
          <a class="share-item" @click="doWXSpace">
            <div class="icon wx-space"></div>
            <span>朋友圈</span>
          </a>
        </li>
        <li>
          <a class="share-item" @click="doWX">
            <div class="icon wx"></div>
            <span>微信好友</span>
          </a>
        </li>
        <li>
          <a class="share-item" @click="doCopy">
            <div class="icon copy"></div>
            <span>复制链接</span>
          </a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget">
      44444444
    </com-edit>
  </div>
</template>

<script>
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  components: {
    ComEdit
  },
  data () {
    return {
      showDialog: false,
      url: 'http://localhost:2333/brand/template'
    }
  },
  methods: {
    doSina () {
      window.open('http://v.t.sina.com.cn/share/share.php?appkey=1925825497&url=http%3A%2F%2Fwww.iqiyi.com%2Fw_19ry7l7z1d.html%3Fsrc%3Dsharemodclk131212&title=%E3%80%90%E8%A7%86%E9%A2%91%EF%BC%9A%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%AD%E6%88%8F%E8%89%BA%E8%80%83%E6%88%90%E7%BB%A9%E6%9B%9D%E5%85%89%EF%BC%8C%E8%B6%85%E5%90%88%E6%A0%BC%E7%BA%BF30%E5%A4%9A%E5%88%86%EF%BC%81%E7%B2%89%E4%B8%9D%EF%BC%9A%E6%88%91%E5%8D%83%E7%9C%9F%E5%8E%89%E5%AE%B3%EF%BC%81%E3%80%91%EF%BC%88%E5%88%86%E4%BA%AB%40%E7%88%B1%E5%A5%87%E8%89%BA%EF%BC%89&searchPic=false&content=utf-8&pic=')
    },
    doQQSpace () {
      window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=%E3%80%90%E8%A7%86%E9%A2%91%EF%BC%9A%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%AD%E6%88%8F%E8%89%BA%E8%80%83%E6%88%90%E7%BB%A9%E6%9B%9D%E5%85%89%EF%BC%8C%E8%B6%85%E5%90%88%E6%A0%BC%E7%BA%BF30%E5%A4%9A%E5%88%86%EF%BC%81%E7%B2%89%E4%B8%9D%EF%BC%9A%E6%88%91%E5%8D%83%E7%9C%9F%E5%8E%89%E5%AE%B3%EF%BC%81%E3%80%91%EF%BC%88%E5%88%86%E4%BA%AB%40%E7%88%B1%E5%A5%87%E8%89%BA%EF%BC%89&url=http%3A%2F%2Fwww.iqiyi.com%2Fw_19ry7l7z1d.html%3Fsrc%3Dsharemodclk131212&pics=')
    },
    doQQ () {
      window.open('http://connect.qq.com/widget/shareqq/index.html?url=http%3A%2F%2Fwww.iqiyi.com%2Fw_19ry7l7z1d.html%3Fsrc%3Dsharemodclk131212&desc=%E3%80%90%E8%A7%86%E9%A2%91%EF%BC%9A%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%AD%E6%88%8F%E8%89%BA%E8%80%83%E6%88%90%E7%BB%A9%E6%9B%9D%E5%85%89%EF%BC%8C%E8%B6%85%E5%90%88%E6%A0%BC%E7%BA%BF30%E5%A4%9A%E5%88%86%EF%BC%81%E7%B2%89%E4%B8%9D%EF%BC%9A%E6%88%91%E5%8D%83%E7%9C%9F%E5%8E%89%E5%AE%B3%EF%BC%81%E3%80%91%EF%BC%88%E5%88%86%E4%BA%AB%40%E7%88%B1%E5%A5%87%E8%89%BA%EF%BC%89&title=%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%AD%E6%88%8F%E8%89%BA%E8%80%83%E6%88%90%E7%BB%A9%E6%9B%9D%E5%85%89%EF%BC%8C%E8%B6%85%E5%90%88%E6%A0%BC%E7%BA%BF30%E5%A4%9A%E5%88%86%EF%BC%81%E7%B2%89%E4%B8%9D%EF%BC%9A%E6%88%91%E5%8D%83%E7%9C%9F%E5%8E%89%E5%AE%B3%EF%BC%81&summary=%20&pics=&flash=&site=&style=201&width=32&height=32')
    },
    doWXSpace () {
      this.showDialog = true
    },
    doWX () {
      this.showDialog = true
    },
    doCopy () {
      this.url.copyClipboard()
    },
    closeDialog () {
      this.showDialog = false
    }
  }
}
</script>

<style scoped lang="scss">
.share-container /deep/ {
  position: relative;
  ._dialog-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    ._dialog {
      width: 600px;
      height: 400px;
      background: #fff;
      border: 1px solid #ccc;
      color: #666;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ._dialog-header {
        padding-left: 20px;
        height: 38px;
        line-height: 40px;
        font-size: 14px;
        background-color: #faf9f9;
        border-bottom: 1px solid #dadada;
        text-align: left;
        .icon-close {
          cursor: pointer;
          float: right;
          margin-right: 15px;
        }
      }
      ._dialog-content {
        padding-top: 10px;
        .title {
          font-size: 14px;
          color: #518900;
          text-align: center;
          line-height: 30px;
        }
        .des {
          font-size: 12px;
          color: #999;
          text-align: center;
          line-height: 30px;
          padding-bottom: 25px;
        }
        .qr {
          display: inline-block;
          border-radius: 6px;
          padding: 5px;
          border: 5px #bbda80 solid;
          img {
            width: 162px;
            height: 162px;
          }
        }
        .ps {
          padding-top: 5px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  .share {
    width: auto;
    display: inline-block;
    position: relative;
    .share-group {
      font-size: 0;
      li {
        display: inline-block;
        font-size: 14px;
        height: 80px;
        width: 60px;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        .share-item {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          .icon {
            height: 60px;
            background-image: url(../../assets/image/shareIcon.png);
            background-repeat: no-repeat;
            background-size: 460px;
            &.sina {
              background-position: 3px 0px;
              &:hover {
                background-position: 3px -80px;
              }
            }
            &.qq-space {
              background-position: -78px 0px;
              &:hover {
                background-position: -78px -80px;
              }
            }
            &.qq {
              background-position: -159px 0px;
              &:hover {
                background-position: -159px -80px;
              }
            }
            &.wx-space {
              background-position: -241px 0px;
              &:hover {
                background-position: -241px -80px;
              }
            }
            &.wx {
              background-position: -321px 0px;
              &:hover {
                background-position: -321px -80px;
              }
            }
            &.copy {
              background-position: -403px 0px;
              &:hover {
                background-position: -403px -80px;
              }
            }
          }
          span {
            display: inline-block;
            &:hover {
              color: #5aa700;
            }
          }
        }
      }
    }
  }
}
</style>
