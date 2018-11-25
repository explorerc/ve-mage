<!--用户总览页面-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
      <span class="title">用户总览</span>
    </div>
    <div class="content from-box">
      <ol class="clearfix">
        <li>
          <p class="v-data">
            {{info.total}}
          </p>
          <p class="v-title">
            用户总数
          </p>
        </li>
        <li>
          <p class="v-data">
            <a :href="'/userManage/userGroupsDetails/'+url.highQuality+'/1'">
              {{uersInfo[1].val}}</a>
          </p>
          <p class="v-title">
            优质用户 ({{uersInfo[1].centage}})
          </p>
        </li>
        <li>
          <p class="v-data">
            <a :href="'/userManage/userGroupsDetails/'+url.highValue+'/1'">
              {{uersInfo[2].val}}</a>
          </p>
          <p class="v-title">
            高价值用户 ({{uersInfo[2].centage}})
          </p>
        </li>
        <li>
          <p class="v-data">
            <a :href="'/userManage/userGroupsDetails/'+url.general+'/1'">
              {{uersInfo[3].val}}</a>
          </p>
          <p class="v-title">
            一般用户 ({{uersInfo[3].centage}})
          </p>
        </li>
        <li>
          <p class="v-data">
            <a :href="'/userManage/userGroupsDetails/'+url.potential+'/1'">
              {{uersInfo[4].val}}</a>
          </p>
          <p class="v-title">
            潜力用户 ({{uersInfo[4].centage}})
          </p>
        </li>
        <li>
          <p class="v-data">
            <a :href="'/userManage/userGroupsDetails/'+url.loss+'/1'">
              {{uersInfo[5].val}}</a>
          </p>
          <p class="v-title">
            流失用户 ({{uersInfo[5].centage}})
          </p>
        </li>
      </ol>
    </div>
    <div class="v-data-chart">
      <p class="v-title">
        各级别用户趋势图
      </p>
      <ul class="v-btns clearfix">
        <li @click="selectCount($event,'isActive3')"
            :class="{ active: isActive3 }">3场</li>
        <li @click="selectCount($event,'isActive7')"
            :class="{ active: isActive7 }">7场</li>
        <li @click="selectCount($event,'isActive10')"
            :class="{ active: isActive10 }">10场</li>
      </ul>
      <div class="chart-item"
           id="chart01"
           style="height: 380px;"></div>
    </div>
    <div class="v-data-list clearfix">
      <p class="v-title">
        数据详情
      </p>
      <ol>
        <li class="clearfix">
          <div class="v-activity-content v-name">
            活动名称
          </div>
          <div class="v-activity-content v-time">
            时间
          </div>
          <div class="v-activity-content v-type">
            观众总数
          </div>
          <div class="v-activity-content v-operation">
            优质用户
          </div>
          <div class="v-activity-content v-high">
            高价值用户
          </div>
          <div class="v-activity-content v-operation">
            潜力用户
          </div>
          <div class="v-activity-content v-operation">
            一般用户
          </div>
          <div class="v-activity-content v-type">
            流失用户
          </div>
        </li>
        <li class="clearfix"
            v-for="(itemData,index) in tableList"
            :key="itemData.id">
          <div class="v-activity-content v-name">
            {{itemData.title}}
          </div>
          <div class="v-activity-content v-time">
            {{times[index] ? times[index].toString().substring(0,10) : '-'}}
          </div>
          <div class="v-activity-content">
            {{itemData.val5}}
          </div>
          <div class="v-activity-content">
            {{itemData.val4}}
          </div>
          <div class="v-activity-content">
            {{itemData.val3}}
          </div>
          <div class="v-activity-content">
            {{itemData.val2}}
          </div>
          <div class="v-activity-content">
            {{itemData.val1}}
          </div>
          <div class="v-activity-content">
            {{itemData.val0}}
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import userService from 'src/api/user-service'
import dataService from 'src/api/data-service'
import { barPile } from 'src/utils/chart-tool'
import groupService from 'src/api/user_group'
export default {
  data () {
    return {
      info: {
      },
      datas: {}, // 各级别用户趋势图数据
      uersInfo: [{ val: 0, centage: '' }, { val: 0, centage: '' }, { val: 0, centage: '' }, { val: 0, centage: '' }, { val: 0, centage: '' }, { val: 0, centage: '' }],
      tableList: [], // 数据详情
      isActive3: true,
      isActive7: false,
      isActive10: false,
      url: {
        total: '',
        highQuality: '',
        highValue: '',
        general: '',
        potential: '',
        loss: ''
      },
      times: []
    }
  },
  beforeDestroy () {
    window.callbackResize = null
    if (this.effectChart) {
      this.effectChart.dispose()
    }
  },
  created () {
    this.$config({ handlers: true }).$get(userService.GET_CUSTOMER_OVERVIEW, {}).then((res) => {
      this.info = res.data
      let arr = this.info.userLevel
      for (let i = 0; i < arr.length; i++) {
        this.uersInfo[i].val = arr[i]
        if (this.info.total > 0) {
          this.uersInfo[i].centage = (arr[i] / this.info.total) === 0 ? 0 : ((arr[i] / this.info.total) * 100).toFixed(2) + '%'
        } else {
          this.uersInfo[i].centage = 0
        }
      }
    }).catch(err => {
      this.$messageBox({
        header: '提示',
        content: err.msg,
        confirmText: '确定',
        handleClick: (e) => {
          if (e.action === 'cancel') {
          } else if (e.action === 'confirm') {
          }
        }
      })
    })
    window.callbackResize = () => {
      // 重新绘制
      this.resizeRenderChart()
    }
    this.getData(3)
    this.getGroudList()
  },
  methods: {
    resizeRenderChart () {
      if (this.effectChart) {
        this.effectChart.resize()
      }
    },
    getData (count) {
      this.$get(dataService.GET_ACTIVITY_RECENT, {
        count: count
      }).then((res) => {
        this.datas = res.data
        for (let i = 0; i < this.datas.list.length; i++) {
          this.times[i] = this.datas.list[i].name
          this.datas.list[i].name = this.datas.names[i].length > 10 ? this.datas.names[i].substring(0, 10) : this.datas.names[i]
        }
        var echartsData = []
        let index = 0
        for (let i = this.datas.list.length - 1; i >= 0; i--) {
          echartsData[index] = this.datas.list[i]
          index++
        }
        this.tableList.splice(0, this.tableList.length)
        // this.datas = res.data
        /* 绘制堆叠图 */
        this.effectChart = barPile('chart01', {
          legendData: this.datas.types,
          list: echartsData
        }, {
          left: 130,
          bottom: 70,
          top: 30,
          right: 50
        }, {
          left: 'center',
          top: '350px'
        }, '人')
        this.datas.list.forEach((element, index) => {
          let template = {}
          template.title = this.datas.names[index]
          template.startTime = element.name.toString().substring(0, 10)
          template.val0 = element.data[0]
          template.val1 = element.data[1]
          template.val2 = element.data[2]
          template.val3 = element.data[3]
          template.val4 = element.data[4]
          template.val5 = element.data[5]
          this.tableList.push(template)
        })
      })
    },
    getGroudList () {
      this.$post(groupService.GROUPS_LIST, {
        page: 1
      }).then(res => {
        let dataList = res.data.list
        for (let i = 0; i < dataList.length; i++) {
          if (dataList[i].title === '优质用户') {
            this.url.highQuality = dataList[i].group_id
          } else if (dataList[i].title === '流失用户') {
            this.url.loss = dataList[i].group_id
          } else if (dataList[i].title === '一般用户') {
            this.url.general = dataList[i].group_id
          } else if (dataList[i].title === '高价值用户') {
            this.url.highValue = dataList[i].group_id
          } else if (dataList[i].title === '潜力用户') {
            this.url.potential = dataList[i].group_id
          }
        }
      })
    },
    selectCount (ele, btn) {
      switch (btn) {
        case 'isActive3':
          this.isActive3 = true
          this.isActive7 = false
          this.isActive10 = false
          this.getData(3)
          break
        case 'isActive7':
          this.isActive3 = false
          this.isActive7 = true
          this.isActive10 = false
          this.getData(7)
          break
        case 'isActive10':
          this.isActive3 = false
          this.isActive7 = false
          this.isActive10 = true
          this.getData(10)
          break
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.pond-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    padding: 39px 30px;
    ol {
      width: 100%;
      height: 100%;
      li {
        width: 16.6%;
        height: 100%;
        float: left;
        .v-data {
          font-size: 24px;
          a {
            &:hover {
              color: #4b5afe;
            }
          }
        }
        .v-title {
          color: #888;
        }
      }
    }
  }
  .v-data-chart {
    width: 100%;
    position: relative;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding: 30px 32px;
    margin-top: 20px;
    .v-btns {
      display: block;
      position: absolute;
      top: 28px;
      right: 30px;
      background-color: #fff;
      z-index: 1;
      li {
        width: 80px;
        height: 30px;
        line-height: 28px;
        border: 1px solid #bbb;
        float: left;
        text-align: center;
        color: #888;
        &.active {
          color: #222;
          background-color: #ffd021;
          border-color: #ffd021;
        }
        &:hover {
          color: #222;
        }
        &:not(:first-child) {
          border-left: none;
        }
      }
      :first-child {
        border-radius: 50px 0 0 50px;
      }
      :last-child {
        border-radius: 0 50px 50px 0;
      }
    }
  }
  .v-data-list {
    width: 100%;
    position: relative;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding: 30px 32px;
    margin-top: 20px;
    .v-title {
      font-size: 20px;
      margin-bottom: 20px;
    }
    ol {
      width: 100%;
      li {
        width: 100%;
        height: 52px;
        line-height: 52px;
        background-color: #fff;
        border-bottom: 1px solid #e2e2e2;
        &:first-child {
          height: 61px;
          line-height: 61px;
          background-color: #f5f5f5;
          &:hover {
            background-color: #f5f5f5;
          }
        }
        &:hover {
          background-color: #f0f1fe;
        }
        .v-activity-content {
          float: left;
          text-align: left;
          padding: 0 20px;
          word-break: break-all;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 11%;
        }
        .v-name {
          width: 18%;
        }
        .v-time {
          width: 14%;
        }
        .v-high {
          width: 13%;
        }
      }
    }
  }
}
</style>
