<!-- 活动详情页面-->
<template>
  <div>
    <div class="desc">
      <div class="left">
        <p>{{title}} <span class='state' :class='stateClass'>{{state}}</span> </p>
        <p>开播时间:{{startTime}}</p>
        <p>互动标签:<span class='tag' v-for='item in tagList'>{{item}}</span></p>
      </div>
      <div class="right">
        <span>活动官网</span>
        <span>直播观看页</span>
        <span>发布/下线活动</span>
        <span>进入直播间</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        id: '',
        tagList: [],
        startTime: '',
        state: '',
        stateClass: ''
      }
    },
    props: {

    },
    created () {
      this.title = '2018GIMIC互联网大会'
      this.id = '123456'
      this.tagList = ['科技', '发布会', '标签三']
      this.startTime = '2018-07-09 09:30:00'
      this.state = 1
      switch (this.state) {
        case (1):
          this.state = '直播'
          this.stateClass = 'live'
          break
        case (2):
          this.state = '回放'
          this.stateClass = 'record'
          break
        case (3):
          this.state = '结束'
          this.stateClass = 'ended'
          break
        case (4):
          this.state = '预约'
          this.stateClass = 'preview'
          break
      }
    },
    methods: {

    }

  }
</script>

<style lang='scss' scoped>
.state {
  padding: 3px;
  border: 1px solid #ccc;
  display: inline-block;
}

.live {
  color: red;
  border-color: red;
}

.preview {
  color: blue;
  border-color: blue;
}

.record {
  color: green;
  border-color: green;
}

.tag {
  padding: 3px;
  border: 1px solid #ccc;
  display: inline-block;
  margin: 0 3px;
}
.right {
  span {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}
</style>
