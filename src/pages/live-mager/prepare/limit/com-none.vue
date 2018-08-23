<template>
  <div class="none-page">
     <el-checkbox v-model="checked">允许活动开始前预约</el-checkbox>
     <p>预约后，可以提醒用户及时参加活动</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      checked: true
    }
  }
}
</script>

<style>
</style>
