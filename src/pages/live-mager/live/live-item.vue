<template>
  <div class="live-item" :style="{height: this.height+'px'}">
    <div class="live-img" :style="imgStyle"></div>
    <div class="live-bottom" :style="bottomStyle">
      <img>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'live-item',
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
        default: '200'
      }
    },
    computed: {
      imgStyle () {
        const imgUrl = this.liveData.imgUrl ? this.liveData.imgUrl : '//cnstatic01.e.vhall.com/static/img/v35-webinar.png'
        return {
          height: this.height * 0.8 + 'px',
          backgroundImage: 'url(' + imgUrl + ')'
        }
      },
      bottomStyle () {
        return {height: this.height * 0.2 + 'px'}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/mixin";

  .live-item {
    width: 300px;
    border-radius: 2px;
    @include border-shadow;
    &:hover {
      transition: box-shadow .3s;
      box-shadow: none;
      cursor: pointer;
    }
    .live-img {
      background-color: gainsboro;
      background-size: cover;
      background-position: center center;
    }
  }
</style>
