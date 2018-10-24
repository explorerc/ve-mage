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
  import NavMenu from './nav-menu'

  export default {
    name: 'viewer',
    components: {VeTitle, VeCircle, NavMenu},
    data () {
      return {
        basicUserData: {}
      }
    },
    mounted () {
      console.log(dataService)
      this.initPage()
    },
    methods: {
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
