<template>
  <div class='limit-page'>
    <div>
      <label>选择观看条件</label>
      <div class="choose">
        <el-radio v-model="radio" label="1" @click='radio=0'>无限制</el-radio>
        <el-radio v-model="radio" label="2" @click='radio=1'>邀请观看</el-radio>
        <el-radio v-model="radio" label="3" @click='radio=2'>报名观看</el-radio>
      </div>
      <transition name='slide'>
        <none v-if="radio == '1' "></none>
        <invited v-if="radio == '2'"></invited>
        <apply v-if="radio == '3' "></apply>
      </transition>
    </div>
  </div>
</template>

<script>
  import none from './none'
  import invited from './invited'
  import apply from './apply'
  export default {
    data () {
      return {
        radio: '1',
        tab: 0
      }
    },
    components: {
      none,
      invited,
      apply
    }

  }
</script>

<style>
</style>
