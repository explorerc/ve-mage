<template>
  <div>
    <button @click="testCom">test1</button>
    <button @click="testFun">test2</button>
    <com-notification v-show="show" :header="header" :content="content">
    </com-notification>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: true,
      header: 'Notification Title',
      content: 'I will never close automatically. I will be close automatically. I will never close automatically.'
    }
  },
  methods: {
    testCom () {
      this.show = !this.show
    },
    testFun () {
      this.$toast({
        autoClose: 10000,
        header: 'Notification Title',
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.'
      })
    }
  }
}
</script>

<style>
</style>
