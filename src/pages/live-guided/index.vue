<template>
  <div class="clearfix v-div">
    <p class="v-title">
      直播引导页
    </p>
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
.v-div {
  padding: 30px;
  .v-title {
    font-size: 18px;
    width: 100%;
    border-bottom: 1px solid #666;
  }
}
</style>

