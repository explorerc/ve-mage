<template>
  <div class="invite-page mager-box">
    <div class="from-box">
      <div class="from-row">
        <div class="from-title">观众组：</div>
        <div class="from-content">
          <el-button @click='groudModal = true'>选择分组</el-button>
          <el-button @click='importModal = true'>倒入分组</el-button>
          <el-button>下载模版</el-button>
        </div>
      </div>
      <div class="from-row">
        <div class="from-title">已选择：</div>
        <div class="from-content">
          <ul class='group'>
            <li><span>分组1</span><i>删除</i></li>
            <li><span>分组2</span><i>删除</i></li>
          </ul>
        </div>
      </div>
       <div class="from-row">
        <div class="from-title">观看校验：</div>
        <div class="from-content">
         <el-radio v-model="radioVerify" label="1">校验手机号</el-radio>
        <el-radio v-model="radioVerify" label="2">校验邮箱</el-radio>
        </div>
        <span>邀请观看需要校验手机号或邮箱，从而帮您获取到更加精准的观众信息</span>
      </div>
    </div>
    <!-- 选择分组弹窗 -->
    <transition name='fade'>
      <div class="modal-cover" v-if='groudModal' @click="closeModal">
        <div class='modal-box'>
          <h4>选择观众组 <span class='close' @click='groudModal = false'>×</span></h4>
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
    <!-- 倒入观众组弹窗 -->
    <transition name='fade'>
      <div class="modal-cover" v-if='importModal' @click="closeModal">
        <div class='modal-box'>
          <h4>倒入观众组 <span class='close' @click='importModal = false'>×</span></h4>
          <div class="content-box import-box">
            <p class='import-title'>上传名单：<span>模版下载</span></p>
            <div class="import-content">
              <com-upload accept="png|jpg|jpeg|bmp|gif" actionUrl="/api/edu/database/doc-upload" inputName="resfile" :fileSize="1024" @selected="uploadSelected" @progress="uploadProgress" @error="uploadError" @over="uploadOver">
                <div class="test-upload">
                  <div class="upload-btn" v-if='uploadData.status === 1'>选择文件</div>
                  <div class="upload-btn" v-else>{{uploadData.name}}</div>
                </div>
              </com-upload>
              <em v-if='uploadData.status === 1'>请使用微吼指定模版文件上传</em>
              <em v-if='uploadData.status === 2'>文件上传中38%</em>
              <em v-if='uploadData.status === 3'>上传成功,监测到{{uploadData.infoNum}}位观众信息</em>
              <div class='from-row'>
                <div class="from-title">导入规则：</div>
                <div class="from-content">
                  <el-radio v-model="radio" label="1">创建新的分组</el-radio>
                </div>
              </div>
              <div class='from-row'>
                <div class="from-title">分组名称：</div>
                <div class="from-content">
                  <com-input :value.sync="renameGroup" placeholder="请输入分组名称" :max-length="10"></com-input>
                </div>
              </div>
              <div class='from-row tag-box'>
                <div class="from-title">客户标签：</div>
                <div class="from-content">
                  <ol class='clearfix'>
                    <li>外部导入</li>
                    <li>内部员工</li>
                    <li>爱上接电话</li>
                  </ol>
                  <el-button class='add-tag' @click='addTag=true'>添加</el-button>
                  <div class='tag-list' v-if='addTag'>
                    <p class='title'>选择合适的标签 <span class='close' @click='addTag=false'>×</span></p>
                    <span>客户属性标签</span>
                    <div class='tag-box clearfix'>
                      <el-checkbox-group v-model="attrTagArr">
                        <el-checkbox-button v-for="city in attrTag" :label="city" :key="city">{{city}}</el-checkbox-button>
                      </el-checkbox-group>
                    </div>
                    <span>客户行为标签</span>
                    <div class='tag-box clearfix'>
                       <el-checkbox-group v-model="habitTagArr">
                        <el-checkbox-button v-for="city in habitTag" :label="city" :key="city">{{city}}</el-checkbox-button>
                      </el-checkbox-group>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <el-button>保存</el-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        groudModal: false,
        importModal: false,
        tabValue: 1,
        radio: '1',
        searchTitle: '',
        groupIdx: 0,
        tagIdx: 0,
        attrIdx: 0,
        habitIdx: 0,
        renameGroup: '',
        uploadData: {
          status: 1,
          progress: '',
          name: '',
          infoNum: 10
        },
        addTag: false,
        attrTag: ['上海', '北京', '广州', '深圳'],
        habitTag: ['上海2', '北京2', '广州2', '深圳2'],
        attrTagArr: [],
        habitTagArr: [],
        radioVerify: ''
      }
    },
    created () {
      this.radioVerify = '1'
    },
    methods: {
      closeModal (e) {
        if (e.target.className === 'modal-cover') {
          this.groudModal = false
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
      uploadSelected (file) {
        this.uploadData.status = 2
        this.uploadData.name = file.data[0].name
      },
      uploadProgress (e) {
        // console.log(e)
        this.uploadData.status = e.percent
      },
      uploadOver (e) {
        this.uploadData.status = 3
      },
      uploadError (e) {
        // console.log(e)
      }
    },
    watch: {
      tagIdx: function (res) {},
      groupIdx: function (res) {}
    }
  }
</script>

<style lang='scss' scoped>
@import '~assets/css/variable';
@import '~assets/css/base';
.group {
  span {
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  i {
    cursor: pointer;
  }
}

.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.5);
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

.list {
  li {
    height: 50px;
    line-height: 50px;
    i.icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100px;
      border: 1px solid #ccc;
    }
    span {
      float: left;
    }
    em {
      float: right;
    }
  }
}

.choose-tab /deep/ {
  .tab-content {
    border-left: 1px solid #ccc;
    padding: 0 20px;
    width: 530px;
    height: 370px;
  }
}

.import-box {
  .import-title {
    text-align: left;
    span {
      cursor: pointer;
      float: right;
    }
  }
  .upload-btn {
    width: 630px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .com-upload {
    margin: 10px 0;
  }
}

.import-content {
  .from-row {
    display: flex;
    padding: 10px;
    .from-title {
      // width: 180px;
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
      text-align: left;
      .input-box {
        width: 400px;
      }
    }
  }
  em {
    display: block;
    text-align: left;
  }
  .tag-box {
    li {
      cursor: default;
      float: left;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin: 0 5px;
    }
  }
  .tag-list {
    position: absolute;
    background: blanchedalmond;
    border-radius: 5px;
    width: 400px;
    padding: 20px;
    .title {
      // height: 50px;
      // line-height: 50px;
      text-align: left;
      .close {
        float: right;
      }
    }
    span {
      display: block;
      margin: 10px 0;
    }
    .tag-box em {
      cursor: pointer;
      float: left;
      padding: 5px 10px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .tag-box em.active {
      border-color: orange;
      color: orange;
    }
  }
}
</style>
