<template>
  <div id="kind-list">
    <header>
      <p>粉丝列表</p>
    </header>
    <div class="table-box">
      <table border="1">
        <thead>
        <tr>
          <th>id</th>
          <th>名字</th>
          <th>openId</th>
          <th>昵称</th>
          <th>地址</th>
          <th>电话</th>
          <!--<th>postCode</th>-->
          <th>生日</th>
          <th style="width: 15%;min-width: 140px;">操作</th>
        </tr>
        </thead>
        <draggable element="tbody">
          <tr v-for="(row,ind) in tableData" :key="ind">
            <td>{{row.id<10?`0${row.id}`:row.id}}</td>
            <td>{{row.name}}</td>
            <td>{{row.openid}}</td>
            <td>{{row.nickname}}</td>
            <td>{{row.address}}</td>
            <td>{{row.tel}}</td>
            <!--<td>{{row.postCode}}</td>-->
            <td>{{row.birth}}</td>
            <td style="width: 15%;min-width: 140px;">
              <div class='btn-box'>
                <el-button type="text" @click="handleEdit(row.id)">编辑</el-button>
              </div>
            </td>
          </tr>
        </draggable>
      </table>
      <div class="page-pagination" v-if="total > searchParams.pageSize">
        <ve-pagination :total="total"
                       :pageSize="searchParams.pageSize"
                       :currentPage="currentPage"
                       @changePage="changePage"/>
      </div>
    </div>
    <message-box v-if="isDelShow"
                   class="kind-edit"
                   width="464px"
                   type="error"
                   @handleClick="handleDelete">
          <div class="mager-box message-box-content">
              删除该粉丝后，将无法再找回，请问要删除吗？
          </div>
      </message-box>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import userServer from 'src/api/user-service'
  import EventBus from 'src/utils/eventBus'
  import VePagination from 'src/components/ve-pagination'

  export default {
    components: { draggable, VePagination },
    data () {
      return {
        tableData: [
          { 'id': 1,
            'name': ''
          }],
        isInit: false,
        isNoGoods: false,
        isEditShow: false,
        isDelShow: false,
        editTitle: '',
        kindInfo: {
          id: null,
          name: ''
        },
        kindError: '',
        searchParams: {
          type: '',
          date: '',
          page: 1,
          pageSize: 10
        },
        total: null,
        currentPage: 1
      }
    },
    created () {
      this.queryList()
      // this.isShowLiveData()
      EventBus.$emit('breads', [{
        title: '用户管理'
      }, {
        title: '粉丝管理',
        url: `/goodMager/list/`
      }])
    },
    mounted () {
      // this.getList()
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
      queryList () {
        this.$get(userServer.GET_CONSUMERINFO_PAGE, {...this.searchParams})
          .then(res => {
            if (res.code === 200) {
              this.tableData = res.data.info
              this.total = res.data.total
              if (this.tableData.length < 1) {
                this.isNoGoods = true
              } else {
                this.isNoGoods = false
              }
            }
          })
          .catch(() => {
            this.tableData = []
          })
      },
      handleEdit (id) {
        this.$router.push(`/userMager/edit/${id}`)
      },
      changePage (page) {
        this.searchParams.page = page
        this.queryList()
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
                              button {
                                color: #222222;
                                &:hover {
                                  color: #4B5AFE;
                                }
                              }
                            }
                        }
                        td.dis-prices {
                            color: #fc5659;
                        }
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
            .kind-edit {
                .from-row {
                    margin-top: 10px;
                    .from-title {
                        display: inline-block;
                        width: 60px;
                        text-align: right;
                        margin-right: 8px;
                    }
                }
            }
        }
    }
</style>
