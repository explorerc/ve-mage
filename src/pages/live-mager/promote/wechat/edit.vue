<template>
  <div class="content">
    <p>创建微信通知</p>
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">通知标题：</div>
        <div class="from-content">
          <com-input :value.sync="titleValue" placeholder="请输入标题" :max-length="30"></com-input>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">消息模板：</div>
        <div class="from-content">
          <el-select v-model="tplValue" placeholder="请选择">
            <el-option v-for="item in tplOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">发送设置：</div>
        <div class="from-content">
          <el-select v-model="sendValue" placeholder="请选择">
            <el-option v-for="item in sendOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="from-row" v-if='pickDate'>
        <div class="from-title">选择时间：</div>
        <div class="from-content">
          <el-date-picker v-model="date" format='yyyy-MM-dd HH:mm:ss' value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">接收人：</div>
        <div class="from-content">
          <el-button @click='groudModal = true'>点击添加</el-button>
          <ol class='groupList'>
            <li>客户分组1(345)人 <span>删除</span><span>查看</span></li>
            <li>客户分组1(345)人 <span>删除</span><span>查看</span></li>
            <li>客户分组1(345)人 <span>删除</span><span>查看</span></li>
          </ol>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title"></div>
        <div class="from-content">
          <el-button @click='testModal = true'>测试</el-button>
          <el-button @click="save">保存</el-button>
        </div>
      </div>
    </div>
    <!-- 选择分组弹窗 -->
    <transition name='fade'>
      <div class="modal-cover" v-if='testModal' @click="closeModal">
        <div class='modal-box'>
          <h4>选择观众组 <span class='close' @click='testModal = false'>×</span></h4>
          <div class='content-box'>
            <com-tabs :value.sync="tabValue" position='left' type='card' customClass='choose-tab'>
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
    <transition name='fade'>
      <div class="modal-cover" v-if='testModal' @click="closeModal">
        <div class='modal-box'>
          <h4>微信测试发送 <span class='close' @click='testModal = false'>×</span></h4>
          <div class='content-box'>
            <p>每天只允许发送5条测试消息</p>
            <div class="from-row">
              <img src="/../asdasd.png" class='qrcode'>
            </div>
            <p>扫描二维码，授权后，即可收到测试消息</p>
            <p>当前可发送(<span>5</span>条)</p>
          </div>
        </div>
      </div>
    </transition>
    <div class="overview-box">
      <div class="header">微吼服务号</div>
      <div class="msg-box">
        <div class="msg-title">
          个人信息通知<span>8月10日</span>
        </div>
        <p class="tips">您关注的<span>{{webinarName}}</span>即将开始，赶快参加吧！</p>
        <p>标题：<span>{{titleValue}}</span></p>
        <p>时间：<span>{{date}}</span></p>
        <p>内容：<span>点击查看详情</span></p>
        <p>退订</p>
        <div class="footer">详情</div>
      </div>

    </div>
  </div>
</template>

<script>
  import createHttp from 'src/api/activity-manger'
  export default {
    data () {
      return {
        inviteId: this.$route.query.id, // 签名列表传过来的id
        activitId: this.$route.params.id,
        webinarName: '活动名字啊啊啊',
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
        sendOptions: [{
          value: 'AWAIT',
          label: '定时发送'
        }, {
          value: 'SEND',
          label: '立即发送'
        }, {
          value: 'DRAFT',
          label: '暂存为草稿'
        }],
        tplValue: '',
        sendValue: '',
        pickDate: false,
        date: new Date(),
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7
          }
        }
      }
    },
    created () {
      if (this.inviteId) {
        createHttp.queryWechat(this.inviteId).then((res) => {
          // console.log(res)
          this.titleValue = res.data.title
          this.tplValue = res.data.templateId
          this.sendValue = res.data.status
          this.date = res.data.sendTime
        }).catch((e) => {
          console.log(e)
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
          activityId: this.$route.params.id,
          templateId: this.tplValue,
          title: this.titleValue,
          groupId: '1', // 分组id
          status: this.sendValue.toLowerCase(),
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
          this.$router.push({name: 'promoteWechat', params: {id: this.activitId}})
        }).catch((res) => {
          this.$toast({
            content: '保存失败',
            position: 'center'
          })
        })
      }
    },
    watch: {
      sendValue: {
        handler (newValue) {
          newValue === 'AWAIT' ? this.pickDate = true : this.pickDate = false
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
.from-box {
  margin: 20px;
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
}

.groupList {
  li {
    padding: 0 10px;
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px 0px;
    span {
      cursor: pointer;
      float: right;
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

.overview-box {
  width: 375px;
  height: 500px;
  border: 1px solid #ccc;
  position: absolute;
  top: 100px;
  right: 100px;
  .header,
  .footer {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #000000;
    color: #fff;
  }
  .footer {
    background: #fff;
    color: #000000;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #ccc;
  }
  .msg-box {
    width: 300px;
    height: 400px;
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px auto;
    position: relative;
    .msg-title {
      text-align: left;
      font-size: 20px;
      span {
        display: block;
        text-align: left;
        font-size: 14px;
      }
    }
    p {
      text-align: left;
      margin: 10px 0px;
    }
    p.detal {
      span {
        color: #ccc;
        display: inline-block;
        text-align: left;
      }
    }
  }
}
.qrcode {
  display: block;
  margin: 20px auto;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}
</style>
