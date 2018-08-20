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
        <el-button>添加信息</el-button><em>最多可设置5条信息</em></div>
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
              <el-select v-model="this.select.value" disabled placeholder="请选择">
                <el-option v-for="item in this.select.arr" :key="item.value" :label="item.label" :value="item.value">
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
          <li class='clearfix'>
            <div>
              <el-select v-model="this.select.value1" placeholder="请选择" @change='selectChange'>
                <el-option v-for="item in this.select.arr" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' value="文本" :max-length="8"></com-input>
            </div>
            <div>
              <com-input customClass='inp' value=" 请输入文字" :max-length="8"></com-input>
            </div>
            <div>
              <el-button @click='removeItem'>删除</el-button>
            </div>
          </li>
          <li class='clearfix'>
            <div>
              <el-select v-model="this.select.value2" placeholder="请选择" @change='selectChange'>
                <el-option v-for="item in this.select.arr" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input customClass='inp' value="文本" :max-length="8"></com-input>
            </div>
            <div>
              <com-input customClass='inp' value=" 请输入文字" :max-length="8"></com-input>
            </div>
            <div>
              <el-button @click='removeItem'>删除</el-button>
            </div>
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
        checked: true,
        searchTitle: '123',
        date: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        select: {},
        quesData: {}
      }
    },
    created () {
      this.select = {
        arr: [{
          value: '1',
          label: '文本'
        }, {
          value: '2',
          label: '姓名'
        }, {
          value: '3',
          label: '数字'
        }, {
          value: '4',
          label: '下拉选择'
        }, {
          value: '5',
          label: '手机号码'
        }],
        value: '手机号码',
        value1: '',
        value2: '',
        value3: ''
      }
      this.quesData = [
        {
          type: 1,
          info: '标题',
          desc: '描述描述'
        },
        {
          type: 2,
          info: '标题a',
          desc: '描述描述a'
        },
        {
          type: 3,
          info: '标题b',
          desc: '描述描述b'
        },
        {
          type: 4,
          info: '数字',
          desc: '数字描述b'
        },
        {
          type: 5,
          info: '下拉',
          desc: '描述下拉',
          detail: [
            '男',
            '女',
            '奥克兰圣'
          ]
        }
      ]
    },
    methods: {
      removeItem () {},
      selectChange (res) {
        console.log(res)
        if (res === 4) {
          console.log('弹出')
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
    li {
      margin: 10px 0;
      div {
        float: left;
        width: 250px;
        text-align: center;
      }
    }
    .inp,
    .el-select {
      width: 200px;
      margin: 0 25px;
    }
  }
}
</style>
