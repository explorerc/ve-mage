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
      <com-input :value.sync="outValue" placeholder="请输入公司名称" :max-length="50" ></com-input>
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
      id: 1,
      outValue: 'asd'
    }
  },
  methods: {
    submit () {
      alert(111)
    },
    testCom () {
      this.show = !this.show
    },
    testFun () {
      this.$toast({
        header: `Notification Title${this.id++}`,
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        close: () => {
          console.log('close')
        },
        closed: () => {
          console.log('closed')
        }
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
