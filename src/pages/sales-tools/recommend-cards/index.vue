<template>
  <div class='wrap-page'>
    <div class="page-title">
        <span class="title" >推荐卡片</span>
    </div>
    <div class="content from-box">
      <template v-if="tableData.length>0">
        <div class="top-bar">
          <el-button :disabled="tableData.length >=20">新建卡片 {{tableData.length}}/20</el-button>
          <el-button>查看活动数据</el-button>
        </div>
        <el-table :data="tableData" stripe style="width: 100%" :class="'table-box'">
          <el-table-column  label="卡片图片" width="150">
            <template slot-scope="scope">
              <img :src="scope.row.pic" :class="'img'">
            </template>
          </el-table-column>
          <el-table-column prop="name" label="卡片名称" width="250" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="desc" label="卡片描述" width="350" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="link" label="按钮链接" width="350" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button round>编辑</el-button>
              <el-button round @click='del(scope.row.id,scope.row.name)'>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template v-else>
        <div class="empty-box">
          <p>创建一张推荐卡片</p>
          <p>在直播中为观众推送卡片</p>
          <p>制作一张精美的自定义卡片，在直播中推送给观众，企业可以根据自己的需求定义卡片的内容。可以推送二维码、店铺链接、自媒体链接、图片等各种各样的内容</p>
          <el-button >新建卡片</el-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          pic: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '安监局安静安静啊',
          desc: '阿克苏角度看拉萨的',
          link: 'www.baidu.com'
        },
        {
          id: 2,
          pic: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '安监局安静安静啊',
          desc: '阿克苏角度看拉萨的',
          link: 'www.baidu.com'
        },
        {
          id: 3,
          pic: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '安监局安静安静啊',
          desc: '阿克苏角度看拉萨的',
          link: 'www.baidu.com'
        },
        {
          id: 4,
          pic: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '安监局安静安静啊',
          desc: '阿克苏角度看拉萨的',
          link: 'www.baidu.com'
        },
        {
          id: 5,
          pic: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
          name: '安监局安静安静啊',
          desc: '阿克苏角度看拉萨的',
          link: 'www.baidu.com'
        }
      ]
    }
  },
  created () {

  },
  methods: {
    getList () {

    },
    del (id, name) {
      this.$messageBox({
        header: '提示',
        width: '400px',
        content: `是否确认删除 ${name} 推荐卡片`,
        cancelText: '否',
        confirmText: '是',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            this.delItem(id)
          }
        }
      })
    },
    delItem (id) {

    }
  }
}
</script>

<style lang='scss' scope>
@import '~assets/css/mixin.scss';
.wrap-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .content .handle-filter .selected {
      max-width: 880px !important;
    }
  }
  .page-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content {
    font-size: 14px;
    width: 100%;
    padding: 30px;
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    border: 1px solid rgba(226, 226, 226, 1);
    .table-box {
      margin-top: 20px;
      .img {
        width: 32px;
        height: 32px;
        border-radius: 500px;
      }
    }
    .empty-box {
    }
  }
}
</style>
