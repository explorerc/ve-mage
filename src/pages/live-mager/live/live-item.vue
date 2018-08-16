<template>
  <div class="live-item" :style="{height: this.height+'px'}">
    <span v-if='liveData.status=="PREPARE"' class="live-state" style="background-color: #5ea6ec;">预告</span>
    <span v-if='liveData.status=="LIVING"' class="live-state" style="background-color: #fc5659;">直播中</span>
    <span v-if='liveData.status=="PLAYBACK"' class="live-state" style="background-color: #2ab804;">回放</span>
    <span v-if='liveData.status=="FINISH"' class="live-state" style="background-color: #999;">结束</span>
    <div class="live-img" :style="imgStyle"></div>
    <div class="live-md">
      <span>{{liveData.title}}</span>
      <span class="time">{{liveData.startTime}}</span>
    </div>
    <div class="live-bottom">
      <span class="item" @click.stop="handleClick(action.play)">开播</span>
      <span class="item" @click.stop="handleClick(action.share)">推广</span>
      <span class="item" @click.stop="handleClick(action.info)">详情</span>
      <span class="item" @mouseover.stop="showMore=true" @mouseout.stop="showMore=false">
        更多
        <transition name="slide-fade">
          <div class="live-more" v-show="showMore">
            <span @click.stop="handleClick(action.role)">角色</span>
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
    role: {
      type: 'role',
      text: '角色'
    },
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
        default: '220'
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
        this.$emit('handleClick', {...action, ...this.liveData})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixin";

  .live-item {
    position: relative;
    min-width: 228px;
    border-radius: 2px;
    font-size: 14px;
    color: $color-font;
    @include border;
    &:hover {
      cursor: pointer;
      border-color: #ff3333;
    }
    .live-state {
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      padding: 2px 4px;
      font-size: 12px;
    }
    .live-img {
      height: calc(100% - 84px);
      background-size: cover;
      border-bottom: 1px solid $color-bd;
      background-position: center center;
    }
    .live-md {
      height: 50px;
      border-bottom: solid 1px $color-bd;
      span {
        display: inline-block;
        min-width: 60%;
        line-height: 20px;
        padding-left: 10px;
        &:nth-child(1) {
          margin-top: 5px;
        }
        &.time {
          font-size: .8em;
          color: $color-font-time;
        }
      }
    }
    .live-bottom {
      position: relative;
      height: 34px;
      line-height: 34px;
      span.item {
        display: block;
        float: left;
        width: 25%;
        text-align: center;
        &:hover {
          color: $color-font-hover;
          span {
            color: $color-font;
          }
        }
        &:nth-child(2) {
          border-left: solid 1px $color-bd;
          border-right: solid 1px $color-bd;
          box-sizing: border-box;
        }
        &:nth-child(3){
          border-right: solid 1px $color-bd;
          box-sizing: border-box;
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
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
