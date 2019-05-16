<template>
  <div id="kind-list">
    <header>
      <p>分类管理</p>
      <div class='btn-box'>
        <!--<span>共{{tableData.length}}件商品</span>-->
        <com-button class="add-goods primary-button" round  @click="handleEdit(null)" >
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
                <el-button type="text" @click="handleEdit(row)">编辑</el-button>
                <el-button type="text" @click="handleDelShow(row)">删除</el-button>
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
    <!--<MessageBox></MessageBox>-->
    <message-box v-if="isEditShow"
                 class="kind-edit"
                 width="464px"
                 type="prompt"
                 :header="editTitle"
                 @handleClick="editKind">

      <div class="mager-box message-box-content">
        <div class="from-box">
          <div class="from-row" v-if="kindInfo.id">
            <span class="from-title">分类id:</span><span style="line-height: 20px">{{kindInfo.id}}</span>
          </div>
          <div class="from-row">
            <span class="from-title">分类名称:</span>
            <com-input style=""
                       type="text"
                       v-model="kindInfo.name"
                       placeholder="请输入分类名称"
                       :value.sync="kindInfo.name"
                       :errorTips="kindError"
            ></com-input>
          </div>
        </div>
      </div>
    </message-box>
    <message-box v-if="isDelShow"
                   class="kind-edit"
                   width="464px"
                   type="error"
                   @handleClick="handleDelete">
          <div class="mager-box message-box-content">
              删除该分类后，将无法再找回，请问要删除吗？
          </div>
      </message-box>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import kindServer from 'src/api/kind'
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
        // timerShelf: null,
        // isShowlive: null,
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
        title: '分类管理'
      }, {
        title: '分类列表',
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
        this.$get(kindServer.GET_KIND_PAGE, {...this.searchParams})
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
      editKind (e) {
        if (e.action === 'confirm') {
        // 发送请求GET_KIND_UPDATE
          let _url
          if (this.kindInfo.id) {
            _url = kindServer.GET_KIND_UPDATE
          } else {
            _url = kindServer.GET_KIND_ADD
          }
          this.$get(_url, {...this.kindInfo})
            .then(res => {
              if (res.code === 200) {
                this.queryList()
                this.isEditShow = false
                this.kindInfo.id = null
                this.kindInfo.name = ''
              }
            })
            .catch(() => {
              this.tableData = []
            })
        } else {
          this.isEditShow = false
          this.kindInfo.id = null
          this.kindInfo.name = ''
        }
      },
      handleEdit (row) {
        if (row) {
          this.editTitle = '编辑分类'
          this.kindInfo.id = row.id
          this.kindInfo.name = row.name
        } else {
          this.editTitle = '新建分类'
        }
        this.isEditShow = true
      },
      handleDelete (e) {
        if (e.action === 'cancel') {
          this.isDelShow = false
          this.kindInfo = {
            id: null,
            name: ''
          }
        } else {
          this.$get(kindServer.GET_KIND_DELETE, {id: this.kindInfo.id}).then(res => {
            if (res.code === 200) {
              debugger
              this.isDelShow = false
              this.kindInfo = {
                id: null,
                name: ''
              }
              this.queryList()
            }
          })
        }
      },
      // DEL - BOX
      handleDelShow (item) {
        this.isDelShow = true
        this.kindInfo = {...item}
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
