<template>
  <div class="live-item" :style="{height: this.height+'px'}">
    <span v-if='liveData.status=="PREPARE"' class="live-state">预告</span>
    <span v-if='liveData.status=="LIVING"' class="live-state"><i class="live-point"></i>直播中</span>
    <span v-if='liveData.status=="PLAYBACK"' class="live-state">回放</span>
    <span v-if='liveData.status=="FINISH"' class="live-state">结束</span>
    <div class="live-img" :style="imgStyle"></div>
    <div class="live-md">
      <span :title="liveData.title">{{liveData.title}}</span>
      <span class="time">{{liveData.startTime}}</span>
    </div>
    <div class="live-bottom">
      <!-- 开播 -->
      <span class="item" @click.stop="handleClick(action.play)" title="开播">
        <i class="iconfont icon-shipin"></i>
      </span>
      <!-- 推广 -->
      <span class="item" @click.stop="handleClick(action.share)" title="推广">
        <i class="iconfont icon-fasong"></i>
      </span>
      <!-- 详情 -->
      <span class="item" @click.stop="handleClick(action.info)" title="详情">
        <i class="iconfont icon-xiangqingjieshao"></i>
      </span>
      <!-- 更多 -->
      <span class="item" @mouseover.stop="showMore=true" @mouseout.stop="showMore=false">
        <i class="iconfont icon-gengduo"></i>
        <transition name="slide-fade">
          <div class="live-more" v-show="showMore">
            <!--<span @click.stop="handleClick(action.role)">角色</span>-->
            <span class="disabled" @click.stop="handleClick(action.viewer)">观众</span>
            <span class="disabled" @click.stop="handleClick(action.data)">数据</span>
            <span @click.stop="handleClick(action.delete)">删除</span>
          </div>
        </transition>
      </span>
    </div>
  </div>
</template>
<script>
  const action = {
    play: {
      type: 'play',
      text: '开播'
    },
    share: {
      type: 'share',
      text: '推广'
    },
    info: {
      type: 'info',
      text: '详情'
    },
    // role: {
    //   type: 'role',
    //   text: '角色'
    // },
    viewer: {
      type: 'viewer',
      text: '观众'
    },
    data: {
      type: 'data',
      text: '数据'
    },
    edit: {
      type: 'edit',
      text: '编辑'
    },
    delete: {
      type: 'delete',
      text: '删除'
    }
  }

  export default {
    name: 'live-item',
    data () {
      return {
        showMore: false,
        action: action
      }
    },
    props: {
      liveData: {
        type: Object,
        default: {
          id: 0,
          title: '-',
          status: '-',
          imgUrl: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          startTime: '0000-00-00 00-00'
        }
      },
      height: {
        type: String,
        default: '260'
      }
    },
    computed: {
      imgStyle () {
        const imgUrl = this.liveData.imgUrl ? this.liveData.imgUrl : '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
        return {
          backgroundImage: 'url(' + imgUrl + ')'
        }
      }
    },
    methods: {
      handleClick (action) {
        this.$emit('handleClick', { ...action, ...this.liveData })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin';

.live-item {
  position: relative;
  min-width: 228px;
  border-radius: 4px;
  font-size: 14px;
  color: $color-font;
  background-color: $color-bg;
  @include border;
  .live-state {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    font-size: 10px;
    color: #ccc;
    background-color: rgba(0, 0, 0, 0.6);
    .live-point {
      display: inline-block;
      width: 6px;
      height: 6px;
      margin-right: 6px;
      border-radius: 50%;
      background-color: #fc5659;
    }
  }
  .live-img {
    height: calc(100% - 94px);
    background-size: cover;
    border-bottom: 1px solid $color-bd;
    background-position: center center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .live-md {
    height: 60px;
    padding: 5px 0;
    span {
      display: inline-block;
      min-width: 60%;
      line-height: 20px;
      padding-left: 20px;
      max-width: 310px;
      &:nth-child(1) {
        margin-top: 5px;
        color: $color-font;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &.time {
        font-size: 14px;
        color: $color-font-time;
      }
    }
  }
  .live-bottom {
    position: relative;
    height: 30px;
    line-height: 30px;
    span.item {
      display: inline-block;
      float: left;
      margin: 0 20px;
      text-align: center;
      cursor: pointer;
      .iconfont {
        color: $color-font-icon;
        &:hover {
          color: $color-font-hover;
          span {
            color: $color-font;
          }
        }
      }
      .icon-shipin {
        font-size: 24px;
      }
      &:last-child {
        float: right;
      }
      .live-more {
        position: absolute;
        top: 33px;
        right: -1px;
        width: 25%;
        background-color: #fff;
        border: solid 1px #e5e5e5;
        box-sizing: content-box;
        z-index: 2;
        line-height: 30px;
        span {
          display: block;
          text-align: center;
          &:hover {
            color: $color-font-hover;
          }
        }
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
