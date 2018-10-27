<template>
  <div class="data-box spread">
    <p class="title">基础数据</p>
    <div class="item-container clearfix">
      <div class="item-box fl">
        <div class="box fl" style="width: 100%;">
          <div class="item-title">
            <ve-title title="观众总数"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('all')">{{basicUserData.viewerCount}}</div>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 50%;">
          <div class="item-title">
            <ve-title title="老用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('old')">{{basicUserData.oldUser}}</div>
        </div>
        <div class="box fl" style="width: 50%;">
          <div class="item-title">
            <ve-title title="新用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('new')">{{basicUserData.newUser}}</div>
        </div>
      </div>
      <div class="item-box fl">
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title title="优质用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('high')">{{basicUserData.highUser}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="180px" title="高价值用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('vip')">{{basicUserData.vipUser}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="180px" title="一般用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('ord')">{{basicUserData.ordinaryUser}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="180px" title="潜在用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('potent')">{{basicUserData.potentialUser}}</div>
        </div>
        <div class="box fl" style="width: 20%;">
          <div class="item-title">
            <ve-title width="180px" title="流失用户"></ve-title>
          </div>
          <div class="item-mid data-link" @click="goPage('loss')">{{basicUserData.lossUser}}</div>
        </div>
      </div>
    </div>
    <div class="chart-box">
      <p class="title">观众比例</p>
      <div class="chart-container">
        <div class="chart-box" style="width: 50%;">
          <p class="title">新老观众占比</p>
          <div class="chart-item" id="chart01" style="height: 360px;"></div>
        </div>
        <div class="chart-box" style="width: 50%;">
          <p class="title">各级别用户占比</p>
          <div class="chart-item" id="chart02" style="height: 360px;"></div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 50%;">
          <p class="title">设备占比</p>
          <div class="chart-item" id="chart03" style="height: 360px;"></div>
        </div>
        <div class="chart-box" style="width: 50%;">
          <p class="title">操作系统占比</p>
          <div class="chart-item" id="chart04" style="height: 360px;"></div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 50%;">
          <p class="title">浏览器占比</p>
          <div class="chart-item" id="chart05" style="height: 360px;"></div>
        </div>
        <div class="chart-box" style="width: 50%;">
          <p class="title">性别占比</p>
          <div class="chart-item" id="chart06" style="height: 360px;"></div>
        </div>
      </div>
      <div class="chart-container">
        <div class="chart-box" style="width: 100%;">
          <p class="title">地域</p>
          <div class="chart-item" id="chart07" style="height: 500px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VeTitle from './ve-title'
  import VeCircle from 'src/components/ve-circle'
  import dataService from 'src/api/data-service'
  import { pie, barRadius } from 'src/utils/chart-tool'
  import NavMenu from './nav-menu'

  export default {
    name: 'viewer',
    components: { VeTitle, VeCircle, NavMenu },
    data () {
      return {
        basicUserData: {}
      }
    },
    created () {
      this.activityId = this.$route.params.id
      this.initPage()
    },
    methods: {
      goPage (type) {
        this.$router.push(`/data/viewerList/${this.$route.params.id}?type=${type}`)
      },
      async initPage () {
        // 地域
        this.areaCountChart()
        // 基础数据
        let basicUserData = await this.basicCount()
        this.basicUserData = basicUserData
        // 观众比例
        this.viewerRate()
      },
      viewerRate () {
        let res = {
          code: 200,
          msg: null,
          data: {
            viewer: [
              { type: 0, 'name': '新观众', value: 10 },
              { type: 1, 'name': '老观众', value: 20 }
            ],
            device: [
              { type: 0, 'name': '电脑端', value: 10 },
              { type: 1, 'name': '移动端', value: 20 }
            ],
            system: [
              { type: 0, 'name': 'Windows', value: 10 },
              { type: 1, 'name': 'Mac', value: 20 },
              { type: 1, 'name': 'IOS', value: 20 },
              { type: 1, 'name': 'Android', value: 20 },
              { type: 1, 'name': 'Other', value: 20 }
            ],
            browser: [
              { type: 0, 'name': 'Safari电脑版', value: 10 },
              { type: 1, 'name': 'Chrome电脑版', value: 20 },
              { type: 1, 'name': 'UC移动版', value: 20 },
              { type: 1, 'name': '微信', value: 20 },
              { type: 1, 'name': 'QQ', value: 20 },
              { type: 1, 'name': 'Other', value: 20 }
            ],
            gender: [
              { type: 0, 'name': '男士', value: 10 },
              { type: 1, 'name': '女士', value: 20 },
              { type: 1, 'name': '未知', value: 20 }
            ]
          }
        }
        this.$nextTick(() => {
          // 新老观众占比
          pie('chart01', res.data.viewer)
          // 各级别用户占比
          pie('chart02', [
            { name: '观众总数', value: this.basicUserData.viewerCount },
            { name: '老用户', value: this.basicUserData.oldUser },
            { name: '新用户', value: this.basicUserData.newUser },
            { name: '优质用户', value: this.basicUserData.highUser },
            { name: '高价值用户', value: this.basicUserData.vipUser },
            { name: '一般用户', value: this.basicUserData.ordinaryUser },
            { name: '潜在用户', value: this.basicUserData.potentialUser },
            { name: '流失用户', value: this.basicUserData.lossUser }
          ])
          // 设备占比
          pie('chart03', res.data.device)
          // 操作系统占比
          pie('chart04', res.data.system)
          // 浏览器占比
          pie('chart05', res.data.browser)
          // 性别占比
          pie('chart06', res.data.gender)
        })
      },
      basicCount () {
        let res = {
          code: 200,
          msg: null,
          data: {
            'viewerCount': 12221,
            'oldUser': 5305,
            'newUser': 2561,
            'highUser': 2561,
            'vipUser': 2561,
            'ordinaryUser': 2561,
            'potentialUser': 2561,
            'lossUser': 2561
          }
        }
        return res.data
      },
      areaCountChart () {
        // let res = {
        //   code: 200,
        //   msg: null,
        //   data: {
        //     list: [
        //       {'name': '北京', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '天津', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '河北', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '山西', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '内蒙古', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '辽宁', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '吉林', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '黑龙江', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '上海', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '江苏', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '浙江', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '安徽', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '福建', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '江西', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '山东', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '河南', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '湖北', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '湖南', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '广东', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '广西', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '海南', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '重庆', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '四川', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '贵州', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '云南', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '西藏', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '陕西', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '甘肃', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '海南', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '青海', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '宁夏', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '新疆', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '香港', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '澳门', 'value': Math.round(Math.random() * 900) + 100},
        //       {'name': '台湾', 'value': Math.round(Math.random() * 900) + 100}
        //     ]
        //   }
        // }
        this.$get(dataService.GET_VIEWER_REGION, {
          activityId: this.activityId
        }).then((res) => {
          if (!res.data.list) return
          this.$nextTick(() => {
            barRadius('chart07', res.data.list)
          })
        })
      }
    }
  }
</script>
<style lang="scss" scoped src="./css/data.scss"></style>
<style lang="scss" scoped>
  .spread {
    .item-container {
      .item-box {
        height: 94px;
      }
    }
  }
</style>
