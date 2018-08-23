<template>
  <div class='limit-page '>
    <div>
      <label>选择观看条件</label>
      <div class="choose live-mager">
        <com-tabs :value="radio">
          <com-tab :index="1">
            <el-radio v-model="radio" :label="1" slot="label">无限制</el-radio>
            <com-none></com-none>
          </com-tab>
          <com-tab :index="2">
            <el-radio v-model="radio" :label="2" slot="label">邀请观看</el-radio>
            <com-invited></com-invited>
          </com-tab>
          <com-tab :index="3">
            <el-radio v-model="radio" :label="3" slot="label">报名观看</el-radio>
            <com-apply></com-apply>
          </com-tab>
        </com-tabs>
      </div>
      <el-button>保存</el-button>
    </div>
  </div>
</template>

<script>
  import comNone from './com-none'
  import comInvited from './com-invited'
  import comApply from './com-apply'
  export default {
    data () {
      return {
        radio: 1,
        tab: 0
      }
    },
    components: {
      comNone,
      comInvited,
      comApply
    }

  }
</script>

<style lang='scss'>
@import '~assets/css/variable';
@import '../../css/live';
</style>
