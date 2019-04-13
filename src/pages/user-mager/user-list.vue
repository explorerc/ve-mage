<template>
    <div class="user-list">
        <header>
            <p>粉丝列表</p>
            <!--<div class='btn-box'>-->
                <!--<span>共{{tableData.length}}件商品</span>-->
                <!--<com-button class="add-goods primary-button" round  @click="createGoods" >-->
                    <!--新建订单-->
                <!--</com-button>-->
            <!--</div>-->
        </header>
        <div class="table-box">
            <table border="1">
                <thead>
                <tr>
                    <th>订单id</th>
                    <th>用户id</th>
                    <th>商品id</th>
                    <th>商品数量</th>
                    <th>是否付款</th>
                    <th>是否发货</th>
                    <th>物流单号</th>
                    <th>是否收获</th>
                    <th style="width: 15%;min-width: 140px;">操作</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,ind) in tableData" :key="ind">
                        <td>{{row.id<10?`0${row.id}`:row.id}}</td>
                        <td>{{row.userId}}</td>
                        <td>{{row.goodId}}</td>
                        <td>{{row.number}}</td>
                        <td>{{row.isPayed === 1 ? '已付款':'未付款'}}</td>
                        <td>{{row.isSend === 1 ? '已发货':'未发货'}}</td>
                        <td>{{row.logistics}}</td>
                        <td>{{row.isRecieved === 1 ? '已收获':'未收货'}}</td>
                        <td style="width: 15%;min-width: 140px;">
                            <div class='btn-box'>
                                <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                                <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
                                <el-button class="item move-btn" size="mini" type="text" title='拖拽可调整商品排序'>移动</el-button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  import EventBus from 'src/utils/eventBus'

  export default {
    name: 'user-list',
    data () {
      return {}
    },
    created () {
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '粉丝管理',
        url: `/userMager/list/`
      }])
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">

</style>