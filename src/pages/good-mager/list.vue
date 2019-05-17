<template>
  <div id="goods-list">
    <header>
      <p>商品列表</p>
      <div class='btn-box'>
        <span>共{{total}}件商品</span>
        <com-button class="add-goods primary-button" round  @click="createGoods" >
          新建商品
        </com-button>
      </div>
    </header>
    <div class="table-box">
      <table border="1">
        <thead>
        <tr>
          <th>商品id</th>
          <th>封面图</th>
          <th>商品名称</th>
          <th>商品状态</th>
          <th>原始价格</th>
          <th>优惠价格</th>
          <th style="width: 15%;min-width: 140px;">操作</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(row,ind) in tableData" :key="ind">
            <td>{{row.id<10?`0${row.id}`:row.id}}</td>
            <td>
              <img class="cover_img" :src="row.imgUrl">
            </td>
            <td>{{row.name}}</td>
            <td>{{row.isBuy === 0 ? '已下架':'已上架'}}</td>
            <td>
              {{row.price}}
            </td>
            <td class="dis-prices">{{row.disprice?row.disprice:0}}</td>
            <td style="width: 15%;min-width: 140px;">
              <div class='btn-box'>
                <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                <el-button type="text" @click="handleShelf(row.id, row.isBuy)">{{row.isBuy === 0 ?'上架':'下架'}}
                </el-button>
                <el-button type="text" @click="handleDelete(row.id)">删除</el-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="page-pagination" v-if="total > searchParams.pageSize">
        <ve-pagination :total="total"
                       :pageSize="searchParams.pageSize"
                       :currentPage="currentPage"
                       @changePage="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
  import goodsServer from 'src/api/goods'
  import EventBus from 'src/utils/eventBus'
  import VePagination from 'src/components/ve-pagination'

  export default {
    components: { VePagination },
    data () {
      return {
        tableData: [
          { 'id': 1,
            'name': '都市轻食 沙拉菜组合 约700g 新鲜蔬菜',
            'kindId': 8,
            'price': 108,
            'disprice': null,
            'imgUrl': 'https://img12.360buyimg.com/n1/jfs/t4615/75/2562967019/401522/7ac201c3/58f0a6e2Ne90f3e12.jpg',
            'inventory': 12,
            'added': '0'
          }],
        isInit: false,
        timerShelf: null,
        isShowlive: null,
        isNoGoods: false,
        searchParams: {
          type: '',
          date: '',
          page: 1,
          pageSize: 10
        },
        total: null,
        currentPage: 1
      }
    },
    created () {
      EventBus.$emit('breads', [{
        title: '商品管理'
      }, {
        title: '商品列表',
        url: `/goodMager/list/`
      }])
    },
    mounted () {
      // this.getList()
      this.queryList()
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
      changePage (page) {
        this.searchParams.page = page
        this.queryList()
      },
      queryList () {
        this.$nextTick(() => {
          this.$get(goodsServer.GET_GOODS_PAGE, {
            ...this.searchParams
          }).then((res) => {
            if (res.code === 200) {
              this.total = res.data.total
              this.tableData = res.data.info
            }
          })
        })
      },
      createGoods () {
        this.$router.push('/goodMager/edit/create')
      },
      handleEdit (id) {
        this.$router.push(`/goodMager/edit/${id}/update`)
      },
      handleShelf (id, added) {
        if (added) {
          added = 0
        } else {
          added = 1
        }
        this.$get(goodsServer.GOODS_SHELF, {
          id: id,
          added: added
        }).then(res => {
          if (res.code === 200) {
            this.queryList()
          }
        })
      },
      handleDelete (id) {
        this.$get(goodsServer.GOODS_DELETE, {id: id}).then(res => {
          if (res.code === 200) {
            this.queryList()
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '~assets/css/mixin.scss';

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
              width: 26%;
            }
            &:nth-of-type(4) {
              width: 8%;
            }
            &:nth-of-type(5) {
              width: 10%;
            }
            &:nth-of-type(6) {
              width: 8%;
            }
            &:nth-of-type(7) {
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
                left: 140px;
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
}
</style>
