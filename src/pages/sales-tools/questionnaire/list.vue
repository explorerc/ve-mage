<template>
  <div class="v-list">
    <div class="v-list-title">
      <span class="title">问卷列表</span>
    </div>
    <div class="v-tbns clearfix">
      <button class="v-add">
        新建问卷
      </button>
      <button class="v-view">
        查看数据
      </button>
    </div>
    <div class="v-table">
      <table>
        <thead>
          <tr>
            <td>
              问卷名称
            </td>
            <td>
              问卷数量
            </td>
            <td>
              修改时间
            </td>
            <td>
              操作
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="itemData in tableData" :key="itemData.id">
            <td>
              {{itemData.name}}
            </td>
            <td>
              {{itemData.count}}
            </td>
            <td>
              {{itemData.date}}
            </td>
            <td>
              <a :href="'/salesTools/questionnaire/edit/'+itemData.id">编辑</a><span>|</span>
              <a href="javascript:;" @click="view(itemData.id)">预览</a><span>|</span>
              <a href="javascript:;" class="v-del" @click="confirmDel(itemData.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination-box">
        <div class="page-pagination"
             v-if="total>pageSize">
          <ve-pagination :total="total"
                         :pageSize="pageSize"
                         :currentPage="searchParams.page"
                         @changePage="changePage" />
        </div>
      </div>
    </div>
    <message-box v-show="messageBoxViewShow"
       @handleClick="messageBoxClick"
       width="700px"
       class="message-box v-view"
       confirmText="确定"
       type='prompt'
       header='预览'>
      <div class="box">
        <div class="text">预览</div>
      </div>
      <div class="v-hearder">
        <img src="../../../assets/image/avatar@2x.png" alt="">
        <p class="v-title">
          产品调研
        </p>
        <p class="v-summary">
         欢迎参加调查！答卷数据仅用于统计分析，请放心填写。题目选项无对错之分，按照实际情况选择即可。感谢您的帮助！
        </p>
      </div>
      <div class="v-questions">
        <questions :dragData="dragData" :phoneData="phoneData" :isView="true"></questions>
      </div>
    </message-box>
  </div>
</template>
<script>
import VePagination from 'src/components/ve-pagination'
import questions from '../questionnaire/components/questions'
import { types as QTypes } from 'components/questionnaire/types'
export default {
  components: { VePagination,
    questions },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        count: 2,
        id: 1
      }, {
        date: '2016-05-03',
        name: '王小虎',
        count: 2,
        id: 2
      }, {
        date: '2016-05-04',
        name: '王小虎',
        count: 2,
        id: 3
      }, {
        date: '2016-05-05',
        name: '王小虎',
        count: 2,
        id: 4
      }, {
        date: '2016-05-06',
        name: '王小虎',
        count: 2,
        id: 5
      }],
      searchParams: {
        business_consumer_uid: 0,
        page: 1,
        page_size: 9
      },
      total: 20,
      pageSize: 6,
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
      ],
      phoneData: [],
      messageBoxViewShow: false
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  computed: {
  },
  methods: {
    getDataList () {

    },
    changePage (currentPage) {
      this.searchParams.page = currentPage
      this.getDataList()
    },
    view () {
      this.messageBoxViewShow = true
    },
    confirmDel (id) {
      this.$messageBox({
        header: '提示',
        width: '450px',
        content: '是否删除问卷',
        cancelText: '取消', // 不传递cancelText将只有一个确定按钮
        type: 'error',
        confirmText: '确定',
        handleClick: (e) => {
          if (e.action === 'cancel') {
          } else if (e.action === 'confirm') {
            this.del(id)
          }
        }
      })
    },
    del (id) {
      alert(id)
    },
    messageBoxClick (e) {
      if (e.action === 'cancel') {
        this.messageBoxViewShow = false
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.v-list /deep/ {
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
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
  .v-list-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .v-tbns {
    width: 100%;
    margin-bottom: 30px;
    button {
      float: right;
      width: 120px;
      height: 40px;
      border: 1px solid #4b5afe;
      line-height: 38px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 14px;
      color: #4b5afe;
      text-align: center;
      margin-top: 10px;
      &.v-add {
        border-color: #ffd021;
        background-color: #ffd021;
        color: #222;
        margin-left: 10px;
      }
      &:hover {
        background-color: #fdd43f;
        border-color: #fdd43f;
        color: #222;
      }
      &:active {
        background-color: #eec11a;
        border-color: #eec11a;
        color: #222;
      }
    }
  }
  .v-table {
    width: 100%;
    padding: 20px 20px 40px;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    table {
      width: 100%;
      border-radius: 4px 4px 0 0;
      overflow: hidden;
      thead {
        background-color: #f5f5f5;
        td {
          height: 60px;
          line-height: 61px;
          padding: 0 30px;
        }
      }
      tbody {
        tr {
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #e2e2e2;
          td {
            padding: 0 30px;
            a {
              &:hover {
                color: #4b5afe;
                &.v-del {
                  color: #fc5659;
                }
              }
            }
            span {
              display: inline-block;
              padding: 0 2px;
            }
          }
          &:hover {
            background-color: #e9ebff;
          }
        }
      }
    }
  }
  .pagination-box {
    text-align: center;
    margin-top: 70px;
  }
  .ve-message-box {
    .ve-message-box__header {
      background-color: rgba(0, 0, 0, 0) !important;
      .prompt-title {
        display: none;
      }
    }
    .ve-message-box__btns {
      display: none;
    }
  }
  .box {
    width: 145px;
    height: 85px;
    background-color: #ffd021;
    color: #fff;
    /* Rotate div */
    transform: rotate(-45deg);
    position: absolute;
    left: -50px;
    top: -50px;
  }
  .text {
    position: absolute;
    bottom: 9px;
    left: 33px;
    font-size: 16px;
  }
  .v-hearder {
    width: 620px;
    margin: 0 auto;
    padding: 20px 0 30px;
    border-bottom: 2px solid #ffd021;
    img {
      margin: 0 auto;
      display: block;
    }
    .v-title {
      max-width: 500px;
      word-break: break-all;
      text-align: center;
      font-size: 30px;
      margin: 50px auto 0;
    }
    .v-summary {
      max-width: 500px;
      word-break: break-all;
      text-align: center;
      font-size: 16px;
      margin: 18px auto 0;
    }
  }
}
</style>
