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
          <li class='clearfix' v-for="(item,idx) in quesData" :key="item.idx">
            <div>
              <el-select v-model="item.label" placeholder="请选择" @change='selectChange(idx,item.label)'>
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.txt">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' :value="item.info" :max-length="8" placeholder="请输入信息标题"></com-input>
            </div>
            <div>
              <com-input customClass='inp' :value="item.desc" :max-length="8" placeholder="请输入信息描述"></com-input>
            </div>
            <div>
              <el-button @click='removeItem(idx)'>删除</el-button>
            </div>
            <section class='select-item clearfix' v-if="item.label === '下拉选择'">
              <p>选项详情
                <el-button @click='addItem(idx)'>添加选项</el-button>
              </p>
              <ol>
                <li v-for="(option,count) in item.detail" :key='count'>
                  <com-input :value="option" :max-length="8" placeholder="请输入选项"></com-input>
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
        options: [],
        quesData: []
      }
    },
    created () {
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
        value: 4,
        txt: '下拉选择'
      }
      ]
      this.quesData = [{
        info: '标题',
        desc: '描述描述',
        label: '文本',
        detail: []
      },
      {
        info: '标题a',
        desc: '描述描述a',
        label: '姓名',
        detail: []
      },
      {
        info: '标题b',
        desc: '描述描述b',
        label: '数字',
        detail: []
      },
      {
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
        this.quesData.splice([idx], 1)
      },
      selectChange (idx, res) {
        if (res === '下拉选择') {
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
        let obj = {
          info: '标题',
          desc: '描述描述',
          label: '文本',
          detail: []
        }
        this.quesData.push(obj)
      }
    },
    watch: {
      quesData: {
        handler (newValue) {
          console.log('change')
        },
        deep: true
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
</style>
