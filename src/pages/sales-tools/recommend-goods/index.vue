<template>
  <div id="goods-list">
    <header>
      <p>商品推荐</p>
      <com-back :url="`/liveMager/detail/${activity_id}`"></com-back>
      <div v-if="tableData.length>=1" class='btn-box'>
        <com-button @click="check" class="default-button" round :disabled="!isShowlive" style='line-height:29px;'>查看数据</com-button>
        <com-button class="add-goods primary-button" @click="createGoods" :disabled="tableData.length>=20" round>
          新建商品（{{tableData.length}} / 20）
        </com-button>
      </div>
    </header>
    <div class="table-box" v-if="tableData.length>=1">
      <table border="1">
        <thead>
        <tr>
          <th>序号</th>
          <th>封面图</th>
          <th>商品名称</th>
          <th>商品状态</th>
          <th>原始价格</th>
          <th>优惠价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <draggable element="tbody" v-model="tableData" :options="{handle:'.item'}">
          <tr v-for="(row,ind) in tableData" :key="ind">
            <td>{{ind<10?`0${ind+1}`:ind+1}}</td>
            <td>
              <div class="cover_img" :style="{backgroundImage:`url(${$imgHost}/${row.image[0].name})`}">
                <!---->
                <!-- <img
                   :src="row.image ? `${$imgHost}/${row.image[0].name}?x-oss-process=image/resize,m_pad,h_60,w_60` :require('assets/image/avatar@2x.png' "
                   alt="">-->
              </div>
            </td>
            <td>{{row.title}}</td>
            <td>{{row.added === '1' ? '已上架':'已下架'}}</td>
            <td>
              <del v-show="row.preferential !== '0.00'">{{row.price === '0.00'?'免费':'￥'+row.price}}</del>
              <span v-show="row.preferential === '0.00'">{{row.price === '0.00'?'免费':'￥'+row.price}}</span>
            </td>
            <td class="dis-prices">{{row.price === '0.00'?'免费':'￥'+row.preferential}}</td>
            <td>
              <div class='btn-box'>
                <el-button size="mini" type="text" @click="handleEdit(row,ind)">编辑</el-button>
                <el-button size="mini" type="text" @click="handleShelf(row,ind)">{{row.added === '0' ?'上架':'下架'}}
                </el-button>
                <el-button size="mini" type="text" @click="handleDelete(row,ind)">删除</el-button>
                <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
              </div>
            </td>
          </tr>
        </draggable>
      </table>
    </div>
    <div class="no-goods" v-else>
      <img :src="require('assets/image/not-goodlist.png')" alt="">
      <p>全新直播购物模式，通过实时直播带动粉丝经济，<br>你甚至可以联合品牌商一起策划品牌内容，提升观众信任感</p>
      <el-button class="add-goods primary-button" @click="createGoods" round>添加商品</el-button>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import goodsServer from 'src/api/salesGoods-service'
  import EventBus from 'src/utils/eventBus'

  export default {
    components: { draggable },
    created () {
      this.getList()
      this.isShowLiveData()
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.$route.params.activity_id}`
      }, {
        title: '商品列表',
        url: `/salesTools/recommendGoodsList/${this.$route.params.activity_id}`
      }])
    },
    data () {
      return {
        activity_id: this.$route.params.activity_id,
        tableData: [],
        timerShelf: null,
        isShowlive: null
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
            res.data.forEach((ite, ind) => {
              ite.image = JSON.parse(ite.image)
            })
            this.tableData = res.data
            console.log(this.tableData)
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
        let goods = this.tableData.map((ite, ind) => {
          return ite.goods_id
        })
        this.$post(goodsServer.SORT_GOODS, { activity_id: this.activity_id, goods_ids: goods.join() })
      },
      check () {
        if (this.isShowlive) {
          this.$router.push(`/data/live/${this.activity_id}#tools`)
        }
      },
      isShowLiveData () {
        this.$get(goodsServer.GET_DETAILS, { activityId: this.activity_id })
          .then(res => {
            this.isShowlive = res.data.data.time
          })
      },
      // 上下架
      handleShelf (row) {
        if (this.timerShelf) return
        this.timerShelf = setTimeout(() => {
          clearTimeout(this.timerShelf)
          this.timerShelf = null
          this.$post(goodsServer.GOODS_SHELF, { goods_id: row.goods_id, type: row.added === '0' ? '1' : '0' })
            .then(res => {
              setTimeout(() => {
                this.getList()
              }, 500)
              this.$toast({
                content: '操作成功!'
              })
            })
        }, 1000)
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
              /*  this.$toast({
                  content: '已取消删除',
                  position: 'center'
                }) */
            } else if (e.action === 'confirm') {
              this.$post(goodsServer.GOODS_DELETE, { goods_id: row.goods_id })
                .then(res => {
                  this.tableData.splice(index, 1)
                  setTimeout(() => {
                    this.getList()
                  }, 1000)
                  this.$toast({
                    content: '删除成功!'
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
  padding: 0px 100px 34px;
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
        right: 80px;
        .com-button {
          padding: 0 20px;
        }
        .add-goods {
          /*width: 130px;*/
          padding-left: 20px;
          margin-left: 6px;
          padding-right: 10px;
        }

      }
    }
    .table-box {
      /*margin-top: 22px;*/
      padding: 30px;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      background-color: white;
      min-height: 520px;
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
            padding-left: 10px;
            font-weight: 400;
            border-right-color: transparent !important;
            border-left-color: transparent !important;
            .btn-box {
              position: relative;
            }
            &:nth-of-type(1) {
              width: 7%;
            }
            &:nth-of-type(2) {
              width: 10%;
            }
            &:nth-of-type(3) {
              width: 20%;
            }
            &:nth-of-type(4),
            &:nth-of-type(5) {
              width: 10%;
            }
            &:nth-of-type(6) {
              width: 15%;
            }
            &:nth-of-type(7) {
              width: 25%;
              button {
                color: #222222;
                &:hover {
                  color: #2878ff;
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
            background-color: #f5f7fa;
          }
          tr:last-child {
            td {
              border: none;
            }
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
      img {
        width: 150px;
        height: 150px;
        margin: 84px auto 27px auto;
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
