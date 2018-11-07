<template>
  <div id="goods-list">
    <header>
      <p>商品推荐</p>
      <el-button size="mini" @click="createGoods" :disabled="tableData.length>20" round>新建商品（{{tableData.length}} / 20）</el-button>
      <el-button size="mini" @click="check" round>查看活动数据</el-button>
    </header>
    <div class="table-box">
      <table border="1">
        <thead>
        <tr>
          <th>序号</th>
          <th>封面图</th>
          <th>商品名称</th>
          <th>原始价格</th>
          <th>优惠价格</th>
          <th>操作</th>
        </tr>
        </thead>
        <draggable element="tbody" v-model="tableData" :options="{handle:'.item'}">
          <tr v-for="(item,ind) in tableData" :key="ind">
            <td>{{ind+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.name}}</td>
            <td> <del>{{item.address}}</del></td>
            <td>{{item.address}}</td>
            <td>
              <div>
                <el-button size="mini" type="text" @click="handleEdit(ind)">编辑</el-button>
                <el-button size="mini" type="text" @click="handleShelf(ind)">上下架</el-button>
                <el-button size="mini" type="text" @click="handleDelete(ind)">删除</el-button>
                <el-button class="item" size="mini" type="text" @click="handleDelete(ind)">排序</el-button>
              </div>
            </td>
          </tr>
        </draggable>
      </table>
    </div>

  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    components: {
      draggable
    },
    data () {
      return {
        tableData: [
          {
            id: '1',
            date: '2016-05-02',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 100 弄'
          },
          {
            id: '2',
            date: '2016-05-04',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 200 弄'
          },
          {
            id: '3',
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 300 弄'
          },
          {
            id: '4',
            date: '2016-05-03',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 400 弄'
          }
        ],
        arr: [1, 2, 3, 4, 5, 6, 7],
        myArray: [
          {
            id: 1,
            name: 1
          },
          {
            id: 2,
            name: 2
          },
          {
            id: 3,
            name: 3
          },
          {
            id: 4,
            name: 5
          }
        ]
      }
    },
    methods: {
      goSet () {
      },
      createGoods () {
        this.$router.push('/salesTools/recommendGoodsInfo')
      },
      check () {
      },
      handleShelf () {
      },
      handleEdit (index, row) {
        this.$router.push('/salesTools/recommendGoodsInfo')
        console.log(this.tableData)
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      }
    }
  }
</script>
<style lang="scss" scoped>
  #goods-list {
    padding: 40px 100px;
    /deep/ {
      header {
        overflow: hidden;
        text-align: right;
        p {
          float: left;
        }
      }
      .table-box {
        margin-top: 22px;
        padding: 30px;
        border: 1px dashed #cccccc;
        table thead tr th, table tbody tr td {
          border-color: #ebeef5;
          font-size: 14px
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border: none;
          thead, tbody {
            height: 47px;
            line-height: 47px;
            th, td {
              color: #222222;
              padding-left: 10px;
              font-weight: 400;
              &:nth-of-type(1) {
                width: 5%;
              }
              &:nth-of-type(2), &:nth-of-type(3) {
                width: 15%;
              }
              &:nth-of-type(4), &:nth-of-type(5) {
                width: 20%;
              }
              &:nth-of-type(6) {
                width: 25%;
                span{
                  color: #2878FF;
                }
              }
            }
            tr:hover {
              background-color: #f5f7fa;
            }
          }
        }
      }
    }
  }
</style>
