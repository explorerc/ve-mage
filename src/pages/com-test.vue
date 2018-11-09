<template>
  <div>
    <div class="test-wrap">
      <draggable v-model="dragData"
                 :options="{handle:'.sort'}">
        <com-q :ref="`comEdit${index}`"
              v-for="(item,index) in dragData"
               :value.sync="item"
               :edit="true"
               :index="index+1"
               :key="index">></com-q>
      </draggable>
    </div>
    <div class="test-wrap1">
      <draggable v-model="dragData"
                 :options="{handle:'.sort'}">
        <com-q :ref="`com${index}`"
               v-for="(item,index) in dragData"
               :value.sync="item"
               :index="index+1"
               :key="index"></com-q>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { types as QTypes } from 'components/questionnaire/types'
import red from 'components/red-packet-rain/com'
import { Toast } from 'components/common/notification'
import qq from 'components/questionnaire/wrap'

export default {
  components: {
    comRed: red,
    comQ: qq,
    draggable
  },
  data () {
    return {
      tIndex: 0,
      dragData: [
        {
          title: '',
          errorTip: '',
          type: QTypes.RADIO,
          required: true,
          detail: {
            list: [
              {
                value: ''
              },
              {
                value: ''
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
      ],
      at: 1,
      tabValue: 1,
      tabValue1: '1',
      dialogVisible: true,
      show1: false,
      show: false,
      header: 'Notification Title',
      content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      id: 1,
      outValue: 'asd',
      exParams: {
        joinID: '123123'
      },
      fileSize: 200000
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs['comEdit0'][0].$children[1].validate()
    }, 2000)
  },
  methods: {
    uploadSelected (data) {
      console.log('选中文件', data)
    },
    uploadProgress (data) {
      console.log('上传进度:', data)
    },
    uploadLoad (data) {
      console.log('上传成功:', data)
    },
    uploadError (data) {
      console.log('上传失败:', data)
    },
    uploadOver () {
      console.log('上传完毕')
    },
    testCom () {
      this.show1 = true
      this.at = 1
    },
    testCom1 () {
      this.show1 = true
      this.at = 2
    },
    testFun () {
      Toast({
        header: `Notification Title${this.id++}`,
        content: 'I will never close automatically. I will be close automatically. I will never close automatically.',
        close: () => {
          console.log('close')
        },
        closed: () => {
          console.log('closed')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.test-drag {
  // margin: 20px 0 0 100px;
  // width: 600px;
  // height: 600px;
  // overflow: auto;
  .custom-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #dadada;
    border-bottom: 0;
    cursor: pointer;
  }
  .com-drag > div:nth-last-child(1) {
    border-bottom: 1px solid #dadada;
  }
}
.test-wrap {
  width: 600px;
  position: absolute;
  top: 10px;
  left: 20px;
  bottom: 10px;
  overflow: auto;
}
.test-wrap1 {
  width: 600px;
  position: absolute;
  top: 10px;
  left: 640px;
  bottom: 10px;
  overflow: auto;
}
.test-footer {
  padding: 10px 0;
}
.test-upload {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #dadada;
}
</style>
