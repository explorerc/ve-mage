<template>
  <div class="live-mager">
    <div class="live-title">
      <span class="title">邮件处理</span>
      <button class="primary-button fr" @click="goBack">返回</button>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <component @changeView="changeView" :is="currentComponent"></component>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import editStepOne from './edit-step-one'
  import editStepTwo from './edit-step-two'
  const componentArry = [editStepOne, editStepTwo]

  export default {
    name: 'edit',
    data () {
      return {
        currentComponent: componentArry[0]
      }
    },
    created () {
      const queryId = this.$route.params.id
      if (!queryId) {
        this.$router.go(-1)
      }
    },
    methods: {
      /**
       * 动态切换到指定组件
       * @param idx
       */
      changeView (idx) {
        this.currentComponent = componentArry[idx]
      },
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped src="../css/live.scss">
</style>
