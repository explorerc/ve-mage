<template>
  <div id="goods-list">
    <header>
      <p>订单列表</p>
      <div class='btn-box'>
        <span>共{{tableData.length}}件商品</span>
        <com-button class="add-goods primary-button" round  @click="createGoods" >
          新建订单
        </com-button>
      </div>
    </header>
    <!--<div class="title">-->
      <!--<div class="item" v-for="item in titleList">-->
        <!--<div class="content" :class="{'titleActive':titleId===item.id}" @click="changeTitle(item.id)">-->
          <!--<span>{{item.name}}</span>-->
        <!--</div><span class="iconfont icon-icon-test" v-if="item.id!==0"></span>-->
      <!--</div>-->
    <!--</div>-->
    <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
      <el-tab-pane label="未付款订单" name="first">
        <div class="table-box">
          <table border="1">
            <thead>
            <tr>
              <th>订单id</th>
              <th>用户id</th>
              <th>商品id</th>
              <th>商品数量</th>
              <th>是否付款</th>
              <th>是否发货</th>
              <th>物流单号</th>
              <th>是否收获</th>
              <th style="width: 15%;min-width: 140px;">操作</th>
            </tr>
            </thead>
            <draggable element="tbody">
              <tr v-for="(row,ind) in tableData" :key="ind">
                <td>{{row.id<10?`0${row.id}`:row.id}}</td>
                <td>{{row.userId}}</td>
                <td>{{row.goodId}}</td>
                <td>{{row.number}}</td>
                <td>{{row.isPayed === 1 ? '已付款':'未付款'}}</td>
                <td>{{row.isSend === 1 ? '已发货':'未发货'}}</td>
                <td>{{row.logistics}}</td>
                <td>{{row.isRecieved === 1 ? '已收获':'未收货'}}</td>
                <td style="width: 15%;min-width: 140px;">
                  <div class='btn-box'>
                    <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                    <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
                    <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
                  </div>
                </td>
              </tr>
            </draggable>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未发货订单" name="second">
        <div class="table-box">
          <table border="1">
            <thead>
            <tr>
              <th>订单id</th>
              <th>用户id</th>
              <th>商品id</th>
              <th>商品数量</th>
              <th>是否付款</th>
              <th>是否发货</th>
              <th>物流单号</th>
              <th>是否收获</th>
              <th style="width: 15%;min-width: 140px;">操作</th>
            </tr>
            </thead>
            <draggable element="tbody">
              <tr v-for="(row,ind) in tableData" :key="ind">
                <td>{{row.id<10?`0${row.id}`:row.id}}</td>
                <td>{{row.userId}}</td>
                <td>{{row.goodId}}</td>
                <td>{{row.number}}</td>
                <td>{{row.isPayed === 1 ? '已付款':'未付款'}}</td>
                <td>{{row.isSend === 1 ? '已发货':'未发货'}}</td>
                <td>{{row.logistics}}</td>
                <td>{{row.isRecieved === 1 ? '已收获':'未收货'}}</td>
                <td style="width: 15%;min-width: 140px;">
                  <div class='btn-box'>
                    <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                    <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
                    <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
                  </div>
                </td>
              </tr>
            </draggable>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未收获订单" name="third">
        <div class="table-box">
          <table border="1">
            <thead>
            <tr>
              <th>订单id</th>
              <th>用户id</th>
              <th>商品id</th>
              <th>商品数量</th>
              <th>是否付款</th>
              <th>是否发货</th>
              <th>物流单号</th>
              <th>是否收获</th>
              <th style="width: 15%;min-width: 140px;">操作</th>
            </tr>
            </thead>
            <draggable element="tbody">
              <tr v-for="(row,ind) in tableData" :key="ind">
                <td>{{row.id<10?`0${row.id}`:row.id}}</td>
                <td>{{row.userId}}</td>
                <td>{{row.goodId}}</td>
                <td>{{row.number}}</td>
                <td>{{row.isPayed === 1 ? '已付款':'未付款'}}</td>
                <td>{{row.isSend === 1 ? '已发货':'未发货'}}</td>
                <td>{{row.logistics}}</td>
                <td>{{row.isRecieved === 1 ? '已收获':'未收货'}}</td>
                <td style="width: 15%;min-width: 140px;">
                  <div class='btn-box'>
                    <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                    <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
                    <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
                  </div>
                </td>
              </tr>
            </draggable>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部订单" name="fourth">
        <div class="table-box">
          <table border="1">
            <thead>
            <tr>
              <th>订单id</th>
              <th>用户id</th>
              <th>商品id</th>
              <th>商品数量</th>
              <th>是否付款</th>
              <th>是否发货</th>
              <th>物流单号</th>
              <th>是否收获</th>
              <th style="width: 15%;min-width: 140px;">操作</th>
            </tr>
            </thead>
            <draggable element="tbody">
              <tr v-for="(row,ind) in tableData" :key="ind">
                <td>{{row.id<10?`0${row.id}`:row.id}}</td>
                <td>{{row.userId}}</td>
                <td>{{row.goodId}}</td>
                <td>{{row.number}}</td>
                <td>{{row.isPayed === 1 ? '已付款':'未付款'}}</td>
                <td>{{row.isSend === 1 ? '已发货':'未发货'}}</td>
                <td>{{row.logistics}}</td>
                <td>{{row.isRecieved === 1 ? '已收获':'未收货'}}</td>
                <td style="width: 15%;min-width: 140px;">
                  <div class='btn-box'>
                    <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                    <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
                    <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
                  </div>
                </td>
              </tr>
            </draggable>
          </table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  // import goodsServer from 'src/api/salesGoods-service'
  import EventBus from 'src/utils/eventBus'

  export default {
    components: { draggable },
    data () {
      return {
        tableData: [
          { 'id': 1,
            'userId': 2,
            'goodId': 8,
            'isPayed': 1,
            'isSend': 0,
            'logistics': '',
            'isRecieved': 0,
            'number': 2
          }],
        isInit: false,
        timerShelf: null,
        isShowlive: null,
        isNoGoods: false,
        titleId: 1,
        titleList: [
          {id: 1, type: 'isPayed', name: '未付款订单'},
          {id: 2, type: 'isSend', name: '未发货订单'},
          {id: 3, type: 'isReceived', name: '未收获订单'},
          {id: 0, type: 'all', name: '全部订单'}
        ],
        activeName: 'first'
      }
    },
    created () {
      this.getList()
      // this.isShowLiveData()
      EventBus.$emit('breads', [{
        title: '订单管理'
      }, {
        title: '订单列表',
        url: `/goodMager/list/`
      }])
    },
    mounted () {
      this.getList()
    },
    watch: {
      tableData: {
        handler (val, oldVal) {
          if (val.length >= 1) {
            if (this.isInit) {
              // this.sortGoods()
            }
          }
        },
        deep: true
      }
    },
    methods: {
      getList () {
        // this.$get(goodsServer.GOODS_LISTS, {})
        //   .then(res => {
        //     if (res.status === 200) {
        //       this.tableData = res.data
        //       console.log(this.tableData)
        //       if (this.tableData.length < 1) {
        //         this.isNoGoods = true
        //       } else {
        //         this.isNoGoods = false
        //       }
        //     }
        //   })
        //   .catch(() => {
        //     this.tableData = []
        //   })
      },
      createGoods () {
        this.$router.push('/orderMager/edit/create')
      },
      handleEdit (id) {
        this.$router.push(`/orderMager/edit/${id}/update`)
      },
      changeTitle (id) {
        this.titleId = id
      },
      handleTabClick () {}
    }
  }
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';
@import '~assets/css/variable';

#goods-list {
  font-family: PingFangSC-Regular;
  /*padding: 0px 100px 34px;*/
  margin: 0 auto;
  @media all and (min-width: 1600px) {
    width: 1366px;
  }

  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  /deep/ {
    header {
      position: relative;
      overflow: hidden;
      text-align: right;
      line-height: 60px;
      margin-bottom: 7px;
      margin-top: 32px;
      p {
        float: left;
        height: 60px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(34, 34, 34, 1);
        line-height: 60px;
      }
      .default-button,
      .primary-button {
        transition: unset;
        height: 30px;
        line-height: 30px;
      }

      .btn-box {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        line-height: 30px;
        .com-button {
          padding: 0 20px;
        }
        .add-goods {
          /*width: 130px;*/
          padding: 0 20px;
          margin-left: 20px;
        }
      }
    }
    .table-box {
      /*margin-top: 22px;*/
      padding: 30px;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      background-color: white;
      min-height: 550px;
      table thead tr th,
      table tbody tr td {
        border-color: #ebeef5;
        font-size: 14px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        border: none;
        thead,
        tbody {
          height: 47px;
          line-height: 47px;
          th {
            border-top-color: transparent !important;
            background-color: #f6f6f6;
          }
          th,
          td {
            color: #222222;
            padding-left: 20px;
            font-weight: 400;
            border-right-color: transparent !important;
            border-left-color: transparent !important;
            .btn-box {
              position: relative;
            }
            &:nth-of-type(1) {
              width: 8%;
            }
            &:nth-of-type(2) {
              width: 8%;
            }
            &:nth-of-type(3) {
              width: 8%;
            }
            &:nth-of-type(4) {
              width: 10%;
            }
            &:nth-of-type(5) {
              width: 10%;
            }
            &:nth-of-type(6) {
              width: 15%;
            }
            &:nth-of-type(7) {
              width: 18%;
            }
            &:nth-of-type(9) {
              width: 25%;
              button {
                color: #222222;
                &:hover {
                  color: #4B5AFE;
                }
              }
            }
            .move-btn {
              span {
                position: absolute;
                top: 50%;
                /*left: 20px;*/
                transform: translate(-50%, -50%);
                display: inline-block;
                width: 20px;
                height: 20px;
                color: transparent;
                background: url('~assets/image/move-icon.svg') no-repeat center;
                background-size: contain;
                &:hover {
                  opacity: 0.8;
                }
              }
            }
            .cover_img {
              margin: 10px auto 10px 0;
              background: no-repeat center;
              background-size: contain;
              width: 60px;
              height: 60px;
              img {
                width: 60px;
                height: 60px;
              }
            }
          }
          td.dis-prices {
            color: #fc5659;
          }
          /*  tr {
              display: table;
              width: 100%;
              table-layout: fixed;
            }*/
          tr:hover {
            background-color: #f0f1fe;
          }
        }
        /* thead {
            width: calc(100% - 100px);
          }
          tbody {
            display: block;
            height: 550px;
            overflow-y: scroll;
          }*/
      }
    }

    .no-goods {
      text-align: center;
      background-color: #ffffff;
      border-radius: 4px;
      border: 1px solid #e2e2e2;
      min-height: 550px;
      img {
        width: 150px;
        height: 150px;
        margin: 130px auto 27px;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: rgba(85, 85, 85, 1);
        margin: 0 auto 30px;
      }
      button {
        margin-bottom: 90px;
        span {
          margin: auto 40px;
        }
      }
    }
  }
  .title {
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    .item {
      display: inline-block;
      width: 20%;
      position: relative;
      text-align: center;
      height: 50px;
      /*border: 1px solid red;*/
    }
    .content {
      display: inline-block;
      border: 2px solid $color-default;
      width: 100%;
      line-height: 50px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: $color-default-hover;
        border-color: $color-default-hover;
      }
      &.titleActive {
        background-color: $color-default-active;
        border-color: $color-default-active;
      }
    }
    .icon-icon-test {
      position: absolute;
      right: -25%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      color: #999;
    }
  }
}
</style>
