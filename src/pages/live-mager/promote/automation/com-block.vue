<template>
  <div class="item">
    <img src="asd/asdasd.png">
    <div class="txt">
      <span>[ {{type}}内容 ]</span>
      <p>{{content}}</p>
      <em>自动发送</em>
    </div>
    <div class="btn-group">
      <el-button type="small">测试发送</el-button>
      <el-button type="small">
        <router-link :to="{ name:routerName,query:{'noticeId':noticeId,'timing':timing} }">编辑</router-link>
      </el-button>
      <el-button type="small">删除</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'com-block',
    data () {
      return {
        type: '',
        content: '',
        routerName: '',
        noticeId: '',
        timing: ''
      }
    },
    created () {

    },
    props: {
      type: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      routerName: {
        type: String,
        default: ''
      },
      noticeId: {
        type: Number,
        default: 0
      },
      timing: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style>
</style>
