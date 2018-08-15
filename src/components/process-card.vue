<template>
  <div class='item'>
    <div class="card">
      <div class='pic'><img :src="propImg"></div>
      <div class='desc'>
        <span>{{propTitle}}</span>
        <span class='des' v-for='item in propDesc' :key='item'>{{item}}</span>
      </div>
    </div>
    <div class="btm">
      <el-switch class='switch' v-model="checked" active-color="#13ce66" inactive-color="#ff4949" @change='change' :title='title' v-show='showSwitch'></el-switch>
      <span class='set'>设置</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'process-card',
    data () {
      return {
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
      propTitle: {
        type: String,
        default: '默认标题'
      },
      propDesc: {
        type: Array,
        default: function () {
          return ['默认描述1', '默认描述2']
        }
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
.item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  float: left;
  margin: 10px;
}

.card {
  width: 100%;
  height: 100px;
  padding: 10px;
  .pic {
    border: 1px solid #ccc;
    border-radius: 5px;
    float: left;
    width: 70px;
    height: 70px;
    margin: 4px;
  }
  .desc {
    float: left;
    span {
      display: block;
      font-size: 16px;
    }
    span.des {
      font-size: 12px;
    }
  }
}

.btm {
  width: 100%;
  height: 40px;
  border-top: 1px solid #ccc;
  span {
    font-size: 12px;
    cursor: pointer;
    height: 100%;
    line-height: 40px;
    float: right;
    padding: 0 5px;
    border-left: 1px solid #ccc;
  }
  .switch {
    float: left;
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
