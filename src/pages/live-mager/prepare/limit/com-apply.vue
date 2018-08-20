<template>
  <div class="apply-page">
    <p>报名观看需要校验手机号，从而帮您获取到更加精准的观众信息</p>
    <div class="set-time">
      报名关闭时间：
      <el-date-picker v-model="date" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
      </el-date-picker>
      <el-checkbox v-model="checked">与直播同步关闭</el-checkbox>
    </div>
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
                <el-option v-for="item in quesData" :key="item.type" :label="item.label" :value="item.type">
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
          <li class='clearfix' v-for="(item,idx) in quesData" :key="item.type">
            <div>
              <el-select v-model="item.value" placeholder="请选择" @change='selectChange(idx,item.value)'>
                <el-option v-for="item in quesData" :key="item.type" :label="item.label" :value="item.type">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' :value="item.info" :max-length="8"></com-input>
            </div>
            <div>
              <com-input customClass='inp' :value="item.desc" :max-length="8"></com-input>
            </div>
            <div>
              <el-button @click='removeItem(idx)'>删除</el-button>
            </div>
            <section class='select-item clearfix' v-if="item.value === 4">
              <p>选项详情
                <el-button @click='addItem(idx)'>添加选项</el-button>
              </p>
              <ol>
                <li v-for="(option,count) in item.detail">
                  <com-input :value="option" :max-length="8"></com-input>
                  <span @click='delItem(idx,count)'>删除</span>
                </li>
              </ol>
            </section>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        phone: '手机号码',
        checked: true,
        searchTitle: '123',
        date: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        quesData: {}
      }
    },
    created () {
      this.quesData = [{
        type: 1,
        value: 1,
        info: '标题',
        desc: '描述描述',
        label: '文本',
        detail: []
      },
      {
        type: 2,
        value: 2,
        info: '标题a',
        desc: '描述描述a',
        label: '姓名',
        detail: []
      },
      {
        type: 3,
        value: 3,
        info: '标题b',
        desc: '描述描述b',
        label: '数字',
        detail: []
      },
      {
        type: 4,
        value: 4,
        info: '下拉',
        desc: '描述下拉',
        label: '下拉选择',
        detail: [
          '男',
          '女',
          '奥克兰圣'
        ]
      }
      ]
    },
    methods: {
      removeItem (idx) {

      },
      selectChange (idx, res) {
        console.log(idx)
        console.log(res)
        // debugger// eslint-disable-line
        if (res === 4) {
          // debugger// eslint-disable-line
          this.quesData[idx]['detail'].push('')
        }
      },
      addItem (idx) {
        this.quesData[idx]['detail'].push('')
      },
      delItem (idx, count) {
        // debugger // eslint-disable-line
        this.quesData[idx]['detail'].splice(count, 1)
      },
      addNew () {

      }
    },
    watch: {
      quesData: function () {
        console.log('change')
      },
      deep: true
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
</style>
