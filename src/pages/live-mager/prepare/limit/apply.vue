<template>
  <div class="apply-page live-mager" @mousedown="canPaas = false">
    <div class="live-title" style="border:none;">
      <span class="title">活动报名</span>
      <el-switch
        v-model="isOpen"
        inactive-color="#DEE1FF"
        :width="32"
        active-color="#FFD021"
        @change='openSwitch'>
      </el-switch>
      <com-back ></com-back>
      <!-- <div class="right-box">
        <span>最多可添加 <i>5</i> 条信息</span>
        <button class="default-button fr" @click='addNew' :disabled="quesData.length === 5 || !isOpen ? true : false">添加信息</button>
      </div> -->
    </div>
    <div class="mager-box border-box">
      <div class="from-box">
        <div class="from-row">
          <div class="from-title">报名结束时间：</div>
          <div class="from-content">
            <el-radio v-model="radioTime" label="1">不设结束时间</el-radio>
            <el-radio v-model="radioTime" label="2">指定结束时间</el-radio>
            <ve-tips class='msg-tips-box-radio' :tip="'不设结束时间：本次直播活动的报名功能可一直开放，观众随时可以报名。<br>指定结束时间：设置报名功能的关闭时间，在时间过期后，观众将无法报名该活动。'" :tipType="'html'"></ve-tips>
            <div class="set-time" v-if="pickDate">
              <el-date-picker v-model="queryData.finishTime" @focus="dateFocus()" format='yyyy-MM-dd HH:mm' value-format="yyyy-MM-dd HH:mm" :editable="false" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions" :default-value="defaultValue">
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
          <li>信息标题</li>
          <li>信息描述</li>
          <li class='handle'>操作</li>
        </ul>
        <ol class='table-content'>
          <li class='clearfix' v-for="(item,idx) in quesData" :key="idx">
            <div v-if="item.ext === 'phone'" class='spe moblie'>
              <i class='star'>*</i>
              <el-select v-model="phone" disabled placeholder="请选择">
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value">
                </el-option>
              </el-select>
            </div>
            <div v-else  class='spe'>
              <el-select v-model="item.ext" placeholder="请选择" @change='selectChange(idx,item.ext)'>
                <el-option v-for="opt in options" :key="opt.value" :label="opt.txt" :value="opt.value" :disabled="opt.disabled">
                </el-option>
              </el-select>
            </div>
            <div>
              <com-input class='inp' :value.sync="item.title"  :max-length="6" placeholder="请输入信息标题" :aa='item.errorMsg' :error-tips="item.errorMsg" @focus="item.errorMsg=''"></com-input>
            </div>
            <div v-if="item.ext==='select'">
              <el-button class='default-button set-select'  @click='setSelect(item.detail.list,idx)'>设置下拉选项</el-button>
            </div>
            <div v-else>
              <com-input class='inp' :value.sync="item.placeholder === null ? '' : item.placeholder" :max-length="8" :placeholder="item.place ? item.place : '请输入描述信息'"></com-input>
            </div>
            <div v-if="item.ext === 'phone'" class='del-box tips'>
              <ve-tips :tip="'1.手机号验证时，暂只支持国内手机号验证，不支持国际手机号<br>2.为了保证手机号的真实性，观众在填写手机号之后，须进行手机号验证'" :tipType="'html'"></ve-tips>
            </div>
            <div v-else class='del-box'>
              <span class='require'><el-checkbox v-model="item.required">必填</el-checkbox></span>
              <span @click='removeItem(idx)' class='del'></span>
            </div>
            <!-- <section class='select-item clearfix' v-if="item.ext === 'select'">
              <ol>
                <span class='add-item' @click='addItem(idx)' v-if="item.detail.list.length < 10 ? true : false"><i>＋</i>添加选项</span>
                <li v-for="(option,count) in item.detail.list" :key='count'>
                  <com-input :value.sync="option.value" :max-length="8" placeholder="请输入选项"></com-input>
                  <span @click='delItem(idx,count)' class='del'>删除</span>
                </li>
              </ol>
            </section> -->
          </li>
        </ol>
        <div class="add-item-box" v-show='quesData.length'>
          <span class='add-item'  @click='addNew' :class='{"disabled":quesData.length === 5 || !isOpen ? true : false}' ><i></i>添加信息</span>
          <span>最多可添加<em> 5 </em>条信息</span>
        </div>
        <el-button class='primary-button' @click='saveLimit' :disabled="!isOpen">保存</el-button>
      </div>
    </div>
    </div>
    <transition name="fade">
      <div class="setSelect-modal-cover" v-if='setSelectModal'>
        <div class="setSelect-modal" >
          <div class="header">设置下拉选项<i @click='setSelectModal = false'></i></div>
          <div class="body">
            <draggable element="ul" v-model="selectOption" :options="{handle:'.drag'}">
              <li v-for="(item,idx) in selectOption" :key='idx'>
                <span class='count'>选项 {{idx + 1}}</span>
                <com-input :value.sync="item.value" :max-length="15" placeholder="请输入选项" :errorTips="item.errorMsg" @focus="item.errorMsg=''"></com-input>
                <em class="drag" title='移动拖拽'></em>
                <em class="del" :class="{'disabled':selectOption.length <=2}" @click='delItem(idx)'></em>
              </li>
            </draggable>
            <div class="add-item-box" style='margin-top: 20px;'>
              <span class='add-item' @click='addItem()' :class='{"disabled":selectOption.length >= 10}' ><i></i>添加信息</span>
              <span>最多可添加<em> 10 </em>条信息</span>
            </div>
            <div class="btn-box clearfix">
              <el-button class='primary-button' @click='seletItemConfirm'>确定</el-button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
  import { formatDate } from 'src/assets/js/date'
  import draggable from 'vuedraggable'
  // import prepareHttp from 'src/api/activity-manger'
  import activityService from 'src/api/activity-service'
  import veTips from 'src/components/ve-msg-tips'
  import EventBus from 'src/utils/eventBus'
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
        defaultValue: new Date(new Date().getTime() + 1800000),
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
        canSave: true,
        saveData: {},
        hasEmail: false,
        hasName: false,
        setSelectModal: false,
        itemCount: 0,
        selectOption: [],
        startTime: '', // 开播时间
        closeCount: 0 // 关闭计数
      }
    },
    created () {
      this.questionId = 1
      this.activityId = this.$route.params.id
      this.getLimit()
      this.getStartTime()
      this.options = [{
        value: 'text',
        txt: '文本'
      },
      {
        value: 'name',
        txt: '姓名'
      },
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
      ]
      EventBus.$emit('breads', [{
        title: '活动管理'
      }, {
        title: '活动列表',
        url: '/liveMager/list'
      }, {
        title: '活动详情',
        url: `/liveMager/detail/${this.activityId}`
      }, {
        title: '活动报名'
      }])
    },
    methods: {
      removeItem (idx) {
        this.canPaas = false
        this.quesData.splice([idx], 1)
      },
      selectChange (idx, res, txt) {
        console.log(res)
        this.canPaas = false
        switch (res) {
          case 'select':
            if (this.quesData[idx]['detail']['list']) {
              this.quesData[idx]['detail']['list'].push({value: '', errorMsg: ''})
            } else {
              Object.assign(this.quesData[idx]['detail'], {'list': [
                {value: '', errorMsg: ''}
              ]})
            }
            this.quesData[idx]['title'] = '下拉选择'
            this.quesData[idx]['type'] = 'select'
            this.quesData[idx]['placeholder'] = '请选择下拉选项'
            this.quesData[idx]['errorMsg'] = ''
            break
          case 'integer':
            this.quesData[idx]['detail']['format'] = 'integer'
            this.quesData[idx]['title'] = '数字'
            this.quesData[idx]['placeholder'] = '请输入数字'
            this.quesData[idx]['errorMsg'] = ''
            break
          case 'email':
            this.quesData[idx]['detail']['format'] = 'email'
            this.quesData[idx]['title'] = '邮箱'
            this.quesData[idx]['placeholder'] = '请输入邮箱'
            this.quesData[idx]['errorMsg'] = ''
            break
          case 'text':
            this.quesData[idx]['detail']['format'] = ''
            this.quesData[idx]['title'] = '文本'
            this.quesData[idx]['placeholder'] = '请输入文本'
            this.quesData[idx]['errorMsg'] = ''
            break
          case 'name':
            this.quesData[idx]['detail']['format'] = ''
            this.quesData[idx]['title'] = '姓名'
            this.quesData[idx]['placeholder'] = '请输入姓名'
            this.quesData[idx]['errorMsg'] = ''
            break
        }
      },
      addItem () {
        this.canPaas = false
        console.log(this.itemCount)
        this.quesData[this.itemCount]['detail']['list'].push({
          value: '',
          errorMsg: ''
          // key: this.quesData[idx]['list'].length === 0 ? 0 : this.quesData[idx]['list'].length
        })
        // debugger
        // this.selectOption.push({
        //   value: '',
        //   errorMsg: ''
        // })
      },
      delItem (count) {
        this.canPaas = false
        this.quesData[this.itemCount]['detail']['list'].splice(count, 1)
      },
      addNew () {
        this.canPaas = false
        let obj = {
          title: '标题',
          placeholder: '',
          place: '请输入描述信息',
          label: '文本',
          type: 'text',
          ext: 'text',
          required: false,
          errorMsg: '',
          detail: {
            format: '',
            list: []
          }
        }
        this.quesData.push(obj)
      },
      getLimit () {
        this.$get(activityService.GET_LIMIT, {
          activityId: this.activityId
        }).then((res) => {
          console.log(res)
          if (res.data.detail !== null) { // 是否有报名表单数据
            this.isOpen = true
            this.queryData = res.data.detail
            let quesDataTemp = []
            res.data.detail.questionList.forEach((item, idx) => {
              if (item.required === 'Y') {
                item.required = true
              } else {
                item.required = false
              }
              quesDataTemp.push(Object.assign(item, {'errorMsg': ''}))
            })
            this.quesData = quesDataTemp
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
          if (item.required) {
            item.required = 'Y'
          } else {
            item.required = 'N'
          }
          if (item.ext === 'phone') {
            item.required = 'Y'
            item.verification = 'Y'
          }
          if (item.ext === 'email') {
            item.verification = 'Y'
          }
          if (item.ext === 'select') {
            if (!item.detail['list'].length) {
              this.$messageBox({
                header: '提示',
                content: '请添加下拉选项',
                autoClose: 10,
                confirmText: '知道了'
              })
              this.canSave = false
            } else {
              item.detail['list'].forEach(ele => {
                if (!ele.value.length) {
                  this.canSave = false
                } else {
                  this.canSave = true
                }
              })
              if (!this.canSave) {
                this.$messageBox({
                  header: '提示',
                  content: '请设置下拉选项',
                  autoClose: 10,
                  confirmText: '知道了'
                })
              }
            }
          }
        })
        console.log(this.saveData.detail.questionList = JSON.stringify(this.saveData.detail.questionList))
        this.$nextTick(() => {
          let dataList = []
          this.quesData.forEach((item, idx) => {
            if (item.title === '') {
              item.errorMsg = '信息标题不能为空'
              this.canSave = false
            }
            dataList.push(item)
          })
          this.quesData = dataList
          if (this.canSave) {
            this.saveLimitfn(this.saveData)
          }
        })
      },
      saveLimitfn (data) {
        this.$config({ handlers: [60704] }).$post(activityService.SAVE_LIMIT, data).then((res) => {
          // this.$toast({
          //   content: '设置成功',
          //   position: 'center'
          // })
          this.canPaas = true
          this.$router.push(`/liveMager/detail/${this.activityId}`)
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
        this.canPaas = false
        const data = {
          'activityId': this.activityId,
          'submodule': 'APPOINT',
          'enabled': ref ? 'Y' : 'N'
        }
        this.$config({ handlers: [60706] }).$post(activityService.POST_DETAIL_SWITCH, data).then((res) => {
          if (res.code === 200) {
            if (ref) {
              let obj = {
                title: '手机号码',
                placeholder: '请输入手机号码',
                place: '请输入手机号码',
                label: '手机号码',
                type: 'text',
                ext: 'phone',
                errorMsg: '',
                detail: {
                  format: 'phone'
                }
              }
              this.quesData.push(obj)
            } else {
              // this.$toast({
              //   'content': '设置成功'
              // })
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
      },
      setSelect (res, idx) {
        this.itemCount = idx
        this.selectOption = res
        this.setSelectModal = true
      },
      seletItemConfirm () {
        this.closeCount = 0
        // 验证选项是否为空
        // let dataListParent = []
        // let dataList = []
        this.quesData.forEach(item => {
          if (item.ext === 'select') {
            item.detail['list'].forEach((ele, idx) => {
              if (!ele.value.length) {
                this.closeCount += 1
                ele.errorMsg = '下拉选项不能为空'
              }
              // dataList.push(ele)
            })
            // item.detail['list'] = dataList
          }
          // dataListParent.push(item)
        })
        // this.quesData = dataListParent
        if (this.closeCount === 0) {
          this.setSelectModal = false
        }
      },
      getStartTime () {
        this.$get(activityService.GET_DETAILS, {
          activityId: this.activityId
        }).then((res) => {
          this.startTime = res.data.activity.startTime
          this.defaultValue = this.startTime
        })
      },
      dateFocus () {
        this.queryData.finishTime = formatDate(new Date(this.startTime), 'yyyy-MM-dd hh:mm')
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
          this.hasEmail = false
          this.hasName = false
          newValue.forEach((item) => {
            switch (item.ext) {
              case 'email':
                this.hasEmail = true
                break
              case 'name':
                this.hasName = true
                break
            }
          })
          this.options.forEach((item) => {
            if (item.value === 'email') {
              if (this.hasEmail === true) {
                item.disabled = true
              } else {
                item.disabled = false
              }
            }
            if (item.value === 'name') {
              if (this.hasName === true) {
                item.disabled = true
              } else {
                item.disabled = false
              }
            }
          })
        },
        deep: true
      },
      radioTime: {
        handler (newValue) {
          newValue === '2' ? this.pickDate = true : this.pickDate = false
          this.canPaas = false
        }
      },
      startTime: {
        handler (newVal) {
          if (!isNaN(newVal)) return
          this.startTime = new Date(newVal.replace(/-/g, '/')).getTime() + 3600000 * 48 // 当前时间+48小时
        }
      }
    },
    components: {
      veTips, draggable
    }
  }
</script>
<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.apply-page .el-select {
  .el-input {
    margin-top: 3px;
  }
  .el-input__inner {
    border: 1px solid #e2d2d2;
  }
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
    margin-right: 80px;
    i {
      color: $color-blue;
    }
    span {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      position: relative;
      margin-right: 10px;
      color: $color-font-sub;
      bottom: -3px;
    }
    button {
      padding: 0;
      /*width: 100px;*/
      height: 30px;
      line-height: 30px;
      margin-top: 17px;
      padding: 0 20px;
    }
  }
}
.live-mager /deep/ {
  .com-input input {
    height: 40px;
    line-height: 40px;
  }
  .el-input__inner {
    height: 40px;
    line-height: 40px;
  }
  .msg-tip-box {
    top: 9px;
    span {
      max-width: 470px;
    }
    &.msg-tips-box-radio {
      position: absolute;
      left: 263px;
      top: -2px;
    }
  }
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
  .set-select {
    padding: 0;
    width: 120px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-color: #cecece;
    &:hover {
      border-color: #fff;
    }
  }
}
.set-content {
  // width: 800px;
  .table-title {
    height: 61px;
    background: rgba(245, 245, 245, 1);
    border-radius: 4px 4px 0px 0px;
    color: $color-font;
    li {
      float: left;
      width: 332px;
      text-align: left;
      margin: 20px 0px;
      padding-left: 16px;
      margin-right: 20px;
      &.spe {
        width: 250px;
      }
      &.handle {
        width: 100px;
      }
      &:nth-of-type(2) {
        padding-left: 12px;
      }
      &:nth-of-type(3) {
        width: 406px;
        padding-left: 35px;
      }
    }
  }
  .table-content {
    & > li {
      margin: 20px 0;
      & > div {
        display: inline-block;
        width: 350px;
        text-align: left;
        margin-right: 20px;
        &.spe {
          width: 250px;
          position: relative;
          .star {
            color: #fc5659;
            position: absolute;
            top: 15px;
            z-index: 9;
            left: 14px;
          }
        }
        &.del-box /deep/ {
          line-height: 40px;
          width: 200px;
          margin-right: 0;
          .msg-tip-box span {
            position: absolute;
            max-width: 500px;
            width: 270px;
            top: 10px;
            left: 30px;
          }
          .require {
            margin-right: 25px;
            .el-checkbox__input .el-checkbox__inner {
              background-color: #fff;
              border-color: #222;
              &:after {
                box-sizing: content-box;
                content: '';
                border: 1px solid #222;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transition: -webkit-transform 0.15s ease-in 0.05s;
                transition: transform 0.15s ease-in 0.05s;
                transition: transform 0.15s ease-in 0.05s,
                  -webkit-transform 0.15s ease-in 0.05s;
                transform-origin: center;
              }
            }
            .el-checkbox__input.is-checked + .el-checkbox__label {
              color: #222;
            }
            &:hover .el-checkbox__input + .el-checkbox__label {
              color: #222;
            }
          }
        }
      }
      .del {
        cursor: pointer;
        width: 20px;
        height: 20px;
        display: inline-block;
        background: url('~assets/image/del.png') no-repeat center;
        background-size: contain;
        position: relative;
        top: 5px;
        &:hover {
          background-image: url('~assets/image/del_hover.png');
        }
      }
      .del-box {
        padding-left: 41px;
      }
    }
    .inp {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .el-select {
      width: 100%;
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

.add-item-box {
  color: #888;
  font-size: 14px;
  position: relative;
  i {
    position: absolute;
    top: 50%;
    margin-top: -10.5px;
    left: 0;
    width: 21px;
    height: 21px;
    display: inline-block;
    background: url('~assets/image/add_icon_blue_circle.svg') no-repeat center;
    background-size: contain;
  }
  .add-item {
    color: #4b5afe;
    cursor: pointer;
    padding-left: 30px;
    padding-right: 10px;
    &:hover {
      opacity: 0.8;
    }
    &.disabled {
      cursor: not-allowed;
    }
  }
  em {
    color: #4b5afe;
  }
}
.primary-button {
  padding: 0px;
  width: 200px;
  margin: 50px auto 34px auto;
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
    width: 200px;
  }
  .set-content .table-title li,
  .set-content .table-content .inp,
  .set-content .table-content > li > div {
    width: 240px;
    margin-right: 20px;
  }
  .set-content .table-title li:nth-of-type(2) {
    padding-left: 10px;
  }
  .set-content .table-title li:nth-of-type(3) {
    width: 260px;
    padding-left: 010px;
  }
}
.el-switch {
  position: relative;
  bottom: 6px;
}
.setSelect-modal-cover {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.setSelect-modal {
  width: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .header {
    height: 40px;
    line-height: 40px;
    background: #ffd021;
    color: #222;
    font-size: 16px;
    text-align: left;
    padding-left: 18px;
    border-radius: 4px 4px 0 0;
    position: relative;
    i {
      cursor: pointer;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      margin-top: -7px;
      right: 18px;
      background: url('~assets/image/close.svg') no-repeat center;
      background-size: contain;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .body {
    background: #fff;
    border-radius: 0 0 4px 4px;
    padding: 10px 30px 30px 30px;
    li {
      margin: 21px 0;
      font-size: 14px;
      position: relative;
      .count {
        display: inline-block;
        width: 50px;
      }
    }
    .com-input {
      margin: 0 20px;
      width: 260px;
    }
    em.del {
      position: absolute;
      top: 50%;
      right: 0px;
      transform: translate(-50%, -50%);
      cursor: pointer;
      width: 20px;
      height: 20px;
      display: inline-block;
      background: url('~assets/image/del.png') no-repeat center;
      background-size: contain;
      &:hover {
        background-image: url('~assets/image/del_hover.png');
      }
    }
    em.drag {
      position: absolute;
      top: 50%;
      right: 30px;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 20px;
      height: 20px;
      color: transparent;
      background: url('~assets/image/move-icon.svg') no-repeat center;
      background-size: contain;
      &:hover {
        opacity: 0.8;
        background-image: url('~assets/image/move-icon_hover.svg');
      }
    }
    .btn-box {
      margin-top: 30px;
      button {
        float: right;
        padding: 0;
        width: 140px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 0;
      }
    }
  }
}
</style>
