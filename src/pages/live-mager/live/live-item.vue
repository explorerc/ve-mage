<template>
  <div class="live-item" :style="{height: this.height+'px'}">
    <div class="live-img" :style="imgStyle"></div>
    <div class="live-md">
      <span>{{liveData.title}}</span>
      <span class="time">{{liveData.time}}</span>
    </div>
    <div class="live-bottom">
      <span class="item" @click.stop="handleClick(action.roleInfo)">角色信息</span>
      <span class="item" @click.stop="handleClick(action.share)">分享观看页</span>
      <span class="item" @mouseover.stop="showMore=true" @mouseout.stop="showMore=false">
        更多
        <transition name="slide-fade">
          <div class="live-more" v-show="showMore">
            <span @click.stop="handleClick(action.edit)">编辑</span>
            <span @click.stop="handleClick(action.delete)">删除</span>
          </div>
        </transition>
      </span>
    </div>

  </div>
</template>

<script>
  const action = {
    roleInfo: {
      type: 'roleInfo',
      text: '角色信息'
    },
    share: {
      type: 'share',
      text: '分享观看页'
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
          imgUrl: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          time: '0000-00-00 00-00'
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
        this.$emit('handleClick', {...action, ...this.liveData.id})
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixin";

  .live-item {
    min-width: 228px;
    border-radius: 2px;
    font-size: 14px;
    color: $color-font;
    @include border;
    &:hover {
      transition: box-shadow .3s;
      box-shadow: none;
      cursor: pointer;
    }
    .live-img {
      height: calc(100% - 84px);
      background-size: cover;
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
        width: 33.33333333%;
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
        .live-more {
          position: absolute;
          top: 33px;
          right: -1px;
          width: 33.3333333%;
          background-color: #fff;
          border: solid 1px #e5e5e5;
          box-sizing: content-box;
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
