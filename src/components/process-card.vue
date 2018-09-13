<template>
  <div class='item'>
    <router-link :to="`${propLink + activityId}`">
      <div class="card">
        <div class='pic'>
          <!-- <img :src="propImg"> -->
        </div>
        <div class='desc'>
          <span>{{propTitle}}</span>
          <span class='des'>{{propDesc}}</span>
        </div>
      </div>
      <div class="btm">
        <el-switch class='switch' v-model="checked" inactive-color="#DEE1FF" :width="32" active-color="#FFD021" @change='change' :title='title' v-show='showSwitch'></el-switch>
        <!-- <span class='set'>设置</span> -->
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'process-card',
    data () {
      return {
        activityId: this.$route.params.id,
        img: '',
        idx: '',
        title: '',
        part: '',
        checked: false,
        showMore: false,
        showSwitch: true
      }
    },
    created () {
      this.idx = this.propIdx
      this.title = this.propTitle
      this.checked = this.propChecked
      this.part = this.propPart
      this.img = this.propImg
      this.showSwitch = this.propSwitch
    },
    props: {
      propLink: {
        type: String,
        default: ''
      },
      propTitle: {
        type: String,
        default: '默认标题'
      },
      propDesc: {
        type: String,
        default: ''
      },
      propImg: {
        type: String,
        default: '../img/asd.png'
      },
      propChecked: {
        type: Boolean,
        default: false
      },
      propPart: {
        type: String,
        default: ''
      },
      propIdx: {
        type: Number,
        default: 0
      },
      propSwitch: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      // more () {
      //   this.showMore = this.showMore === false ? this.showMore = true : this.showMore = false
      // },
      change () {
        this.$emit('update:checked', {
          idx: this.idx,
          part: this.part,
          type: this.checked,
          title: this.title
        })
      }
    },
    watch: {
      // checked: function () {

      // }

    }

  }
</script>

<style lang='scss' scoped>
@import 'assets/css/variable.scss';
@import '~assets/css/mixin.scss';
.item {
  float: left;
  width: 442px;
  height: 140px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(226, 226, 226, 1);
  padding: 14px 12px;
  margin: 10px 0;
  margin-right: 20px;
  &:nth-child(3n + 3) {
    margin-right: 0px;
  }
}

/* 设备宽度大于 1600 */

@media all and (min-width: 1600px) {
}

/* 设备宽度小于 1600px */

@media all and (max-width: 1600px) {
  .item {
    width: 326px;
  }
}

.card {
  width: 100%;
  height: 80px;
  .pic {
    float: left;
    width: 70px;
    height: 70px;
    margin: 4px;
    background: url('~assets/image/auto_wechat.png') no-repeat center;
    background-size: contain;
    margin-right: 20px;
  }
  .desc {
    float: left;
    font-size: 18px;
    color: $color-font;
    padding: 10px 0;
    span {
      display: block;
      font-size: 16px;
    }
    span.des {
      padding-top: 5px;
      font-size: 12px;
      color: $color-font-sub;
    }
  }
}

.btm {
  width: 100%;
  height: 40px;
  .switch {
    float: right;
    margin: 10px 0px;
  }
  .more {
    position: relative;
  }
  .show-more {
    position: absolute;
    top: 100%;
    right: 0;
  }
}
</style>
