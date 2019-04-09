<template>
    <div class="user-list"></div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'user-list',
    data () {
      return {}
    },
    created () {
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '粉丝管理',
        url: `/userMager/list/`
      }])
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">

</style>