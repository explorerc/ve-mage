<template>
  <div class="content" @click.stop='closeAlltool'>
    <div class="from-row">
      <div class="from-title">微信通知：</div>
      <div class="from-content">
        <el-switch v-model="switchVal" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
      </div>
    </div>
    <div class="form-row">
      <el-button><router-link to="/liveMager/promote/wechat/create">新建</router-link></el-button>
    <div class="content">
      <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop='title'
        label="任务标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="tpl"
        label="任务模版"
        width="200">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发送时间"
        width="200">
      </el-table-column>
      <el-table-column
        label="接收人"
        width="200"
        prop='receiver'>
      </el-table-column>
      <el-table-column
        label="状态"
        width="200">
        <template slot-scope="scope">
          <span v-if="scope.row.status === 1">等待发送</span>
          <span v-if="scope.row.status === 2">已发送</span>
          <span v-if="scope.row.status === 3">草稿</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <div class="tool-box">
            <span> <router-link :to="{ name:'wechatEdit', query:{ id : scope.row.id} }">详情</router-link></span>
            <span class='more' @click="showMore(scope.$index,tableData)">更多</span>
            <div class="tool" v-if='scope.row.toolShow'>
              <span @click="switchAutosend(scope.$index,tableData)">{{scope.row.autoSend === true ? '开启' : '关闭'}}自动发送</span>
              <span @click="del(scope.$index,tableData)">删除</span>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
    </div>
    </div>
  </div>
</template>

<script>
import createHttp from 'src/api/activity-manger'
export default {
  data () {
    return {
      activityId: this.$route.params.id,
      tableData: [
        {
          id: '1',
          title: '标题标题标题',
          tpl: '活动邀请',
          time: '2018-08-23 11:00:00',
          receiver: '观众分组(40)',
          status: 1,
          autoSend: false,
          toolShow: false
        },
        {
          id: '2',
          title: '标题标222',
          tpl: '活动推荐',
          time: '2018-05-21 11:23:11',
          receiver: '观众分组(40)',
          status: 2,
          autoSend: true,
          toolShow: false
        },
        {
          id: '3',
          title: 'asd',
          tpl: '活动推荐',
          time: '2018-05-21 11:23:11',
          receiver: '观众分组(40)',
          status: 3,
          autoSend: false,
          toolShow: false
        }
      ],
      switchVal: true
    }
  },
  created () {
    let queryData = {
      activityId: this.activityId,
      page: 1,
      pageSize: 10
    }
    createHttp.queryWechatlist(queryData).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  },
  methods: {
    switchAutosend (idx, data) {
      data[idx]['autoSend'] === false ? data[idx]['autoSend'] = true : data[idx]['autoSend'] = false
    },
    del (idx, data) {
      data.splice(idx, 1)
    },
    showMore (idx, data) {
      this.tableData.forEach(item => {
        item.toolShow = false
      })
      data[idx]['toolShow'] === false ? data[idx]['toolShow'] = true : data[idx]['toolShow'] = false
    },
    closeAlltool (e) {
      console.log(e.target.className)
      if (e.target.className.search('more') === -1 || e.target.className.search('more') === -1) {
        console.log('in')
        this.tableData.forEach(item => {
          item.toolShow = false
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.from-row {
  display: flex;
  padding: 10px;
  .from-title {
    width: 180px;
    text-align: right;
    padding-right: 20px;
    .star {
      position: relative;
      top: 3px;
      color: $color-error;
      padding-right: 5px;
    }
  }
  .from-content {
    flex: 1;
    .input-box {
      width: 400px;
    }
  }
}
.tool-box {
  position: relative;
  & > span {
    padding: 10px;
    cursor: pointer;
  }
}
.tool {
  // position: absolute;
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  // top: 100%;
  background: #fff;
  span {
    border-top: 1px solid #ccc;
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    &:first-child {
      border: none;
    }
  }
}
</style>
