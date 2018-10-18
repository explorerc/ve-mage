<template>
  <div class="share-container"
       v-if="value.enable">
    <div v-if="showDialog"
         class="_dialog-container"
         @click="closeDialog">
      <div class="_dialog"
           @click.stop="">
        <div class="_dialog-header">分享到微信
          <i class="iconfont icon-close"
             @click="closeDialog"></i>
        </div>
        <div class="_dialog-content">
          <div class="title">{{share.title}}</div>
          <div class="des">{{share.des}}</div>
          <div class="qr">
            <img :src="`http://aliqr.e.vhall.com/qr.png?t=${this.share.link}`">
          </div>
          <div class="ps">使用微信扫一扫</div>
        </div>
      </div>
    </div>
    <div ref="target"
         class="share">
      <ul class="share-group">
        <li v-if="value.wx">
          <a class="share-item"
             @click="doWX">
            <div class="icon wx"></div>
            <span>微信好友</span>
          </a>
        </li>
        <li v-if="value.wxSpace">
          <a class="share-item"
             @click="doWXSpace">
            <div class="icon wx-space"></div>
            <span>微信朋友圈</span>
          </a>
        </li>
        <li v-if="value.qq">
          <a class="share-item"
             @click="doQQ">
            <div class="icon qq"></div>
            <span>QQ好友</span>
          </a>
        </li>
        <li v-if="value.qqSpace">
          <a class="share-item"
             @click="doQQSpace">
            <div class="icon qq-space"></div>
            <span>QQ空间</span>
          </a>
        </li>
        <li v-if="value.sina">
          <a class="share-item"
             @click="doSina">
            <div class="icon sina"></div>
            <span>新浪微博</span>
          </a>
        </li>
        <li v-if="value.copy">
          <a class="share-item"
             @click="doCopy">
            <div class="icon copy"></div>
            <span>复制链接</span>
          </a>
        </li>
      </ul>
    </div>
    <com-edit ref="editTarget" :class='"share-com"'>
      <div class="nav-blank-title">分享</div>
      <label class='normal' >分享媒体</label>
      <ul class="edit-share-group">
        <li>
          <input id='wx' type="checkbox" v-model="value.wx">
          <label for="wx">
            <dl class='wx'>
              <dt></dt>
              <dd>微信好友</dd>
            </dl>
          </label>
        </li>
        <li>
          <input id='wxSpace' type="checkbox" v-model='value.wxSpace'>
          <label for="wxSpace">
            <dl class='wxSpace'>
              <dt></dt>
              <dd>朋友圈</dd>
            </dl>
          </label>
        </li>
        <li>
          <input id='qq' type="checkbox" v-model='value.qq'>
          <label for="qq">
            <dl class='qq'>
              <dt></dt>
              <dd>QQ好友</dd>
            </dl>
          </label>
        </li>
        <li>
          <input id='qqSpace' type="checkbox" v-model='value.qqSpace'>
          <label for="qqSpace">
            <dl class='qqSpace'>
              <dt></dt>
              <dd>QQ空间</dd>
            </dl>
          </label>
        </li>
        <li>
          <input id='sina' type="checkbox" v-model='value.sina'>
          <label for="sina">
            <dl class='sina'>
              <dt></dt>
              <dd>微博</dd>
            </dl>
          </label>
        </li>
        <li>
          <input id='copy' type="checkbox" v-model='value.copy'>
          <label for="copy">
            <dl class='copy'>
              <dt></dt>
              <dd>复制链接</dd>
            </dl>
          </label>
        </li>
      </ul>
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
  props: {
    share: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      showDialog: false,
      url: location.href,
      sina: true
    }
  },
  methods: {
    doSina () {
      window.open(`
      http://v.t.sina.com.cn/share/share.php?
      url=${encodeURIComponent(this.share.link)}
      &title=${encodeURIComponent(this.share.des)}
      &pic=${encodeURIComponent(this.share.imgUrl)}
      &appkey=&searchPic=false
      `)
    },
    doQQSpace () {
      window.open(`
      http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?desc=${encodeURIComponent(this.share.des)}&url=${encodeURIComponent(this.share.link)}&src%3Dsharemodclk131212&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    },
    doQQ () {
      window.open(`
      http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(this.share.link)}&title=${encodeURIComponent(this.share.title)}&desc=${encodeURIComponent(this.share.des)}&pics=${encodeURIComponent(this.share.imgUrl)}
      `)
    },
    doWXSpace () {
      this.showDialog = true
    },
    doWX () {
      this.showDialog = true
    },
    doCopy () {
      this.url.copyClipboard()
      this.$toast({
        'content': '复制成功',
        'position': 'center'
      })
    },
    closeDialog () {
      this.showDialog = false
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/variable.scss';
.share-container /deep/ {
  position: relative;
  ._dialog-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
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
          display: block;
          width: 185px;
          height: 185px;
          padding: 5px;
          border: 5px #bbda80 solid;
          margin: auto;
          img {
            width: 162px;
            height: 162px;
          }
        }
        .ps {
          padding-top: 15px;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  .share {
    width: auto;
    min-width: 100px;
    min-height: 50px;
    display: inline-block;
    position: relative;
    .share-group {
      font-size: 0;
      li {
        display: inline-block;
        font-size: 14px;
        height: 100%;
        width: 90px;
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
            width: 90px;
            height: 90px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-bottom: 6px;
            &.sina {
              background-image: url('~assets/image/sina.png');
            }
            &.qq-space {
              background-image: url('~assets/image/qq_space.png');
            }
            &.qq {
              background-image: url('~assets/image/qq.png');
            }
            &.wx-space {
              background-image: url('~assets/image/wx_space.png');
            }
            &.wx {
              background-image: url('~assets/image/wx.png');
            }
            &.copy {
              background-image: url('~assets/image/copy_link.png');
            }
          }
          span {
            display: inline-block;
          }
        }
      }
    }
  }
  .edit-container {
    .edit-share-group {
      li {
        display: inline-block;
        margin-bottom: 5px;
        width: 60px;
        margin: 0 27px;
        margin-bottom: 30px;
        .label {
          display: inline-block;
          width: 80px;
          text-align: left;
        }
        input {
          display: none;
        }
        dl {
          cursor: pointer;
          width: 100%;
          text-align: center;
          dt {
            width: 50px;
            height: 50px;
            margin: 0 auto;
            border: 1px solid rgba(226, 226, 226, 1);
            border-radius: 10px;
          }
          dd {
            text-align: center;
            color: $color-font;
            font-size: 14px;
            padding-top: 5px;
          }
          &.wx dt {
            background: url('~assets/image/site/wx.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
          &.wxSpace dt {
            background: url('~assets/image/site/wxSpace.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
          &.qq dt {
            background: url('~assets/image/site/qq.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
          &.qqSpace dt {
            background: url('~assets/image/site/qqSpace.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
          &.sina dt {
            background: url('~assets/image/site/sina.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
          &.copy dt {
            background: url('~assets/image/site/link.svg') no-repeat;
            background-size: 40px 40px;
            background-position: center;
          }
        }
        input:checked ~ label {
          dl {
            dd {
              color: #07b906;
            }
            dt {
              border-color: #07b906;
            }
          }
          dl.wxSpace {
            dd {
              color: #6467f0;
            }
            dt {
              border-color: #6467f0;
            }
          }
          dl.qq {
            dd {
              color: #2ab6fa;
            }
            dt {
              border-color: #2ab6fa;
            }
          }
          dl.qqSpace {
            dd {
              color: #ffc600;
            }
            dt {
              border-color: #ffc600;
            }
          }
          dl.sina {
            dd {
              color: #ff000e;
            }
            dt {
              border-color: #ff000e;
            }
          }
          dl.copy {
            dd {
              color: #53a2ff;
            }
            dt {
              border-color: #53a2ff;
            }
          }
        }
      }
    }
  }
  .share-com {
    label.normal {
      text-align: left;
      display: block;
      padding: 20px 28px;
    }
  }
}
</style>
