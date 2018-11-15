<template>
  <div class="asset-box">
    <div class="asset-header">
      <div class="asset-header-item">
        <span>所购服务</span>
        <span>微吼知客旗舰版</span>
        <span>有效期 2018.10.31~2019.10.30</span>
      </div>
      <div class="asset-header-item">
        <span>可用金额（元）</span>
        <span class="mid">888.5</span>
      </div>
      <div class="asset-header-item">
        <span>今日支出（元）</span>
        <span class="mid">253.5</span>
      </div>
    </div>
    <div class="asset-list">
      <p class="asset-title">账户流水</p>
      <div class="search-asset">
        <div class="search-item">
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
        <div class="search-item flm">
          <span class="search-title">时间</span>
          <el-date-picker
            v-model="searchParams.date"
            @change="queryList"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <button class="default-button export-btn fr">导出</button>
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
            {{scope.row.status|fmtStatus}}
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
</template>

<script>
  import assetService from 'src/api/asset-service'
  import VePagination from 'src/components/ve-pagination'

  export default {
    name: 'asset-list',
    components: {VePagination},
    data () {
      return {
        total: 0,
        liuTypeList: [
          {value: '', label: '全部'},
          {value: 'RECHARGE', label: '账户充值'},
          {value: 'RED_PACK', label: '红包消费'},
          {value: 'RE_RED_PACK', label: '红包返回'}
        ],
        viewerList: [],
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
      this.queryList()
    },
    methods: {
      changePage (page) {
        this.searchParams.page = page
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "assets/css/mixin.scss";

  .asset-box {
    margin: 30px;
    .asset-header {
      font-size: 0;
      height: 160px;
      margin-top: 20px;
      .asset-header-item {
        display: inline-block;
        width: calc((100% - 40px) / 3);
        height: 100%;
        border-radius: 3px;
        background-color: #fff;
        vertical-align: middle;
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
            margin-top: 30px;
            font-size: 20px;
          }
          &:nth-child(2), &:nth-child(3) {
            margin-top: 20px;
          }
          &.mid {
            font-size: 24px;
            margin-top: 40px;
            font-weight: bold;
          }
        }
      }
    }
    .asset-list {
      margin-top: 20px;
      padding: 20px;
      background-color: #fff;
      .asset-title {
        font-size: 20px;
      }
      .search-asset {
        margin-top: 30px;
        .search-item {
          display: inline-block;
          .search-title {
            margin-right: 10px;
          }
        }
        .flm {
          margin: 0 20px;
        }
        .export-btn {
          margin-top: 10px;
          height: 30px;
          line-height: 30px;
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
    }
  }
</style>
