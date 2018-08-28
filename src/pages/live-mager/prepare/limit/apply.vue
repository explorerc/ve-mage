<template>
  <div class="apply-page">
    <div>活动报名:
      <el-checkbox v-model="checked">开启</el-checkbox>
      注意：活动报名与邀请观看无法同时开启，活动发布后将无法修改
    </div>
    <div>报名结束时间：<br>
      <el-radio v-model="radioTime" label="1">与直播同步关闭</el-radio>
      <el-radio v-model="radioTime" label="2">指定结束时间</el-radio>
      <span>设置后，报名关闭后，不可再报名，且未报名的用户，无法观看直播</span>
      <div class="set-time" v-if="pickDate">
        报名结束时间：
        <el-date-picker v-model="queryData.finishTime" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions" >
        </el-date-picker>
      </div>
    </div>
    <!-- <div>报名校验:<br>
      <el-radio v-model="queryData.checkField" label="mobile">校验手机号</el-radio>
      <el-radio v-model="queryData.checkField" label="email">校验邮箱</el-radio>
      <span>报名观看需要校验手机号或邮箱，从而帮您获取到更加精准的观众信息</span>
    </div> -->
    <div class="set-info">
      <div class='title'>
        <el-button @click='addNew'>添加信息</el-button><em>最多可设置5条信息</em></div>
      <div class="set-content">
        <ul class='table-title clearfix'>
          <li>信息类型</li>
          <li>信息标题</li>
          <li>信息描述</li>
          <li>操作</li>
        </ul>
        <ol class='table-content'>
          <li class='clearfix'>
            <div>
              <el-select v-model="phone" disabled placeholder="请选择">
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' value="手机号" disabled :max-length="8"></com-input>
            </div>
            <div>
              <com-input customClass='inp' value="请输入手机号" disabled :max-length="8"></com-input>
            </div>
            <div>登陆校验项目</div>
          </li>
          <li class='clearfix' v-for="(item,idx) in quesData" :key="idx">
            <div>
              <el-select v-model="item.type" placeholder="请选择" @change='selectChange(idx,item.type)'>
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.txt">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' :value="item.title" :max-length="16" placeholder="请输入信息标题"></com-input>
            </div>
            <div>
              <com-input customClass='inp' :value="item.placeholder === 'null' ? item.placeholder : ''" :max-length="16" placeholder="请输入信息描述"></com-input>
            </div>
            <div>
              <el-button @click='removeItem(idx)'>删除</el-button>
            </div>
            <section class='select-item clearfix' v-if="item.type === 'select'">
              <p>选项详情
                <el-button @click='addItem(idx)'>添加选项</el-button>
              </p>
              <ol>
                <li v-for="(option,count) in item.detail" :key='count'>
                  <com-input :value="option.value" :max-length="16" placeholder="请输入选项"></com-input>
                  <span @click='delItem(idx,count)'>删除</span>
                </li>
              </ol>
            </section>
          </li>
        </ol>
      </div>
    </div>
    <el-button @click='saveLimit'>保存</el-button>
  </div>
</template>

<script>
  import prepareHttp from 'src/api/activity-manger'
  export default {
    data () {
      return {
        activityId: '',
        checked: '',
        radioTime: '',
        phone: '手机号码',
        pickDate: false,
        date: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        options: [],
        quesData: [],
        queryData: {
          activityId: '',
          // checkField: '',
          finishTime: '',
          questionId: ''
        },
        questionId: ''
      }
    },
    created () {
      this.questionId = 1
      this.activityId = this.$route.params.id
      this.getLimit()
      this.options = [{
        value: 1,
        txt: '文本'
      },
      {
        value: 2,
        txt: '姓名'
      },
      {
        value: 3,
        txt: '数字'
      },
      {
        value: 5,
        txt: '邮箱'
      },
      {
        value: 4,
        txt: '下拉选择'
      }
      ]
      this.quesData = [
      // {
      //   info: '标题',
      //   desc: '描述描述',
      //   label: '文本',
      //   detail: []
      // },
      // {
      //   info: '标题a',
      //   desc: '描述描述a',
      //   label: '姓名',
      //   detail: []
      // },
      // {
      //   info: '标题b',
      //   desc: '描述描述b',
      //   label: '数字',
      //   detail: []
      // },
      // {
      //   info: '下拉',
      //   desc: '描述下拉',
      //   label: '下拉选择',
      //   detail: [
      //     '男',
      //     '女',
      //     '奥克兰圣'
      //   ]
      // }
      ]
    },
    methods: {
      removeItem (idx) {
        this.quesData.splice([idx], 1)
      },
      selectChange (idx, res) {
        if (res === '下拉选择') {
          // debugger// eslint-disable-line
          this.quesData[idx]['detail'].push('')
        }
      },
      addItem (idx) {
        this.quesData[idx]['detail'].push({value: ''})
      },
      delItem (idx, count) {
        // debugger // eslint-disable-line
        this.quesData[idx]['detail'].splice(count, 1)
      },
      addNew () {
        let obj = {
          info: '标题',
          desc: '描述描述',
          label: '文本',
          detail: []
        }
        this.quesData.push(obj)
      },
      getLimit () {
        prepareHttp.getLimit(this.activityId).then((res) => {
          if (res.code === 200) {
            console.log(res)
            // this.viewLimit = res.data.viewCondition
            if (res.data.viewCondition === 'APPOINT') {
              this.queryData = res.data.detail
              this.quesData = res.data.detail.questionList
              if (res.data.detail.finishTime.search('0000') > -1) { // 是否有时间数据 没有则默认与直播同步关闭
                this.queryData.finishTime = ''
              }
              res.data.detail.finishTime.length > 0 ? this.radioTime = '2' : this.radioTime = '1'
            }
          }
        }).catch((res) => {
          this.$toast({
            content: res.msg,
            position: 'center'
          })
        })
      },
      saveLimit () {
        let detail = []
        if (this.radioTime === '2') {
          detail['finishTime'] = this.queryData.finishTime
        }
        detail['questionId'] = this.questionId
        // detail['checkField'] = this.queryData.checkField // email|mobile
        let data = {
          activityId: this.activityId,
          viewCondition: 'APPOINT',
          detail: detail
        }
        prepareHttp.saveLimit(data).then((res) => {
          if (res.code === 200) {
            // console.log(res)
            this.$toast({
              content: '保存成功',
              position: 'center'
            })
          }
        }).catch((res) => {
          this.$toast({
            content: '保存失败',
            position: 'center'
          })
        })
      }
    },
    watch: {
      quesData: {
        handler (newValue) {
          console.log('change')
        },
        deep: true
      },
      radioTime: {
        handler (newValue) {
          newValue === '2' ? this.pickDate = true : this.pickDate = false
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.set-info {
  .title {
    text-align: left;
    em {
      float: right;
    }
  }
}

.set-content {
  .table-title li {
    float: left;
    width: 250px;
    text-align: center;
    margin: 20px 0px;
  }
  .table-content {
    & > li {
      margin: 10px 0;
      border-top: 1px solid #ccc;
      padding-top: 20px;
      & > div {
        float: left;
        width: 250px;
        text-align: center;
        padding-bottom: 20px;
      }
    }
    .inp,
    .el-select {
      width: 200px;
      margin: 0 25px;
    }
  }
  .select-item {
    clear: both;
    padding: 0 30px;
    p {
      padding: 10px 0px;
      border-top: 1px solid #ccc;
    }
    p button {
      float: right;
    }
    li {
      padding: 10px 0px;
    }
  }
}

.apply-page > div {
  margin: 30px 0px;
}
</style>
