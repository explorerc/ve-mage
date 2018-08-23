<template>
  <div class="clearfix v-div">
    123
  </div>
</template>
<script>
  // import account from 'src/api/account-manage'
  // import identifyingcodeManage from 'src/api/identifyingcode-manage'
  export default {
    data () {
      return {
        tabValue: 1
      }
    },
    components: {
    },
    created () {
    },
    mounted () {
    },
    watch: {
      userPhone: function () {
        console.log(1)
      }
    },
    methods: {
      setPassword () {
        console.log(1)
      }
    }
  }
</script>
<style lang="scss">
@import '~assets/css/base';
</style>

