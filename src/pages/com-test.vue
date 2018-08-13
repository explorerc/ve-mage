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
</style>
