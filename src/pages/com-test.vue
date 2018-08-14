<template>
  <div>
   <div class="test-wrap">
      <button @click="testCom">test1</button>
    <button @click="testFun">test2</button>
   </div>
    <com-notification v-show="show" :header="header" :content="content">
        <div slot="header">我是header</div>
        <p>我是content</p>
    </com-notification>
    <div class="test-wrap">
      <com-input type="search" placeholder="请输入公司名称" :max-length="50"></com-input>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: false,
      header: 'Notification Title',
      content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      id: 1
    }
  },
  methods: {
    testCom () {
      this.show = !this.show
    },
    testFun () {
      this.$toast({
        header: `Notification Title${this.id++}`,
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.'
      })
    }
  }
}
</script>

<style>
.test-wrap {
  padding: 20px;
}
</style>
