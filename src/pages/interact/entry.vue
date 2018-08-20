<template>
  <div>
    <router-link to="/test">aaaaa</router-link>
    <div id="entry" class="container">
      {{serverUrl}}<br>{{buildEnv}}
    </div>
    <!-- <comps-example/> -->
  </div>
</template>

<script>
  import testService from 'src/api/test'
  import compsExample from 'src/pages/comps-example' // 自定义组件使用例子

  export default {
    name: 'entry',
    data () {
      return {
        serverUrl: process.env.API_PATH,
        buildEnv: process.env.BUILD_ENV
      }
    },
    components: {
      compsExample
    },
    created () {
      testService
        .getCode({
          phone: 18513848725,
          captcha:
            '42TuGAgliNLndI-loStQLtehOfn_0tJa1TACs0-nk8_YXE.-CnEgbjVJdzc-VzF2cXAyM8MStg.Gn6N1hUZ5Qtoo2-PbvrU.rBpxt4N2peG0D_H0iLlyDf4zPZGXIghQLW-ing7zCJTw04PyyVPSYOpbSph2FIrrwbSi9-vomWAl2ShN0rteUNmTZd-s8GKaYICbKmL9nSBZslMScSnUUN0O5pjYBDdorUy.Ymu0EIVkTc1freLaVjDahN.MnFddXfHrTBhhqhQrpznwgWNiyqvt5NoFsbHUakOurLc.Db_ffjoT2GJZhENRxBSqINPJO8HQXCLfMhfr6TsK1SkZ4y.N6ztkdGwM_y8lB-_d479Pp0lZM.1lQ0pkSzPQsYu2mZTBbC0DkK8N1-wjHgKxdOHhZ5f9RaC9o-gTiJOVAQXqFTl6rL8J5XBUiplzt5AAFMfxgAVAeU_dVsYfqFF_oMu5Dm8JayN7PCjXmcU8XhwadYJqkD.sdeKPNSa3'
        })
        .then(res => {
          console.log(res)
        })
    }
  }
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
}
</style>
