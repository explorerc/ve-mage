<template>
  <div id="goods-list">
    <header>
      <p>商品推荐</p>
      <div v-if="tableData.length>=1">
        <el-button @click="check" round>查看活动数据</el-button>
        <el-button class="add-goods primary-button" @click="createGoods" :disabled="tableData.length>=20" round>
          新建商品（{{tableData.length}} / 20）
        </el-button>
      </div>

    </header>
    <div class="table-box" v-if="tableData.length>=1">
      <table border="1">
        <thead>
        <tr>
          <th>序号</th>
          <th>封面图</th>
          <th>商品名称</th>
          <th>原始价格</th>
          <th>优惠价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <draggable element="tbody" v-model="tableData" :options="{handle:'.item'}">
          <tr v-for="(row,ind) in tableData" :key="ind">
            <td>{{row.number<10?`0${row.number}`:row.number}}</td>
            <td>
              <img :src="row.avatar ? `${$imgHost}/${row.avatar}` :require('assets/image/avatar@2x.png')" alt="">
            </td>
            <td>{{row.title}}</td>
            <td>
              <del>{{row.price}}</del>
            </td>
            <td class="dis-prices">{{row.preferential}}</td>
            <td>
              <div>
                <el-button size="mini" type="text" @click="handleEdit(row,ind)">编辑</el-button>
                <el-button size="mini" type="text" @click="handleShelf(row,ind)">{{row.added === '0' ?'下架':'上架'}}
                </el-button>
                <el-button class="item" size="mini" type="text">移动</el-button>
                <el-button size="mini" type="text" @click="handleDelete(row,ind)">删除</el-button>
              </div>
            </td>
          </tr>
        </draggable>
      </table>
    </div>
    <div class="no-goods" v-else>
      <img :src="require('assets/image/avatar@2x.png')" alt="">
      <p>暂时没有商品哦~</p>
      <p>全新直播购物模式，通过实时直播带动粉丝经济，<br>你甚至可以联合品牌商一起策划品牌内容，提升观众信任感</p>
      <el-button class="add-goods primary-button" @click="createGoods" round>添加商品</el-button>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import goodsServer from 'src/api/salesGoods-service'

  export default {
    components: { draggable },
    created () {
      this.getList()
    },
    data () {
      return {
        activity_id: this.$route.params.activity_id,
        tableData: []
      }
    },
    watch: {
      tableData: {
        handler (val, oldVal) {
          if (val.length >= 1) {
            this.sortGoods()
          }
        },
        deep: true
      }
    },
    methods: {
      getList () {
        this.$post(goodsServer.GOODS_LISTS, { activity_id: this.activity_id })
          .then(res => {
            console.log(res)
            this.tableData = res.data
          })
          .catch(() => {
            this.tableData = []
          })
      },
      // 创建
      createGoods () {
        this.$router.push(`/salesTools/recommendGoodsInfo/${this.activity_id}/create`)
      },
      sortGoods () {
        /*  let timer
          if (timer) return
          timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            console.log(this.tableData, 'tableDatatableDatatableData') */
        let goods = this.tableData.map((ite, ind) => {
          // return ite.goods_ids
          return ite.goods_id
        })
        this.$post(goodsServer.SORT_GOODS, { activity_id: this.activity_id, goods_ids: goods.join() })
        // }, 500)
      },
      check () {
        this.$router.push(`/liveMager/detail/${this.activity_id}`)
      },
      // 上下架
      handleShelf (row) {
        this.$post(goodsServer.GOODS_SHELF, { goods_id: row.goods_id, type: row.added === '0' ? '1' : '0' })
          .then(res => {
            setTimeout(() => {
              this.getList()
            }, 500)
            this.$toast({
              content: '操作成功!',
              position: 'center'
            })
          })
      },
      // 编辑
      handleEdit (row, index) {
        this.$router.push(`/salesTools/recommendGoodsInfo/${row.goods_id}/update`)
      },
      handleDelete (row, index) {
        console.log(row)
        this.$messageBox({
          header: '删除该商品',
          type: 'error',
          width: '450px',
          content: '删除后观看页将不再显示该商品',
          cancelText: '取消', // 不传递cancelText将只有一个确定按钮
          confirmText: '删除',
          handleClick: (e) => {
            if (e.action === 'cancel') {
              this.$toast({
                content: '已取消删除',
                position: 'center'
              })
            } else if (e.action === 'confirm') {
              this.$post(goodsServer.GOODS_DELETE, { goods_id: row.goods_id })
                .then(res => {
                  this.tableData.splice(index, 1)
                  setTimeout(() => {
                    this.getList()
                  }, 1000)
                  this.$toast({
                    content: '删除成功!',
                    position: 'center'
                  })
                })
            }
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
    padding: 40px 100px;
    /deep/ {
      header {
        overflow: hidden;
        text-align: right;
        p {
          float: left;
          height: 26px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(34, 34, 34, 1);
          line-height: 26px;
        }
      }
      .table-box {
        margin-top: 22px;
        padding: 30px;
        border: 1px dashed #cccccc;
        background-color: white;
        table thead tr th, table tbody tr td {
          border-color: #ebeef5;
          font-size: 14px
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border: none;
          thead, tbody {
            height: 47px;
            line-height: 47px;
            th, td {
              color: #222222;
              padding-left: 10px;
              font-weight: 400;
              &:nth-of-type(1) {
                width: 5%;
              }
              &:nth-of-type(2) {
                width: 10%;
              }
              &:nth-of-type(3) {
                width: 20%;
              }
              &:nth-of-type(4), &:nth-of-type(5) {
                width: 15%;
              }
              &:nth-of-type(6) {
                width: 25%;
                span {
                  color: #2878FF;
                }
              }
              img {
                width: 60px;
                height: 60px;
                margin: 10px auto 10px 0;
                vertical-align: middle;
              }
            }
            td.dis-prices {
              color: #FC5659;
            }
            tr:hover {
              background-color: #f5f7fa;
            }
          }
        }
      }

      .no-goods {
        text-align: center;
        img {
          width: 180px;
          height: 180px;
          margin: 84px auto 40px auto;
        }
        p:nth-of-type(1) {
          font-size: 16px;
          font-weight: 400;
          color: rgba(34, 34, 34, 1);
          line-height: 22px;
        }
        p:nth-of-type(2) {
          font-size: 14px;
          font-weight: 400;
          color: rgba(85, 85, 85, 1);
          margin: 10px auto 30px auto;
        }
      }
    }
  }
</style>
