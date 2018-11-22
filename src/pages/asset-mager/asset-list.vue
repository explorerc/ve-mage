<template>
  <div class="asset-box">
    <p class="v-asset-title">
      资产管理
    </p>
    <div class="asset-header">
      <div class="asset-header-item">
        <span>所购服务</span>
        <span>{{billInfo.serviceName}}</span>
        <span>有效期 {{billInfo.serviceStartTime}} ~ {{billInfo.serviceExpireTime}}</span>
      </div>
      <div class="asset-header-item">
        <span>可用金额（元）</span>
        <img width="93" height="58" src="../../assets/image/qianbao@2x.png">
        <span class="mid">{{billInfo.balance}}</span>
      </div>
      <div class="asset-header-item">
        <span>今日支出（元）</span>
        <img class="zhichu-img" width="78" height="47" src="../../assets/image/zhichu@2x.png">
        <span class="mid-zhichu">{{billInfo.payToday}}</span>
      </div>
    </div>
    <div class="asset-list-box">
      <div class="asset-list">
        <div class="search-asset">
          <span class="asset-title">账户流水</span>
          <button class="default-button export-btn fr" @click="exportTable">导出</button>
          <div class="search-item flm fr">
            <span class="search-title">时间</span>
            <el-date-picker
              v-model="searchParams.date"
              @change="queryList"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="search-item fr">
            <span class="search-title">渠道来源</span>
            <el-select v-model="searchParams.type"
                       @change="queryList"
                       placeholder="渠道来源">
              <el-option v-for="item in liuTypeList"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="asset-list-table">
        <el-table :data="viewerList" style="width: 100%">
          <el-table-column prop="billNumber" label="流水ID"></el-table-column>
          <el-table-column label="流水类型">
            <template slot-scope="scope">
              {{scope.row.type|fmtType}}
            </template>
          </el-table-column>
          <el-table-column prop="amount" label="金额"></el-table-column>
          <el-table-column prop="createdAt" label="时间"></el-table-column>
          <el-table-column label="状态" width="160">
            <template slot-scope="scope">
              <span :class="{status:true,success:scope.row.status==='SUCCESS'}">{{scope.row.status|fmtStatus}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="page-pagination" v-if="total>searchParams.pageSize">
          <ve-pagination :total="total"
                         :pageSize="searchParams.pageSize"
                         @changePage="changePage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import assetService from 'src/api/asset-service'
import VePagination from 'src/components/ve-pagination'

export default {
  name: 'asset-list',
  components: { VePagination },
  data () {
    return {
      total: 0,
      liuTypeList: [
        { value: '', label: '全部' },
        { value: 'RECHARGE', label: '账户充值' },
        { value: 'RED_PACK', label: '红包消费' },
        { value: 'RE_RED_PACK', label: '红包返回' }
      ],
      viewerList: [],
      billInfo: {
        balance: 0, // 余额
        serviceStartTime: '', // 服务开始时间
        serviceExpireTime: '', // 服务结束时间
        serviceName: '', // 服务名称
        payToday: '' // 今日支出
      },
      searchParams: {
        type: '',
        date: '',
        page: 1,
        pageSize: 10
      }
    }
  },
  filters: {
    fmtStatus (value) {
      return value === 'SUCCESS' ? '成功' : '失败'
    },
    fmtType (value) {
      const obj = {
        'RECHARGE': '账户充值',
        'RED_PACK': '红包消费',
        'RE_RED_PACK': '红包返回'
      }
      return obj[value]
    }
  },
  created () {
    this.queryAccountInfo()
    this.queryList()
  },
  methods: {
    changePage (page) {
      this.searchParams.page = page
      this.queryList()
    },
    queryAccountInfo () {
      this.$get(assetService.GET_ASSET_INFO, {}).then((res) => {
        if (res.code === 200) {
          this.billInfo = res.data
        }
      })
    },
    queryList () {
      this.$nextTick(() => {
        this.$get(assetService.GET_ASSET_LIST, {
          ...this.searchParams
        }).then((res) => {
          if (res.code === 200) {
            this.total = res.data.total
            this.viewerList = res.data.list
          }
        })
      })
    },
    exportTable () {
      let paramStr = `?type=${this.searchParams.type}&date=${this.searchParams.date || ''}`
      const url = process.env.API_PATH + assetService.GET_ASSET_LIST_EXPORT + paramStr
      window.open(encodeURI(encodeURI(url)))
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/css/mixin.scss';

.asset-box {
  margin: 0 30px 30px;
  .v-asset-title {
    font-size: 24px;
    line-height: 60px;
  }
  .asset-header {
    font-size: 0;
    height: 170px;
    margin-top: 20px;
    img {
      display: block;
      margin: 10px auto;
    }
    .asset-header-item {
      display: inline-block;
      width: calc((100% - 40px) / 3);
      height: 100%;
      border-radius: 3px;
      background-color: #fff;
      vertical-align: middle;
      border: solid 1px $color-bd;
      &:nth-child(2) {
        margin: 0 20px;
      }
      span {
        display: block;
        width: 100%;
        font-size: 16px;
        text-align: center;
        vertical-align: middle;
        &:nth-child(1) {
          margin-top: 20px;
          font-size: 14px;
          text-align: left;
          margin-left: 20px;
          color: #888;
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin-top: 20px;
        }
        &:nth-child(3) {
          font-size: 14px;
          color: #888;
        }
        &.mid {
          font-size: 24px;
          margin-top: 0;
          font-weight: bold;
          color: $color-red;
        }
        &.mid-zhichu {
          font-size: 24px;
          margin-top: 3px;
          font-weight: bold;
        }
        .zhichu-img {
          margin: 16px auto;
        }
      }
    }
  }
  .asset-list-box {
    margin-top: 20px;
    border: solid 1px $color-bd;
    border-radius: 3px;
    overflow: hidden;
  }
  .asset-list {
    padding: 20px;
    background-color: #fff;
    .search-asset {
      margin-top: 30px;
      .asset-title {
        font-size: 20px;
      }
      .search-item {
        display: inline-block;
        font-size: 14px;
        .search-title {
          margin-right: 10px;
        }
      }
      .flm {
        margin: 0 20px;
      }
      .export-btn {
        margin-top: 2px;
        height: 36px;
        line-height: 36px;
      }
      .status {
        color: #FC5659;
      }
      .success {
        color: #43D2C2;
      }
    }
  }
  .asset-list-table {
    padding: 20px;
    background-color: #fff;
    .page-pagination {
      margin-top: 30px;
      text-align: right;
    }
    .status {
      color: #fc5659;
    }
    .success {
      color: #43d2c2;
    }
  }
}
</style>
