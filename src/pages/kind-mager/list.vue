<template>
  <div id="kind-list">
    <header>
      <p>分类管理</p>
      <div class='btn-box'>
        <!--<span>共{{tableData.length}}件商品</span>-->
        <com-button class="add-goods primary-button" round  @click="createGoods" >
          新建分类
        </com-button>
      </div>
    </header>
    <div class="table-box">
      <table border="1">
        <thead>
        <tr>
          <th>分类id</th>
          <th>分类名称</th>
          <th style="width: 15%;min-width: 140px;">操作</th>
        </tr>
        </thead>
        <draggable element="tbody">
          <tr v-for="(row,ind) in tableData" :key="ind">
            <td>{{row.id<10?`0${row.id}`:row.id}}</td>
            <td>{{row.name}}</td>
            <td style="width: 15%;min-width: 140px;">
              <div class='btn-box'>
                <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
                <el-button type="text" @click="handleDelete(row,ind)">删除</el-button>
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
  // import goodsServer from 'src/api/salesGoods-service'
  import EventBus from 'src/utils/eventBus'

  export default {
    components: { draggable },
    data () {
      return {
        tableData: [
          { 'id': 1,
            'userId': 2,
            'goodId': 888,
            'isPayed': 3,
            'isSend': 0,
            'logistics': '',
            'isRecieved': 0,
            'number': 2
          }],
        isInit: false,
        timerShelf: null,
        isShowlive: null,
        isNoGoods: false,
        isCreateGood: false
      }
    },
    created () {
      this.getList()
      // this.isShowLiveData()
      EventBus.$emit('breads', [{
        title: '分类管理'
      }, {
        title: '分类列表',
        url: `/goodMager/list/`
      }])
    },
    mounted () {
      this.getList()
    },
    watch: {
      tableData: {
        handler (val, oldVal) {
          if (val.length >= 1) {
            if (this.isInit) {
              // this.sortGoods()
            }
          }
        },
        deep: true
      }
    },
    methods: {
      getList () {
        // this.$get(goodsServer.GOODS_LISTS, {})
        //   .then(res => {
        //     if (res.status === 200) {
        //       this.tableData = res.data
        //       console.log(this.tableData)
        //       if (this.tableData.length < 1) {
        //         this.isNoGoods = true
        //       } else {
        //         this.isNoGoods = false
        //       }
        //     }
        //   })
        //   .catch(() => {
        //     this.tableData = []
        //   })
      },
      createGoods () {
        this.$router.push('/orderMager/edit/create')
      },
      handleEdit (id) {
        this.$router.push(`/orderMager/edit/${id}/update`)
      },
      changeTitle (id) {
        this.titleId = id
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import '~assets/css/mixin.scss';

    #kind-list {
        font-family: PingFangSC-Regular;
        /*padding: 0px 100px 34px;*/
        margin: 0 auto;
        @media all and (min-width: 1600px) {
            width: 1366px;
        }

        /* 设备宽度小于 1600px */
        @media all and (max-width: 1600px) {
            width: 1019px;
        }
        /deep/ {
            header {
                position: relative;
                overflow: hidden;
                text-align: right;
                line-height: 60px;
                margin-bottom: 7px;
                margin-top: 32px;
                p {
                    float: left;
                    height: 60px;
                    font-size: 24px;
                    font-weight: 400;
                    color: rgba(34, 34, 34, 1);
                    line-height: 60px;
                }
                .default-button,
                .primary-button {
                    transition: unset;
                    height: 30px;
                    line-height: 30px;
                }

                .btn-box {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 0;
                    line-height: 30px;
                    .com-button {
                        padding: 0 20px;
                    }
                    .add-goods {
                        /*width: 130px;*/
                        padding: 0 20px;
                        margin-left: 20px;
                    }
                }
            }
            .table-box {
                /*margin-top: 22px;*/
                padding: 30px;
                border: 1px solid #e2e2e2;
                border-radius: 4px;
                background-color: white;
                min-height: 550px;
                table thead tr th,
                table tbody tr td {
                    border-color: #ebeef5;
                    font-size: 14px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    border: none;
                    thead,
                    tbody {
                        height: 47px;
                        line-height: 47px;
                        th {
                            border-top-color: transparent !important;
                            background-color: #f6f6f6;
                        }
                        th,
                        td {
                            color: #222222;
                            padding-left: 20px;
                            font-weight: 400;
                            border-right-color: transparent !important;
                            border-left-color: transparent !important;
                            .btn-box {
                                position: relative;
                            }
                            &:nth-of-type(1) {
                                width: 8%;
                            }
                            &:nth-of-type(2) {
                                width: 8%;
                            }
                            &:nth-of-type(3) {
                                width: 26%;
                            }
                            &:nth-of-type(4) {
                                width: 8%;
                            }
                            &:nth-of-type(5) {
                                width: 10%;
                            }
                            &:nth-of-type(6) {
                                width: 8%;
                            }
                            &:nth-of-type(7) {
                                width: 25%;
                                button {
                                    color: #222222;
                                    &:hover {
                                        color: #4B5AFE;
                                    }
                                }
                            }
                            .move-btn {
                                span {
                                    position: absolute;
                                    top: 50%;
                                    left: 140px;
                                    transform: translate(-50%, -50%);
                                    display: inline-block;
                                    width: 20px;
                                    height: 20px;
                                    color: transparent;
                                    background: url('~assets/image/move-icon.svg') no-repeat center;
                                    background-size: contain;
                                    &:hover {
                                        opacity: 0.8;
                                    }
                                }
                            }
                            .cover_img {
                                margin: 10px auto 10px 0;
                                background: no-repeat center;
                                background-size: contain;
                                width: 60px;
                                height: 60px;
                                img {
                                    width: 60px;
                                    height: 60px;
                                }
                            }
                        }
                        td.dis-prices {
                            color: #fc5659;
                        }
                        /*  tr {
                            display: table;
                            width: 100%;
                            table-layout: fixed;
                          }*/
                        tr:hover {
                            background-color: #f0f1fe;
                        }
                    }
                    /* thead {
                        width: calc(100% - 100px);
                      }
                      tbody {
                        display: block;
                        height: 550px;
                        overflow-y: scroll;
                      }*/
                }
            }

            .no-goods {
                text-align: center;
                background-color: #ffffff;
                border-radius: 4px;
                border: 1px solid #e2e2e2;
                min-height: 550px;
                img {
                    width: 150px;
                    height: 150px;
                    margin: 130px auto 27px;
                }

                p {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(85, 85, 85, 1);
                    margin: 0 auto 30px;
                }
                button {
                    margin-bottom: 90px;
                    span {
                        margin: auto 40px;
                    }
                }
            }
        }
    }
</style>
