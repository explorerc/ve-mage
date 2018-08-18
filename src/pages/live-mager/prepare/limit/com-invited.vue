<template>
  <div class="invite-page mager-box">
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">观众组：</div>
        <div class="from-content">
          <el-button @click='modalShow = true'>选择分组</el-button>
          <el-button @click='modalShow = true'>倒入分组</el-button>
          <el-button>下载模版</el-button>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">已选择：</div>
        <div class="from-content">
          <ul class='group'>
            <li><span>分组1</span><i>删除</i></li>
            <li><span>分组2</span><i>删除</i></li>
          </ul>
        </div>
      </div>
    </div>
    <transition name='fade'>
      <div class="modal-cover" v-if='modalShow' @click="closeModal">
        <div class='modal-box'>
          <h4>选择观众组 <span>×</span></h4>
          <div>
          <com-tabs :value.sync="tabValue">
            <com-tab label="分组" :index="1">分组</com-tab>
            <com-tab label="标签" :index="2">标签</com-tab>
          </com-tabs>
          <div class="right">
            <div class='top'>
              <span>分组:<i>123</i>个</span>
              <span><com-input :value.sync="searchTitle" placeholder="请输入关键字" :max-length="60" ></com-input>搜索</span>
            </div>
            <ol class='list'>
              <li><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose'>选择</em></li>
              <li><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose'>选择</em></li>
              <li><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose'>选择</em></li>
              <li><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose'>选择</em></li>
              <li><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose'>选择</em></li>
            </ol>
            <div class='btm clearfix'>
              <span>已选择:<i>啊啊啊</i><i>啊啊啊</i><i>啊啊啊</i></span>
              <el-button>确定</el-button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        modalShow: false,
        tabValue: 1,
        searchTitle: ''
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.className === 'modal-cover') {
          this.modalShow = false
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
@import '~assets/css/base';
.group {
  span {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  i {
    cursor: pointer;
  }
}

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
}

.modal-box {
  width: 700px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -350px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .top {
  }
  .btm {
    span {
      float: left;
    }
    button {
      float: right;
    }
    i {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ccc;
      margin: 0 3px;
    }
  }
}
.list {
  li {
    height: 50px;
    line-height: 50px;
    i.icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      border: 1px solid #ccc;
    }
    span {
      float: left;
    }
    em {
      float: right;
    }
  }
}
</style>
