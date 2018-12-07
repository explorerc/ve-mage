<template>
  <div class="asset-box">
    <div class="asset-header">
      <div class="asset-header-item">
        <span>所购服务</span>
        <span>{{billInfo.serviceName}}</span>
        <span>有效期 {{billInfo.serviceStartTime}} ~ {{billInfo.serviceExpireTime}}</span>
      </div>
      <div class="asset-header-item">
        <span>可用金额（元）
          <div class="btn-box">
            <!-- <span class="add-money fr" @click="addMoney()">充值</span> -->
            <el-button round class='default-button mini' @click="addMoney()">充值</el-button>
            <!-- <el-button round class='default-button mini' @click="showWithdraw = true">提现</el-button> -->
          </div>
        </span>
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
    <!--充值框-->
    <message-box v-if="addMoneyShow"
                 class="add-money-msg"
                 width="530px"
                 type="promt"
                 header="充值"
                 confirmText="下一步"
                 @handleClick="payMoney">
      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row input-box">
            <div class="from-title">当前余额</div>
            <span style="line-height: 20px">{{billInfo.balance}}</span>元
          </div>
          <div class="from-row input-box">
            <div class="from-title">充值金额</div>
            <div class="from-content">
              <div class="black-box">
                <com-input style="width: 334px"
                           type="float"
                           v-model="amount"
                           placeholder="20～20000"
                           :value.sync="amount"
                           :errorTips="amountError"
                ></com-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </message-box>
    <!--支付框-->
    <message-box v-if="payMoneyShow"
                 class="pay-money-msg"
                 width="530px"
                 type="promt"
                 @handleClick="paidMoney"
                 header="充值">
      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row input-box">
            <div class="from-title  modify-box"><span>充值金额</span></div>
            <div class="from-content  modify-box" v-if="modifyMoneyShow">
              <span>{{amount}}</span>元
              <span class="modifiyMoney-btn" @click="modifyMoney">修改金额</span>
            </div>
            <div class="from-content" v-else>
              <div class="black-box">
                <com-input style="width: 250px"
                           type="float"
                           :value.sync="amount"
                           :errorTips="amountError"
                ></com-input>
                <span class="save-money" @click="saveMoney">保存</span>
                <span class="concel-money" @click="cancelMoney">取消</span>
              </div>
            </div>
          </div>
          <div class="from-row input-box">
            <div class="from-title">扫码充值</div>
            <div class="from-content">
              <div class="black-box">
                <div class="title">
                  <button class="payway alipay" @click="alipayChange" ref="alipay" :disabled="alDisabled">支付宝</button>
                  <button class="payway weixin" @click="wxpayChange" ref="wxpay" :disabled="wxDisabled">微信</button>
                </div>
                <div class="payImg">
                  <img :src='codeSrc' alt="付款二维码">
                  <p>
                    请打开{{payway}}扫二维码
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </message-box>
    <!--充值成功框-->
    <message-box v-if="successMoneyShow"
                 class="paid-money-msg"
                 width="530px"
                 type="promt"
                 @handleClick="finishMoney"
                 header="充值">
      <div class="message-box-content">
        <div class="from-box">
          <div class="from-row">
            <div class="from-title">充值成功</div>
            <span>当前余额</span>
            <span style="line-height: 20px">{{parseFloat(amount) + parseFloat(billInfo.balance)}}</span>元
          </div>
          <div class="from-row">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </message-box>
    <!-- 提现组件 -->
    <com-withdraw v-if='showWithdraw' @withdrawClose='withdrawClose'></com-withdraw>
  </div>
</template>

<script>
  import assetService from 'src/api/asset-service'
  import VePagination from 'src/components/ve-pagination'
  import { mapState } from 'vuex'
  import ChatService from '../../components/chat/ChatService'
  import ChatConfig from 'src/api/chat-config'
  import comWithdraw from './components/com-withdraw'
  export default {
    name: 'asset-list',
    components: {VePagination, comWithdraw},
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
        },
        addMoneyShow: false, // 充值框隐藏
        payMoneyShow: false, // 支付框隐藏
        successMoneyShow: false, // 充值成功框隐藏
        amount: '', // 充值金额
        oldAmount: '', // 在支付框时，记录修改前的值，取消时将值还原为前面的值
        modifyMoneyShow: true, // 展示修改金额的按钮
        payway: '支付宝', // 默认支付宝支付
        payType: 'ALIPAY',
        amountError: '', // 金额错误提醒
        billNo: '', // 订单编号
        codeSrc: '', // 二维码的src
        alDisabled: false, // 支付宝按钮不禁用
        wxDisabled: false, // 微信按钮不禁用
        showWithdraw: false
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
    computed: {
      ...mapState('login', {
        accountInfo: state => state.accountInfo
      })
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
        let paramStr = `?type=${this.searchParams.type}&date=${this.searchParams.date}`
        const url = process.env.API_PATH + assetService.GET_ASSET_LIST_EXPORT + paramStr
        window.open(encodeURI(encodeURI(url)))
      },
      // 充值
      addMoney () {
        this.addMoneyShow = true // 充值框显示
      },
      // 支付
      async payMoney (e) {
        if (e.action === 'confirm') {
          if (this.checkAmount()) {
            this.addMoneyShow = false
            await this.queryBillNo()
            if (this.billNo !== '') {
              this.payMoneyShow = true // 支付框显示
            }
          }
        } else {
          this.addMoneyShow = false
        }
      },
      // 控制支付中修改金额框的显示
      modifyMoney () {
        this.oldAmount = this.amount
        this.modifyMoneyShow = !this.modifyMoneyShow
      },
      // 支付中的保存
      saveMoney () {
        this.modifyMoneyShow = true
        if (this.amount !== this.oldAmount) {
          this.queryBillNo()
        }
      },
      // 支付中的取消
      cancelMoney () {
        this.amount = this.oldAmount
        this.modifyMoneyShow = true
      },
      // 检查输入的金额
      checkAmount () {
        const newAmount = this.amount
        if (newAmount === '' || newAmount < 0 || newAmount > 20000) {
          this.amountError = '请输入20～20000之间的数字'
          return false
        } else {
          this.amountError = ''
          return true
        }
      },
      // 获取二维码
      async queryCode () {
        await this.$get(assetService.GET_ASSET_LIST_CODE, {
          billNo: this.billNo,
          payType: this.payType
        }).then((res) => {
          if (res.code === 200) {
            this.codeSrc = '//aliqr.e.vhall.com/qr.png?t=' + res.data.qrcode
          }
        })
        this.initMsgServe()
      },
      async initMsgServe () {
        // const loginInfo = JSON.parse(sessionStorage.getItem('accountInfo'))
        const roomInfo = await this.$get(assetService.GET_REG_SDK_INFO, {
          thirdUserId: this.accountInfo.businessUserId,
          channel: this.accountInfo.channelRoom
        }).then(res => {
          return res.data
        })
        ChatService.OBJ.init({
          accountId: roomInfo.accountId,
          token: roomInfo.token,
          appId: roomInfo.appId,
          channelId: roomInfo.channelRoom
        })
        /* 监听支付消息1 */
        ChatService.OBJ.regHandler(ChatConfig.charge, (msg) => {
          console.log('---------支付消息---------')
          console.log(msg)
          this.payMoneyShow = false
          this.successMoneyShow = true
        })
      },
      // 获取订单号
      async queryBillNo () {
        await this.$get(assetService.GET_ASSET_LIST_BILLNO, {
          amount: this.amount
        }).then(res => {
          if (res.code === 200) {
            this.billNo = res.data.billNo
            return true
          }
        })
        this.queryCode()
      },
      // 支付方式切换
      async alipayChange () {
        this.payType = 'ALIPAY'
        this.payway = '支付宝'
        this.queryCode()
        this.$refs.alipay.style.backgroundColor = '#FFD021'
        this.$refs.wxpay.style.backgroundColor = '#ffffff'
        this.wxDisabled = true
        await setTimeout(() => {
          this.wxDisabled = false
        }, 500)
      },
      wxpayChange (e) {
        this.payType = 'WXPAY'
        this.payway = '微信'
        this.queryCode()
        this.$refs.alipay.style.backgroundColor = '#fff'
        this.$refs.wxpay.style.backgroundColor = '#FFD021'
        this.alDisabled = true
        setTimeout(() => {
          this.alDisabled = false
        }, 500)
      },
      paidMoney (e) {
        if (e.action === 'confirm') {
          this.payMoneyShow = false
          this.successMoneyShow = true
        } else {
          this.payMoneyShow = false
        }
      },
      finishMoney () {
        this.successMoneyShow = false
      }
      // withdrawClose (res) {
      //   debugger
      // }
    },
    watch: {
      amount: {
        handler () {
          if (this.stout) return
          this.stout = setTimeout(() => {
            clearTimeout(this.stout)
            this.stout = null
            if (!this.checkAmount()) {
              return true
            }
          }, 200)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import 'assets/css/mixin.scss';

.asset-box {
  margin: 30px;
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
      position: relative;
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
        .add-money {
          display: inline-block;
          width: 70px;
          margin: -6px 40px 0 0 !important;
          border: 1px solid #4b5afe;
          text-align: center;
          height: 30px;
          border-radius: 20px;
          line-height: 30px;
          font-size: 14px;
          color: #4b5afe;
          cursor: pointer;
          &:hover {
            background-color: $color-default-hover;
            border: 1px solid $color-default-hover;
          }
          &:active {
            background-color: $color-default-active;
            border: 1px solid $color-default-hover;
          }
        }
      }
      .btn-box {
        position: absolute;
        top: 20px;
        right: 20px;
        button {
          padding: 0;
          width: 80px;
          height: 30px;
          line-height: 30px;
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
  /*三个盒子的统一样式*/
  .message-box-content {
    position: relative;
    font-size: 14px;
    .tip-title {
      display: block;
      margin-top: 10px;
      font-size: 16px;
      padding: 16px 0 22px 0;
      border-bottom: solid 1px $color-bd;
    }
    .from-box {
      .input-box {
        padding: 15px 10px 5px 0 !important;
        .from-title {
          padding-right: 30px !important;
        }
        .black-box {
          margin-top: -10px;
          .com-input {
            width: 100%;
          }
        }
      }
      .from-row {
        position: relative;
        display: flex;
        padding: 12px;
        .from-title {
          width: 120px;
          text-align: right;
          padding-right: 20px;
          color: #555;
        }
        .error /deep/ {
          .el-input__inner {
            border: 1px solid $color-red;
          }

          .default-button {
            border: 1px solid $color-red;
          }
        }
        .from-content {
          position: relative;
          flex: 1;
          .error-msg {
            display: block;
            color: $color-red;
            margin-left: 10px;
            text-align: left;
          }
          .input-box {
            width: 400px;
          }
          .from-msg-tip {
            position: absolute;
            top: -2px;
            width: 100%;
            left: 200px;
          }
          .com-input {
            margin-right: 6px;
          }
          .modifiyMoney-btn {
            margin-left: 30px;
            cursor: pointer;
            color: #4b5afe;
          }
        }
      }
    }
    .red-bag-msgbox {
      .ve-message-box .ve-message-box__btns {
        text-align: center;
      }
    }
  }
  /* paymoney 盒子的样式*/
  .pay-money-msg {
    .message-box-content {
      .from-box {
        .input-box {
          .from-title {
            margin-left: 60px;
          }
        }
        .from-row {
          .from-content {
            &.modify-box {
              height: 30px;
            }
            .title {
              font-size: 0;
              margin-top: 10px;
              .payway {
                display: inline-block;
                width: 70px;
                height: 30px;
                font-size: 14px;
                border: 1px solid #e2e2e2;
                cursor: pointer;
                &.alipay {
                  border-right: 0px;
                  background-color: #ffd021;
                }
              }
            }
            .black-box {
              .com-input {
                width: 60% !important;
              }
              .save-money,
              .concel-money {
                cursor: pointer;
                margin-left: 10px;
                color: #4b5afe;
              }
            }
            .payImg {
              height: 167px;
              margin-top: 8px;
              img {
                width: 140px;
                height: 140px;
                display: inline-block;
                margin-bottom: 4px;
              }
            }
          }
          .com-input {
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>
