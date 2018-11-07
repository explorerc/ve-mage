<template>
  <div class="question-edit-wrap">
    <div class="edit-header">
      <span class="title">新建问卷</span>
      <com-button>预览</com-button>
      <com-button>保存</com-button>
    </div>
    <div class="edit-content">
      <div class="edit-content-left">
        <div>
          <div class="fixed-info">
            <span>个人信息</span>
            <ul>
              <li :class="{disabled:!base.name}">姓名</li>
              <li :class="{disabled:!base.phone}">手机号</li>
              <li :class="{disabled:!base.email}">邮箱</li>
              <li :class="{disabled:!base.sex}">性别</li>
              <li :class="{disabled:!base.birth}">生日</li>
              <li :class="{disabled:!base.area}">地域</li>
              <li :class="{disabled:!base.industry}">行业</li>
              <li :class="{disabled:!base.position}">职位</li>
              <li :class="{disabled:!base.edu}">教育水平</li>
            </ul>
          </div>
          <div class="custom-info">
            <span>题型</span>
            <ul>
              <li>单选题</li>
              <li>多选题</li>
              <li>下拉题</li>
              <li>问答题</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="edit-content-main">
        <div class="base-info">
          <com-input placeholder="问卷标题"
                     :max-length="30"
                     class="q-title"></com-input>
          <com-input placeholder="问卷描述"
                     :max-length="300"
                     class="q-des"></com-input>
          <ve-upload title="上传头图，推荐尺寸为800x180px，大小不超过2M"
                     accept="png|jpg|jpeg|bmp"
                     :fileSize="2048"></ve-upload>
        </div>
        <div class="question-info">
          <draggable v-model="dragData"
                     :options="{handle:'.sort'}">
            <com-question v-for="(item,index) in dragData"
                          :value.sync="item"
                          :edit="true"
                          :index="index+1"
                          :key="index">></com-question>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import VeUpload from 'src/components/ve-upload-image'
import question from 'components/questionnaire/wrap'
import { types as QTypes } from 'components/questionnaire/types'
export default {
  components: {
    draggable,
    VeUpload,
    comQuestion: question
  },
  data () {
    return {
      base: {
        name: true,
        phone: true,
        email: true
      },
      dragData: [
        {
          title: '单选题',
          errorTip: '',
          type: QTypes.RADIO,
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '单选题'
          }
        },
        {
          title: '多选题',
          errorTip: '',
          type: QTypes.CHECKBOX,
          value: [],
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '多选题'
          }
        },
        {
          title: '下拉题',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '选项'
              }
            ]
          },
          ext: {
            name: '下拉题'
          }
        },
        {
          title: '问答题',
          errorTip: '',
          type: QTypes.TEXT,
          style: '',
          required: false,
          detail: {
            format: 'textarea',
            max: 300
          },
          ext: {
            name: '问答题'
          }
        },
        {
          title: '姓名',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'input',
            max: 10
          },
          ext: {
            name: '姓名'
          }
        },
        {
          title: '手机号',
          errorTip: '',
          type: QTypes.TEXT,
          required: true,
          detail: {
            format: 'mobile',
            max: 11
          },
          verification: 'Y',
          ext: {
            name: '手机号'
          }
        },
        {
          title: '邮箱',
          errorTip: '',
          type: QTypes.TEXT,
          required: false,
          detail: {
            format: 'email',
            max: 30
          },
          ext: {
            name: '邮箱'
          }
        },
        {
          title: '性别',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '男'
              },
              {
                value: '女'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '性别'
          }
        },
        {
          title: '生日',
          errorTip: '',
          type: QTypes.DATE,
          required: true,
          detail: {
            format: 'yyyy-MM-dd'
          },
          ext: {
            name: '生日'
          }
        },
        {
          title: '地域',
          errorTip: '',
          type: QTypes.AREA,
          required: true,
          detail: {
            level: 'address'
          },
          ext: {
            name: '地域'
          }
        },
        {
          title: '行业',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: 'IT/互联网'
              },
              {
                value: '电子/通信/硬件'
              },
              {
                value: '金融'
              },
              {
                value: '交通/贸易/物流'
              },
              {
                value: '消费品'
              },
              {
                value: '机械/制造'
              },
              {
                value: '能源/矿产环保'
              },
              {
                value: '制药/医疗'
              },
              {
                value: '专业服务'
              },
              {
                value: '教育/培训'
              },
              {
                value: '广告/媒体/娱乐/出版'
              },
              {
                value: '房地产/建筑'
              },
              {
                value: '服务业'
              },
              {
                value: '政府/非盈利机构/其它'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '教育水平'
          }
        },
        {
          title: '职位',
          type: QTypes.TEXT,
          required: true,
          detail: {
            format: 'input',
            max: 10
          },
          ext: {
            name: '职位'
          }
        },
        {
          title: '教育水平',
          errorTip: '',
          type: QTypes.SELECT,
          required: true,
          detail: {
            list: [
              {
                value: '博士'
              },
              {
                value: '硕士'
              },
              {
                value: '本科'
              },
              {
                value: '大专'
              },
              {
                value: '高中'
              }
            ]
          },
          ext: {
            fixedness: true,
            name: '教育水平'
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.question-edit-wrap {
  overflow: hidden;
  margin: 0 auto;
  height: 100%;
  min-width: 1019px;
  color: #222;
  position: relative;
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
  }
  /deep/ {
    .edit-header {
      line-height: 64px;
      font-size: 24px;
      text-align: right;
      .title {
        float: left;
      }
      .com-button {
        width: 115px;
        height: 40px;
        line-height: 40px;
        padding: 0;
      }
    }
    .edit-content {
      position: absolute;
      width: 100%;
      top: 65px;
      bottom: 30px;
      font-size: 14px;
      .edit-content-left {
        height: 100%;
        width: 325px;
        padding: 0 50px;
        float: left;
        background-color: white;
        border: 1px solid #dadada;
        .fixed-info {
          margin-top: 30px;
        }
        .custom-info {
          margin-top: 50px;
        }
        ul {
          margin-top: 10px;
          overflow: hidden;
        }
        li {
          width: 95px;
          height: 38px;
          margin-right: 32px;
          margin-bottom: 15px;
          float: left;
          line-height: 38px;
          text-align: center;
          border-radius: 4px;
          border: 1px solid #dadada;
          cursor: pointer;
          &:nth-child(2n) {
            margin-right: 0;
          }
        }
      }
      .edit-content-main {
        margin-left: 335px;
        background-color: white;
        border: 1px solid #dadada;
        height: 100%;
        position: relative;
        .base-info {
          margin: auto;
          width: 540px;
          margin-top: 20px;
          border: 1px solid #dadada;
          padding: 10px;
          .com-input {
            input {
              height: 30px;
              line-height: 30px;
            }
          }
          .q-title {
            margin-bottom: 10px;
            width: 100%;
          }
          .q-des {
            margin-bottom: 10px;
            width: 100%;
          }
          .ve-upload-box {
            width: 100%;
            height: 90px;
            .upload-icon {
              margin: 0 auto 0 auto;
            }
          }
        }
        .question-info {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 222px;
          bottom: 10px;
          width: 540px;
          padding: 10px;
          border: 1px solid #dadada;
          overflow: auto;
        }
      }
    }
  }
}
</style>
