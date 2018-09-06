<template>
  <div class="content" v-ComLoading="loading" com-loading-text="拼命加载中">
    <div class="edit-wx-page live-mager">
      <div class="live-title">
        <span class="title">创建微信通知</span>
      </div>
      <div class='mager-box border-box'>
        <div class="from-box ">
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>通知标题：</div>
            <div class="from-content">
              <com-input :value.sync="titleValue" placeholder="请输入标题" :max-length="30" class='msg-title'></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>微信内容：</div>
            <div class="from-content">
              <com-input type="textarea" class="msg-content" :value.sync="wxContent" placeholder="请输入短信内容" :max-length="60"></com-input>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title">收信人：</div>
            <div class="from-content">
              <el-button class='default-button select-receiver' @click='groudModal = true'>选择收信人</el-button>
              <div class='tips-box '><i class='tips' @mouseover='showTips=true' @mouseout='showTips=false'></i><div class='tips-txt' v-if='showTips'>微信通知只能发送给关注该公众号或服务号的人群，已选收件人中没有关注微信的，将无法收到该通知。</div></div>
            </div>
          </div>
          <div class="from-row">
            <div class="from-title"><i class="star">*</i>发送时间：</div>
            <div class="from-content">
              <template>
                <el-radio v-model="sendSetting" label="SEND">立即发送</el-radio>
                <el-radio v-model="sendSetting" label="AWAIT">定时发送</el-radio>
              </template>
              <!-- <el-select v-model="sendValue" placeholder="请选择">
                <el-option v-for="item in sendOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select> -->
            </div>
          </div>
          <div class="from-row" v-if='pickDate'>
            <div class="from-title">选择时间：</div>
            <div class="from-content">
              <el-date-picker v-model="date" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
              </el-date-picker>
            </div>
          </div>
          <!-- 模拟手机预览 -->
          <com-phone :titleValue='titleValue' :date='date' :wxContent='wxContent' :webinarName='webinarName' :webinarTime='webinarTime'></com-phone>
        </div>
        <div class="btn-group">
          <el-button class='default-button' @click="testSend">测试发送</el-button>
          <el-button class='primary-button' @click="save">保存</el-button>
        </div>
      </div>
      <!-- 选择分组弹窗 -->
      <transition name='fade'>
        <div class="modal-cover" v-if='groudModal' @click="closeModal">
          <div class='modal-box'>
            <h4>选择观众组 <span class='close' @click='groudModal = false'>×</span></h4>
            <div class='content-box'>
              <com-tabs :value.sync="tabValue" position='left' type='card' class='choose-tab'>
                <com-tab label="分组" :index="1">
                  <div class="right">
                    <div class='top clearfix'>
                      <span>分组:<i>123</i>个</span>
                      <span class='search'><com-input :value.sync="searchTitle" placeholder="请输入关键字" ></com-input>搜索</span>
                    </div>
                    <ol class='list'>
                      <li :key='1' :class="{ choosed:groupIdx == 1 }"><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose' @click.prevent="chooseGroup(1)">{{groupIdx === 1 ? '已选择' : '选择'}}</em></li>
                      <li :key='2' :class="{ choosed:groupIdx == 2 }"><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose' @click.prevent="chooseGroup(2)">{{groupIdx === 2 ? '已选择' : '选择'}}</em></li>
                      <li :key='3' :class="{ choosed:groupIdx == 3 }"><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose' @click.prevent="chooseGroup(3)">{{groupIdx === 3 ? '已选择' : '选择'}}</em></li>
                      <li :key='4' :class="{ choosed:groupIdx == 4 }"><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose' @click.prevent="chooseGroup(4)">{{groupIdx === 4 ? '已选择' : '选择'}}</em></li>
                      <li :key='5' :class="{ choosed:groupIdx == 5 }"><span><i class='icon'></i>企业员工<i>(123)</i></span><em class='choose' @click.prevent="chooseGroup(5)">{{groupIdx === 5 ? '已选择' : '选择'}}</em></li>
                    </ol>
                    <div class='btm clearfix'>
                      <span>已选择:<i>啊啊啊</i><i>啊啊啊</i><i>啊啊啊</i></span>
                      <el-button>确定</el-button>
                    </div>
                  </div>
                </com-tab>
                <com-tab label="标签" :index="2">
                  <div class="right">
                    <div class='top clearfix'>
                      <span>标签:<i>123</i>个</span>
                      <span class='search'><com-input :value.sync="searchTitle" placeholder="请输入关键字" ></com-input>搜索</span>
                    </div>
                    <ol class='list'>
                      <li :key='10' :class="{ choosed:tagIdx == 1 }"><span><i class='icon'></i>标签<i>(123)</i></span><em class='choose' @click.prevent="chooseTag(1)">{{tagIdx === 1 ? '已选择' : '选择'}}</em></li>
                      <li :key='6' :class="{ choosed:tagIdx == 2 }"><span><i class='icon'></i>标签<i>(123)</i></span><em class='choose' @click.prevent="chooseTag(2)">{{tagIdx === 2 ? '已选择' : '选择'}}</em></li>
                      <li :key='7' :class="{ choosed:tagIdx == 3 }"><span><i class='icon'></i>标签<i>(123)</i></span><em class='choose' @click.prevent="chooseTag(3)">{{tagIdx === 3 ? '已选择' : '选择'}}</em></li>
                      <li :key='8' :class="{ choosed:tagIdx == 4 }"><span><i class='icon'></i>标签<i>(123)</i></span><em class='choose' @click.prevent="chooseTag(4)">{{tagIdx === 4 ? '已选择' : '选择'}}</em></li>
                      <li :key='9' :class="{ choosed:tagIdx == 5 }"><span><i class='icon'></i>标签<i>(123)</i></span><em class='choose' @click.prevent="chooseTag(5)">{{tagIdx === 5 ? '已选择' : '选择'}}</em></li>
                    </ol>
                    <div class='btm clearfix'>
                      <span>已选择:<i>啊啊啊</i><i>啊啊啊</i><i>啊啊啊</i></span>
                      <el-button>确定</el-button>
                    </div>
                  </div>
                </com-tab>
              </com-tabs>
            </div>
          </div>
        </div>
      </transition>
      <!-- 测试发送弹窗 -->
      <com-test  :imgUrl="qrImgurl" v-if='testModal'  @closeTest='closeTest' :type="'Wechat'"></com-test>
    </div>
  </div>
</template>

<script>
  import createHttp from 'src/api/activity-manger'
  import comTest from '../com-test'
  import comPhone from '../com-phone'
  export default {
    data () {
      return {
        inviteId: this.$route.query.id, // 签名列表传过来的id
        activityId: this.$route.params.id,
        groudModal: false,
        testModal: false,
        tabValue: 1,
        searchTitle: '',
        titleValue: '',
        groupIdx: 0,
        tagIdx: 0,
        tplOptions: [{
          value: 1,
          label: '活动邀请'
        }, {
          value: 2,
          label: '活动推荐'
        }],
        // sendOptions: [{
        //   value: 'AWAIT',
        //   label: '定时发送'
        // }, {
        //   value: 'SEND',
        //   label: '立即发送'
        // }, {
        //   value: 'DRAFT',
        //   label: '暂存为草稿'
        // }],
        // sendValue: '',
        sendSetting: '1',
        wxContent: '',
        qrImgurl: '',
        pickDate: false,
        date: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        },
        webinarName: '',
        webinarTime: '',
        loading: false,
        showTips: false
      }
    },
    created () {
      if (this.inviteId) {
        this.loading = true
        createHttp.queryWechat(this.inviteId).then((res) => {
          // console.log(res)
          this.titleValue = res.data.title
          this.sendSetting = res.data.status
          this.date = res.data.sendTime
          this.wxContent = res.data.desc
        }).catch((e) => {
          console.log(e)
        })
        createHttp.webinarInfo(this.activityId).then((res) => {
          if (res.code === 200) {
            this.webinarName = res.data.title
            this.webinarTime = res.data.startTime
            this.loading = false
          }
        }).catch((e) => {
          this.loading = false
        })
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.className === 'modal-cover') {
          this.groudModal = false
          this.testModal = false
          this.groupIdx = 0
          this.tagIdx = 0
        }
      },
      chooseGroup (idx) {
        this.groupIdx = idx
      },
      chooseTag (idx) {
        this.tagIdx = idx
      },
      save () {
        let data = {
          inviteId: this.inviteId,
          activityId: this.$route.params.id,
          title: this.titleValue,
          groupId: '1', // 分组id
          status: this.sendSetting.toLowerCase(),
          desc: this.wxContent,
          sendTime: this.date
        }
        // 更新
        createHttp.saveWechat(data).then((res) => {
          // console.log(res)
          this.$toast({
            content: '保存成功',
            position: 'center'
          })
          // 跳转到列表页面
          this.$router.push({ name: 'promoteWechat', params: { id: this.activityId } })
        }).catch((res) => {
          this.$toast({
            content: '保存失败',
            position: 'center'
          })
        })
      },
      testSend () {
        this.testModal = true
        this.qrImgurl = `http://aliqr.e.vhall.com/qr.png?t=${encodeURIComponent(`http://${window.location.host}/expand/wechat-invite/test-send?content=${this.wxContent}&activityId=${this.activityId}`)}`
        // const data = {
        //   content: this.wxContent,
        //   activityId: this.activityId
        // }
        // createHttp.sendTestWechat(data).then((res) => {
        //   if (res.code === 200) {
        //     this.imgUrl = res.data
        //   }
        // }).catch((e) => {
        //   this.$toast({
        //     content: '二维码生成失败',
        //     position: 'center'
        //   })
        // })
      },
      closeTest () {
      // debugger
        this.testModal = false
      }
    },
    watch: {
      sendSetting: {
        handler (newValue) {
          newValue === 'AWAIT' ? this.pickDate = true : this.pickDate = false
        }
      }
    },
    components: {
      comTest,
      comPhone
    }
  }
</script>
<style lang="scss" scoped src="../../css/live.scss">
</style>
<style lang="scss">
.edit-wx-page.live-mager .live-title {
  border-bottom: none;
}
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
.edit-wx-page.live-mager .from-title {
  line-height: 40px;
}
</style>
<style lang='scss' scoped>
@import '~assets/css/mixin.scss';

.edit-wx-page {
  // height: 730px;
  position: relative;
  .select-receiver {
    padding: 0;
    margin: 3px 0;
    width: 100px;
    height: 34px;
    line-height: 34px;
    border-radius: 20px;
    border: 1px solid rgba(136, 136, 136, 1);
  }
  .el-radio {
    padding: 12px 0;
    color: $color-font;
  }
  .from-title {
    color: $color-font-sub;
  }
  .btn-group {
    padding: 0;
    button {
      width: 140px;
      height: 40px;
      line-height: 40px;
    }
  }
  .mager-box {
    min-height: 730px;
  }
  .form-box {
    position: relative;
  }
  .tips-box {
    position: relative;
    display: inline-block;
    margin-left: 12px;
  }
  .tips {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('~assets/image/quesmark.svg') no-repeat center;
    background-size: contain;
    position: relative;
    top: 5px;
  }
  .tips-txt {
    position: absolute;
    padding: 14px;
    color: #fff;
    width: 282px;
    background: rgba(34, 34, 34, 0.8);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    line-height: 22px;
    top: -38px;
    right: -290px;
    z-index: 9;
  }
  .btn-group {
    display: block;
    margin: 0 auto;
    width: 295px;
    button {
      padding: 0px;
      width: 140px;
      height: 40px;
      line-height: 40px;
    }
  }
}

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: 9;
}
.msg-content,
.msg-title {
  width: 440px;
}
.msg-content {
  height: 90px;
}
.modal-box {
  width: 700px;
  height: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -350px;
  background: white;
  border-radius: 10px;
  border: 1px solid #666;
  padding: 30px;
  text-align: center;
  .top {
    span {
      float: left;
    }
    span.search {
      float: right;
    }
  }
  h4 {
    height: 40px;
    line-height: 40px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    .close {
      float: right;
    }
  }
  .content-box {
    padding: 10px 0px;
  }
  .btm {
    span {
      float: left;
    }
    button {
      float: right;
    }
    i {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ccc;
      margin: 0 3px;
    }
  }
}

.modal-box .list {
  & > li {
    height: 50px;
    line-height: 50px;
    text-align: left;
    .choose {
      cursor: pointer;
      float: right;
    }
  }
}

.modal-box .right {
  width: 500px;
}

.qrcode {
  display: block;
  margin: 20px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
.live-mager .mager-box .from-box {
  margin: 40px 0 0 0;
  height: 600px;
}
</style>
