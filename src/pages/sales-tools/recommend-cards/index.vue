<template>
  <div class='wrap-page'>
    <div class="page-title">
      <span class="title">推荐卡片</span>
    </div>
    <div class="content from-box">
      <template v-if="tableData.length>0">
          <div class="top-bar">
            <router-link :to="`/salesTools/recommendCardsDetails/${activityId}?cardId=new`"><el-button :disabled="tableData.length >=20" >新建卡片 {{tableData.length}}/20</el-button></router-link>
            <router-link :to="`/data/live/${activityId}`"><el-button>查看活动数据</el-button></router-link>
          </div>
          <el-table :data="tableData" stripe style="width: 100%" :class="'table-box'">
            <el-table-column  label="卡片图片" width="150">
              <template slot-scope="scope">
                <img :src="`${imgHost}/${scope.row.pic}`" :class="'img'">
              </template>
          </el-table-column>
          <el-table-column prop="title" label="卡片名称" width="250" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="desc" label="卡片描述" width="350" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="btn_link" label="按钮链接" width="350" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <router-link :to="`/salesTools/recommendCardsDetails/${activityId}?cardId=${scope.row.recommend_card_id}`">
                <el-button round>编辑</el-button>
              </router-link>
              <el-button round @click='del(scope.row.recommend_card_id,scope.row.title,scope.row.index)'>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template v-else>
        <div class="empty-box">
          <p>创建一张推荐卡片</p>
          <p>在直播中为观众推送卡片</p>
          <p>制作一张精美的自定义卡片，在直播中推送给观众，企业可以根据自己的需求定义卡片的内容。可以推送二维码、店铺链接、自媒体链接、图片等各种各样的内容</p>
          <router-link :to="`/salesTools/recommendCardsDetails/${activityId}?cardId=new`"><el-button>新建卡片</el-button></router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import cardService from 'src/api/salesCards-service.js'
  export default {
    data () {
      return {
        activityId: this.$route.params.id,
        imgHost: process.env.IMGHOST + '/',
        tableData: []
      }
    },
    mounted () {
      this.getList()
    },
    created () {

    },
    methods: {
      getList () {
        this.$get(cardService.GET_CARDS_LIST, {
          activity_id: this.activityId
        }).then((res) => {
          this.tableData = res.data.list
        })
      },
      del (id, name, idx) {
        this.$messageBox({
          header: '提示',
          width: '400px',
          content: `是否确认删除 ${name} 推荐卡片`,
          cancelText: '否',
          confirmText: '是',
          handleClick: (e) => {
            if (e.action === 'confirm') {
              this.delItem(id, idx)
            }
          }
        })
      },
      delItem (id, idx) {
        this.$get(cardService.POST_DELETE_CARD, {
          recommend_card_id: id
        }).then((res) => {
          this.$toast({
            content: '删除成功',
            position: 'center'
          })
          this.tableData.splice(idx, 1)
        })
      }
    }
  }
</script>

<style lang='scss' scope>
@import '~assets/css/mixin.scss';
@import './common.scss';
// .wrap-page {
//   border-radius: 5px;
//   overflow: hidden;
//   padding-bottom: 30px;
//   margin: 0 auto;
//   color: #222;
//   /* 设备宽度大于 1600 */
//   @media all and (min-width: 1600px) {
//     width: 1366px;
//   }
//   /* 设备宽度小于 1600px */
//   @media all and (max-width: 1600px) {
//     width: 1019px;
//     .content .handle-filter .selected {
//       max-width: 880px !important;
//     }
//   }
//   .page-title {
//     // border-bottom: 1px solid $color-bd;
//     line-height: 60px;
//     span.title {
//       display: inline-block;
//       font-size: 24px;
//     }
//   }
//   .content {
//     font-size: 14px;
//     width: 100%;
//     padding: 30px;
//     background: rgba(255, 255, 255, 1);
//     border-radius: 4px;
//     border: 1px solid rgba(226, 226, 226, 1);
//     .table-box {
//       margin-top: 20px;
//       .img {
//         width: 32px;
//         height: 32px;
//         border-radius: 500px;
//       }
//     }
//     .empty-box {
//     }
//   }
// }
</style>
