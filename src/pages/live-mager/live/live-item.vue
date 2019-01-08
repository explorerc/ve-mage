<template>
  <div class="live-item" :style="{height: this.height+'px'}" @click='goDetail(liveData.id)'>
    <span v-if='liveData.status=="PREPARE"' class="live-state">预告</span>
    <span v-if='liveData.status=="LIVING"' class="live-state"><i class="live-point"></i>直播中</span>
    <span v-if='liveData.status=="PLAYBACK"' class="live-state">回放</span>
    <span v-if='liveData.status=="FINISH"' class="live-state">结束</span>
    <div class="live-img" :style="imgStyle" @click.stop="handleClick(action.info)">
        <!--<img :src="liveData.imgUrl" v-if="imgUrl !== 'empty'" class='img'>-->
        <div class="img" v-if="imgUrl !== 'empty'" :style="{backgroundImage:`url(${liveData.imgUrl})`}" :src="liveData.imgUrl"></div>
        <div class="img" v-else></div>
    </div>
    <div class="live-md" @click.stop="handleClick(action.info)">
      <span :title="liveData.title">{{liveData.title}}</span>
      <span class="time">{{liveData.startTime}}</span>
    </div>
    <div class="live-bottom" @click.stop="">
      <!-- 开播 -->
      <span class="item" @click.stop="handleClick(action.play)" title="开播">
        <i class="ico ico-kaibo"></i><span>开播</span>
      </span>
      <!-- 推广 -->
      <span class="item" @click.stop="handleClick(action.share)" title="推广">
        <i class="ico ico-tuiguang"></i><span>推广</span>
      </span>
      <!-- 详情 -->
      <span class="item" @click.stop="handleClick(action.info)" title="详情">
        <i class="ico ico-xiangqing"></i><span>详情</span>
      </span>
      <!-- 更多 -->
      <span class="item item-more" @mouseover.stop="showMore=true" @mouseout.stop="showMore=false">
        <i class="ico ico-gengduo"></i>
        <transition name="slide-fade">
          <div class="live-more" v-show="showMore">
            <!--<span @click.stop="handleClick(action.role)">角色</span>-->
                        <span :class="{disabled:(liveData.status==='PREPARE'||liveData.status==='LIVING'||!liveData.data_finish_time)}" @click.stop="handleClick(action.data)">活动数据</span>
            <span :class="{disabled:(liveData.status==='PREPARE'||liveData.status==='LIVING'||!liveData.data_finish_time)}" @click.stop="handleClick(action.viewer)">观众列表</span>
            <span :class="{disabled:liveData.status==='LIVING'}" @click.stop="handleClick(action.delete)">删除</span>
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
          imgUrl: '',
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
        this.imgUrl = this.liveData.imgUrl ? this.liveData.imgUrl : 'empty'
        // return {
        //   backgroundImage: 'url(' + imgUrl + ')'
        // }
      }
    },
    methods: {
      handleClick (action) {
        this.$emit('handleClick', {...action, ...this.liveData})
      },
      goDetail (id) {
        this.$router.push(`/liveMager/detail/${id}`)
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
    cursor: pointer;
    height: calc(100% - 94px);
    background-size: 100% 100%;
    border-bottom: 1px solid $color-bd;
    background-position: center center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    .img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      background: url('~assets/image/webinar_cover_empty.png') no-repeat center;
      background-size: cover;
    }
  }
  .live-md {
    cursor: pointer;
    height: 60px;
    padding: 5px 0;
    cursor: pointer;
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
      margin-left: 20px;
      text-align: center;
      cursor: pointer;
      color: #555;
      .iconfont {
        vertical-align: middle;
        color: $color-font-icon;
        &:hover {
          span {
            color: $color-font;
          }
        }
      }
      .icon-shipin {
        font-size: 24px;
        vertical-align: -3px;
      }
      &:last-child {
        float: right;
        margin-right: 15px;
      }
      .live-more {
        position: absolute;
        top: 33px;
        right: -1px;
        width: 110px;
        background-color: #fff;
        border: solid 1px #e5e5e5;
        box-sizing: content-box;
        z-index: 2;
        line-height: 30px;
        border-radius: 6px;
        span {
          display: block;
          text-align: left;
          padding-left: 20px;
          height: 40px;
          line-height: 40px;
          &:hover {
            color: $color-font-hover;
          }
        }
      }
      .ico {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('~assets/image/list/live.svg') no-repeat center;
        background-size: contain;
        & ~ span {
          padding-left: 5px;
          position: relative;
          bottom: 4px;
        }
        &.ico-tuiguang {
          background-image: url('~assets/image/list/fly.svg');
        }
        &.ico-xiangqing {
          background-image: url('~assets/image/list/detail.svg');
          width: 16px;
          height: 18px;
        }
        &.ico-gengduo {
          background-image: url('~assets/image/list/more.svg');
        }
      }
      &:hover {
        color: #4b5afe;
        .ico {
          background-image: url('~assets/image/list/live_blue.svg');
        }
        .ico-tuiguang {
          background-image: url('~assets/image/list/fly_blue.svg');
        }
        .ico-xiangqing {
          background-image: url('~assets/image/list/detail_blue.svg');
        }
        .ico-gengduo {
          background-image: url('~assets/image/list/more_blue.svg');
        }
      }
      &.item-more:hover {
        span {
          color: #555;
          &:hover {
            color: #4b5afe;
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
