<template>
  <div class='limit-page '>
    <div>
      <label>选择观看条件</label>
      <div class="choose live-mager">
        <com-tabs :value="viewLimit">
          <com-tab :index="'NONE'">
            <el-radio v-model="viewLimit"
                      :label="'NONE'"
                      slot="label">无限制</el-radio>
            <com-none></com-none>
          </com-tab>
          <com-tab :index="'INVITATION'">
            <el-radio v-model="viewLimit"
                      :label="'INVITATION'"
                      slot="label">邀请观看</el-radio>
            <com-invited></com-invited>
          </com-tab>
          <com-tab :index="'APPOINT'">
            <el-radio v-model="viewLimit"
                      :label="'APPOINT'"
                      slot="label">报名观看</el-radio>
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
import activityService from 'src/api/activity-service'
export default {
  data () {
    return {
      viewLimit: 'NONE',
      tab: 0,
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getLimit()
  },
  components: {
    comNone,
    comInvited,
    comApply
  },
  methods: {
    getLimit () {
      this.$config().$get(activityService.GET_LIMIT, {
        activityId: this.activityId
      }).then((res) => {
        console.log(res)
        this.viewLimit = res.data.viewCondition
      })
      // prepareHttp.limit(this.id).then((res) => {
      //   if (res.code === 200) {
      //     console.log(res)
      //     this.viewLimit = res.data.viewCondition
      //   }
      // }).catch((res) => {
      //   this.$toast({
      //     content: res.msg,
      //     position: 'center'
      //   })
      // })
    }
  }

}
</script>

<style lang='scss'>
@import 'assets/css/variable.scss';
@import '../../css/live';
</style>
