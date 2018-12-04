<template>
  <div class='wrap-page card-list-page'>
    <div class="page-title">
      <span class="title">推荐卡片</span>
      <com-back :url="`/liveMager/detail/${activityId}`" :class='"back-btn"'></com-back>
      <div class="top-bar clearfix" v-if="tableData.length>0">
        <el-button class='btn add-new primary-button' round :disabled="tableData.length >=20" ><router-link :to="tableData.length >=20 ? `` : `/salesTools/recommendCardsDetails/${activityId}?cardId=new`">新建卡片 {{tableData.length}}/20</router-link></el-button>
        <el-button class='btn more' round :disabled="true" v-if="status == 'PREPARE'">查看活动数据</el-button>
        <el-button class='btn more' round v-else><router-link :to="`/data/live/${activityId}#tools`">查看活动数据</router-link></el-button>
      </div>
    </div>
    <div class="content from-box">
      <template v-if="tableData.length>0">
          <el-table :data="tableData" stripe style="width: 100%" :class="'table-box'">
            <el-table-column  label="卡片图片" width="150">
              <template slot-scope="scope">
                <div :class="'img'" class="cov_img" :style="{backgroundImage:`url(${$imgHost}/${scope.row.pic})`}"></div>
              </template>
          </el-table-column>
          <el-table-column label="卡片名称"  show-overflow-tooltip>
            <template slot-scope="scope">
              <div class="cell-txt">{{scope.row.title}}</div>
            </template>
          </el-table-column>
          <el-table-column label="卡片描述"  show-overflow-tooltip>
            <template slot-scope="scope">
              <div class="cell-txt">{{scope.row.desc}}</div>
            </template>
          </el-table-column>
          <el-table-column label="按钮链接"  show-overflow-tooltip>
            <template slot-scope="scope">
              <div class="cell-txt">{{scope.row.btn_link}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <span class='edit'><router-link :to="`/salesTools/recommendCardsDetails/${activityId}?cardId=${scope.row.recommend_card_id}`">编辑</router-link></span><em class='blank'>|</em>
              <span class='delete' @click='del(scope.row.recommend_card_id,scope.row.title,scope.row.index)'>删除</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template v-if="tableData.length<=0 && notFirst">
        <div class="empty-box">
          <p class="img"></p>
          <p class='title'>推荐卡片</p>
          <p class='desc'>自定卡片内容进行引流<br>推送二维码、店铺链接、微信公众号、图片海报等内容</p>
          <router-link :to="`/salesTools/recommendCardsDetails/${activityId}?cardId=new`"><el-button class='primary-button'>创建卡片</el-button></router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import cardService from 'src/api/salesCards-service.js'
  import activityService from 'src/api/activity-service'
  import EventBus from 'src/utils/eventBus'
  export default {
    data () {
      return {
        activityId: this.$route.params.id,
        imgHost: process.env.IMGHOST + '/',
        tableData: [],
        notFirst: false,
        status: ''
      }
    },
    mounted () {
      this.getList()
    },
    created () {
      this.getInfo()
      this.tableData = []
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.$route.params.id}`
      }, {
        title: '推荐卡片',
        url: `/salesTools/recommendCards/${this.$route.params.id}`
      }])
    },
    methods: {
      getInfo () {
        this.$get(activityService.GET_WEBINAR_INFO, {
          id: this.activityId
        }).then((res) => {
          this.status = res.data.status
        })
      },
      getList () {
        this.$get(cardService.GET_CARDS_LIST, {
          activity_id: this.activityId
        }).then((res) => {
          this.notFirst = true
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

.back-btn {
  height: 34px !important;
  line-height: 34px !important;
  float: right;
  width: 120px !important;
}
.card-list-page {
  .el-table thead {
    height: 36px;
    line-height: 36px;
  }
  .top-bar {
    position: absolute;
    top: 50%;
    right: 134px;
    transform: translateY(-50%);
    .btn {
      padding: 0;
      width: 120px;
      height: 34px;
      line-height: 34px;
      float: right;
      &.add-new:hover span {
        color: $color-font;
      }
      &.more {
        margin-right: 10px;
        border-color: $color-blue;
        color: $color-blue;
        background-color: transparent;
        &:hover {
          color: #fff;
          border-color: #fff;
          background: $color-blue;
        }
      }
      &:disabled:hover {
        border-color: #4b5afe;
        color: #4b5afe;
        background-color: transparent;
      }
    }
  }
  .from-box {
    .edit:hover a {
      color: $color-blue;
    }
    .delete:hover {
      cursor: pointer;
      color: $color-error;
    }
    .blank {
      display: inline-block;
      width: 20px;
      text-align: center;
      position: relative;
      bottom: 1px;
    }
    .cell-txt {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      padding-right: 20px;
    }
    .el-table .cell {
      white-space: normal;
    }
    .cov_img {
      background: no-repeat center;
      background-size: cover;
    }
  }
}
</style>
