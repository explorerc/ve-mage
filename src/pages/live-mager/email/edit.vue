<template>
  <div class="live-mager">
    <div class="live-title">
      <span>邮件处理</span>
      <el-button class="live-btn fr" type="primary" plain @click="this.$router.go(-1)">返回</el-button>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import editStepOne from './edit-step-one'
  import editStepTwo from './edit-step-two'

  export default {
    name: 'edit',
    data () {
      return {
        activeId: '',
        emailId: '',
        currentComponent: editStepOne
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
      this.activeId = queryId
      this.emailId = this.$route.query.email
    },
    methods: {
      stepPage () {
        this.currentComponent = editStepTwo
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
