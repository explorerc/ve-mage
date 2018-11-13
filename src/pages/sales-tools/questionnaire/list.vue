<template>
  <div class="v-list">
    <div class="v-list-title">
      <span class="title">问卷列表</span>
    </div>
    <div class="v-tbns">
      <button>
        查看数据
      </button>
      <button>
        新建问卷
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
          <tr>
            <td>
              123
            </td>
            <td>
              123
            </td>
            <td>
              123
            </td>
            <td>
              123
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        qq: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        qq: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        qq: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        qq: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  beforeDestroy () {
  },
  created () {
  },
  computed: {
    isBorder () {
      return !(this.dragData.length > 0)
    }
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
.v-list {
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
    text-align: right;
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
      thead {
        background-color: #f5f5f5;
        td {
          height: 60px;
          line-height: 61px;
        }
      }
    }
  }
}
</style>
