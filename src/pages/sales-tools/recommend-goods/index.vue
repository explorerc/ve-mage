<template>
  <div id="goods-list">
    <div class="operation">
      <el-button size="mini" @click="createGoods" :disabled="tableData.length>20" round>新建商品</el-button>
      <el-button size="mini" @click="check" round>查看活动数据</el-button>
    </div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="date" label="封面图"></el-table-column>
        <el-table-column prop="date" label="商品名称"></el-table-column>
        <el-table-column prop="date" label="原始价格"></el-table-column>
        <el-table-column prop="address" label="优惠价格"></el-table-column>
        <el-table-column prop="address" label="优惠价格"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="text" @click="handleShelf(scope.$index, scope.row)">上下架</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">排序</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      createGoods () {
        this.$router.push('/salesTools/recommendGoodsInfo')
      },
      check () {
      },
      handleShelf () {
      },
      handleEdit (index, row) {
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
      .table-box .el-table .el-button {
        color: blue;
      }
    }
  }
</style>
