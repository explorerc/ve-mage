<template>
  <div class="apply-page live-mager" @mousedown="canPaas = false">
    <div class="live-title">
      <span class="title">活动报名</span>
      <el-switch
        v-model="isOpen"
        inactive-color="#DEE1FF"
        active-color="#4B5AFE" @change='openSwitch'>
      </el-switch>
      <div class="right-box">
        <span>最多可添加 <i>5</i> 条信息</span>
        <button class="default-button fr" @click='addNew' :disabled="quesData.length === 5 || !isOpen ? true : false">添加信息</button>
      </div>
    </div>
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">报名结束时间：</div>
          <div class="from-content">
            <el-radio v-model="radioTime" label="1">与直播同步关闭</el-radio>
            <el-radio v-model="radioTime" label="2">指定结束时间</el-radio>
            <div class="set-time" v-if="pickDate">
              <el-date-picker v-model="queryData.finishTime" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" :editable="false" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    <!-- <div>报名校验:<br>
        <el-radio v-model="queryData.checkField" label="mobile">校验手机号</el-radio>
        <el-radio v-model="queryData.checkField" label="email">校验邮箱</el-radio>
        <span>报名观看需要校验手机号或邮箱，从而帮您获取到更加精准的观众信息</span>
      </div> -->
    <div class="set-info">
      <div class="set-content">
        <ul class='table-title clearfix'>
          <li class='spe'>信息类型</li>
          <!-- <li>信息标题</li> -->
          <li>信息描述</li>
          <li class='handle'>操作</li>
        </ul>
        <ol class='table-content'>
          <!-- <li class='clearfix'>
              <div class='spe'>
                <el-select v-model="phone" disabled placeholder="请选择">
                  <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value">
                  </el-option>
                </el-select>
              </div>
              <div>
                <com-input class='inp' value="手机号" disabled :max-length="16"></com-input>
              </div>
              <div>
                <com-input class='inp' value="请输入手机号" disabled :max-length="16"></com-input>
              </div>
              <div><div class='tips-box'><i class='el-icon-question tips' @mouseover='showTips=true' @mouseout='showTips=false'></i><div class='tips-txt' v-if='showTips'>1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写 手机号之后，须进行手机号验证</div></div></div>
            </li> -->
          <li class='clearfix' v-for="(item,idx) in quesData" :key="idx">
            <div v-if="item.type === 'mobile'" class='spe moblie'>
              <i class='star'>*</i>
              <el-select v-model="phone" disabled placeholder="请选择">
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value">
                </el-option>
              </el-select>
            </div>
            <div v-else  class='spe'>
              <el-select v-model="item.type" placeholder="请选择" @change='selectChange(idx,item.type)'>
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value">
                </el-option>
              </el-select>
            </div>
            <!-- <div>
              <com-input class='inp' :value.sync="item.title"  :max-length="16" placeholder="请输入信息标题"></com-input>
            </div> -->
            <div>
              <com-input class='inp' :value.sync="item.placeholder === null ? '' : item.placeholder"  :max-length="16" placeholder="请输入信息描述"></com-input>
            </div>
            <div v-if="item.type === 'mobile'" class='del-box'>
              <ve-tips :tip="'1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写手机号之后，须进行手机号验证'" :tipType="'html'"></ve-tips>
            </div>
            <div v-else class='del-box'>
              <span @click='removeItem(idx)' class='del'>删除</span>
            </div>
            <section class='select-item clearfix' v-if="item.type === 'select'">
              <ol>
                <span class='add-item' @click='addItem(idx)' v-if="item.detail.length < 10 ? true : false"><i>＋</i>添加选项</span>
                <li v-for="(option,count) in item.detail" :key='count'>
                  <com-input :value.sync="option.value" :max-length="16" placeholder="请输入选项"></com-input>
                  <span @click='delItem(idx,count)' class='del'>删除</span>
                </li>
              </ol>
            </section>
          </li>
        </ol>
        <el-button class='primary-button' @click='saveLimit' :disabled="!isOpen">保存</el-button>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
  // import prepareHttp from 'src/api/activity-manger'
  import activityService from 'src/api/activity-service'
  import veTips from 'src/components/ve-msg-tips'
  export default {
    data () {
      return {
        activityId: '',
        isOpen: false,
        radioTime: '1',
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
        questionId: '',
        canPaas: true,
        saveData: {}
      }
    },
    created () {
      this.questionId = 1
      this.activityId = this.$route.params.id
      this.getLimit()
      this.options = [{
        value: 'text',
        txt: '文本'
      },
      // {
      //   value: 'mobile',
      //   txt: '手机'
      // },
      {
        value: 'integer',
        txt: '数字'
      },
      {
        value: 'email',
        txt: '邮箱'
      },
      {
        value: 'select',
        txt: '下拉选择'
      }
        // {
        //   value: 'radio',
        //   txt: '单选'
        // },
        // {
        //   value: 'checkbox',
        //   txt: '多选'
        // }
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
        this.canPaas = false
        this.quesData.splice([idx], 1)
      },
      selectChange (idx, res) {
        this.canPaas = false
        if (res === '下拉选择') {
          // debugger// eslint-disable-line
          this.quesData[idx]['detail'].push('')
        }
      },
      addItem (idx) {
        this.canPaas = false
        console.log(idx)
        this.quesData[idx]['detail'].push({
          value: '',
          key: this.quesData[idx]['detail'].length === 0 ? 0 : this.quesData[idx]['detail'].length
        })
      },
      delItem (idx, count) {
        this.canPaas = false
        // debugger // eslint-disable-line
        this.quesData[idx]['detail'].splice(count, 1)
      },
      addNew () {
        this.canPaas = false
        let obj = {
          title: '标题',
          placeholder: '描述描述',
          label: '文本',
          type: 'text',
          detail: []
        }
        this.quesData.push(obj)
      },
      getLimit () {
        this.$config({loading: true}).$get(activityService.GET_LIMIT, {
          activityId: this.activityId
        }).then((res) => {
          console.log(res)
          if (res.data.viewCondition === 'APPOINT') { // 是否有报名表单数据
            this.isOpen = true
            this.queryData = res.data.detail
            this.quesData = res.data.detail.questionList
            if (res.data.detail.finishTime && res.data.detail.finishTime.search('0000') > -1) { // 是否有时间数据 没有则默认与直播同步关闭
              this.queryData.finishTime = ''
            }
            if (res.data.detail.finishTime === null) {
              this.queryData.finishTime = ''
            }
            res.data.detail.finishTime.length > 0 ? this.radioTime = '2' : this.radioTime = '1'
          } else {
            this.isOpen = false
          }
        })
      },
      saveLimit () {
        this.saveData = {
          'activityId': this.activityId,
          'viewCondition': 'APPOINT',
          'detail': {
            'finishTime': this.radioTime === '2' ? this.queryData.finishTime : '',
            'questionList': this.quesData
          }
        }
        this.saveData.detail.questionList.forEach(item => {
          if (item.type === 'mobile') {
            item.required = 'Y'
            item.verification = 'Y'
          }
          if (item.type === 'email') {
            item.verification = 'Y'
          }
        })
        this.$nextTick(() => {
          this.saveLimitfn(this.saveData)
        })
      },
      saveLimitfn (data) {
        this.$config({handlers: [60704]}).$post(activityService.SAVE_LIMIT, data).then((res) => {
          this.$toast({
            content: '设置成功',
            position: 'center'
          })
        }).catch(res => {
          this.$messageBox({
            header: '提示',
            content: res.msg,
            autoClose: 10,
            confirmText: '知道了'
          })
          this.isOpen = !this.isOpen
        })
      },
      openSwitch (ref) {
        // if (ref) {
        //   let obj = {
        //     title: '手机号码',
        //     placeholder: '请输入手机号码',
        //     label: '手机号码',
        //     type: 'mobile',
        //     detail: []
        //   }
        //   this.quesData.push(obj)
        // } else { // 直接调用接口设置为观看条件为none
        // const data = {
        //   'activityId': this.activityId,
        //   'viewCondition': 'NONE',
        //   'detail': {
        //     'finishTime': this.radioTime === '2' ? this.queryData.finishTime : '',
        //     'questionList': this.quesData
        //   }
        // }
        // this.saveLimitfn(data)
        this.canPaas = false
        const data = {
          'activityId': this.activityId,
          'submodule': 'APPOINT',
          'enabled': ref ? 'Y' : 'N'
        }
        this.$config({handlers: true}).$post(activityService.POST_DETAIL_SWITCH, data).then((res) => {
          if (res.code === 200) {
            if (ref) {
              let obj = {
                title: '手机号码',
                placeholder: '请输入手机号码',
                label: '手机号码',
                type: 'mobile',
                detail: []
              }
              this.quesData.push(obj)
            } else {
              this.$toast({
                'content': '设置成功'
              })
            }
          }
        }).catch((res) => {
          if (res.code === 60706) { // 该状态下的活动不可以开启或关闭子模块
            this.$messageBox({
              header: '提示',
              content: res.msg,
              autoClose: 10,
              confirmText: '知道了'
            })
            this.isOpen = !this.isOpen
          }
        })
        if (!ref) {
          this.quesData = []
        }
        // }
      }
    },
    /* 路由守卫，离开当前页面之前被调用 */
    beforeRouteLeave (to, from, next) {
      if (this.canPaas) {
        next(true)
        return false
      }
      this.$messageBox({
        header: '提示',
        width: '400px',
        content: '是否放弃当前编辑？',
        cancelText: '否',
        confirmText: '是',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            next(true)
          } else {
            next(false)
          }
        }
      })
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
          this.canPaas = false
        }
      }
    },
    components: {
      veTips
    }
  }
</script>
<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.apply-page .el-select .el-input__inner {
  border: 1px solid #e2d2d2;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff;
  color: #555;
}

.spe.moblie .el-select .el-input__inner {
  padding-left: 25px;
}
</style>
<style lang='scss' scoped>
@import 'assets/css/mixin.scss';
.live-title {
  .right-box {
    float: right;
    i {
      color: $color-blue;
    }
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      position: relative;
      bottom: 8px;
      margin-right: 10px;
      color: $color-font-sub;
    }
  }
}
.live-mager /deep/ {
  .mager-box {
    .set-time {
      margin: 20px 0px 0 0;
    }
    .from-box {
      margin-bottom: 0px;
    }
    .from-box .from-row .from-title {
      width: auto;
      text-align: left;
    }
    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 320px;
    }
    .set-info {
      margin: 20px 32px 32px 32px;
    }
  }
}
.set-content {
  width: 800px;
  .table-title {
    height: 61px;
    background: rgba(245, 245, 245, 1);
    border-radius: 4px 4px 0px 0px;
    color: $color-font;
    li {
      float: left;
      width: 300px;
      text-align: left;
      margin: 20px 0px;
      padding-left: 40px;
      margin-right: 20px;
      &.spe {
        width: 180px;
      }
      &.handle {
        width: 100px;
      }
    }
  }
  .table-content {
    & > li {
      line-height: 40px;
      margin: 20px 0;
      & > div {
        float: left;
        width: 300px;
        text-align: left;
        margin-right: 20px;
        &.spe {
          width: 180px;
          position: relative;
          .star {
            color: #fc5659;
            position: absolute;
            top: 3px;
            z-index: 9;
            left: 14px;
          }
        }
        &.del-box /deep/ {
          width: 100px;
          .msg-tip-box span {
            max-width: 500px;
            width: 400px;
            top: -30px;
            left: 30px;
          }
        }
      }
      .del {
        color: $color-font-sub;
        cursor: pointer;
        &:hover {
          color: $color-font;
        }
      }
      .del-box {
        padding-left: 41px;
      }
    }
    .inp {
      width: 300px;
      height: 40px;
      line-height: 40px;
    }
    .el-select {
      width: 180px;
      height: 40px;
      .el-input__inner {
        border: 1px solid #e2d2d2;
      }
    }
  }

  .select-item {
    clear: both;
    padding-top: 20px;
    p {
      padding: 10px 0px;
    }
    p button {
      float: right;
    }
    li {
      padding: 10px 0px;
      .del {
        margin-left: 12px;
        color: $color-font;
        &:hover {
          color: $color-error;
        }
      }
      .com-input {
        width: 330px;
      }
    }
    ol {
      position: relative;
      padding: 35px 30px;
      width: 450px;
      background: rgba(245, 245, 245, 1);
      border-radius: 4px 0px 0px 0px;
      border: 1px solid rgba(226, 226, 226, 1);
      &:before {
        content: '';
        position: absolute;
        top: -11px;
        left: 20px;
        width: 19px;
        height: 19px;
        background: whitesmoke;
        transform: rotate(45deg);
        border: 1px solid rgba(226, 226, 226, 1);
        border-bottom-color: rgba(226, 226, 226, 1);
        border-bottom: none;
        border-right: none;
      }
      .add-item {
        cursor: pointer;
        color: #4b5afe;
        i {
          position: relative;
          top: 1px;
          font-size: 20px;
        }
      }
    }
  }
}

.apply-page > div {
  margin: 30px 0px;
}
.primary-button {
  padding: 0px;
  width: 200px;
  margin: 10px auto 34px auto;
  display: block;
}
/* 设备宽度大于 1600 */
@media all and (min-width: 1600px) {
}
/* 设备宽度小于 1600px */
@media all and (max-width: 1600px) {
  .set-content .table-title li.spe,
  .set-content .table-content .el-select,
  .set-content .table-content > li > div.spe {
    width: 130px;
  }
  .set-content .table-title li,
  .set-content .table-content .inp,
  .set-content .table-content > li > div {
    width: 240px;
  }
}
</style>
