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
          <h2>选择观众组 <span>×</span></h2>
          <com-tabs :value.sync="tabValue">
            <com-tab label="用户管理" :index="1">用户管理的内容详情</com-tab>
            <com-tab label="定时任务补偿" :index="2">定时任务补偿的内容详情</com-tab>
          </com-tabs>
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
        tabValue: 1
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
  width: 400px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
}
</style>
