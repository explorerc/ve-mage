<!--用户池页面-->
<template>
  <div class='pond-page'>
    <div class="pond-title">
        <span class="title" >用户池</span>
    </div>
    <div class="content from-box">
      <div class="handle-bar">
        <div class="left">
          <!-- <el-dropdown @command="handleCommandk">
            <span class="el-dropdown-link">
              <el-button round >选择</el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='checkCurPage'>本页数据</el-dropdown-item>
              <el-dropdown-item command='checkAll'>列表所有数据</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-dropdown @command="handleCommandk">
            <span class="el-dropdown-link" >
              <el-button round :disabled="multipleSelection.length <= 0">批量操作</el-button>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item command='export' :disabled="multipleSelection.length <= 0">导出</el-dropdown-item> -->
              <el-dropdown-item command='addGroup' :disabled="multipleSelection.length <= 0">添加到群组</el-dropdown-item>
              <el-dropdown-item command='del' :disabled="multipleSelection.length <= 0">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button round @click='exportAll()'>全部导出</el-button>
          <!-- <el-button round @click='addGroupAll()'>全部添加到群组</el-button> -->
          <el-button round @click='showImport = true'>批量导入</el-button>
        </div>
        <div class="right">
          <com-input :value.sync="filterCondition.keyword" placeholder="姓名/昵称/手机号/邮箱" @keyup.enter.native='filterSearch'></com-input>
          <span @click='showFilter = !showFilter'>精准搜索<i class='el-submenu__icon-arrow el-icon-arrow-down' :class="{'is-open':showFilter }"></i></span>
        </div>
      </div>
      <transition name="left-right"  mode="out-in">
        <div class="handle-filter page-bg" v-show='showFilter'>
          <div class='filter-item'>
            <div class="condition">
              <span class="label">用户级别</span>
               <el-select v-model="filterCondition.user_level" placeholder="请选择">
                <el-option
                  v-for="item in grands"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">来源</span>
               <el-select v-model="filterCondition.source" placeholder="请选择">
                <el-option
                  v-for="item in sources"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">参与场次</span>
              <com-input :value.sync="filterCondition.join_count" placeholder="请输入参与活动次数" :type="'number'"></com-input>
            </div>
          </div>
          <div class='filter-item'>
            <div class="condition area">
              <span class="label">所属地域</span>
              <el-select v-model="filterCondition.province" filterable placeholder="省份">
                <el-option
                  v-for="item in districts"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
              <el-select v-model="filterCondition.city" filterable placeholder="城市">
                <el-option
                  v-for="item in districtsCity"
                  :key="item.id"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
              <!-- <el-cascader
                :options="districts"
                v-model="districtsVal"
                @change="handleDistrictChange">
              </el-cascader> -->
            </div>
            <div class="condition">
              <span class="label">性别</span>
              <el-select v-model="filterCondition.sex" placeholder="请选择">
                <el-option
                  v-for="item in sexs"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="condition">
              <span class="label">所属行业</span>
              <el-select v-model="filterCondition.industry" placeholder="请选择">
                <el-option
                  v-for="item in industrys"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <div class='filter-item'>
            <div class="condition">
            <span class="label">首次访问</span>
               <el-date-picker
                :clearable="true"
                v-model="firstVal"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd hh:mm"
                align="left">
              </el-date-picker>
            </div>
            <div class="condition">
            <span class="label">最后访问</span>
               <el-date-picker
                :clearable="true"
                v-model="lastVal"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy-MM-dd hh:mm"
                align="left">
              </el-date-picker>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">参与活动</span>
            <el-button round v-if='!activityArray.name.length' @click='showChooseActive = true'>选择活动</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in activityArray.name' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'activityArray')"></span></li>
                <li class="added" @click='showChooseActive = true'></li>
              </ol>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">活动标签</span>
            <el-button round v-if='!tagArray.name.length' @click='showChooseTag = true'>选择标签</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in tagArray.name' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'tagArray')"></span></li>
                <li class="added" @click='showChooseTag = true'></li>
              </ol>
            </div>
          </div>
          <div class='filter-item'>
            <span class="label">所属群组</span>
            <el-button round v-if='!groupArray.name.length' @click='showChooseGroup = true'>选择分组</el-button>
            <div class="selected" v-else>
              <ol class='tag-box'>
                <li class='tag' v-for='(item,idx) in groupArray.name' :key="idx">{{item}} <span class='close' @click="handleDel(idx,'groupArray')"></span></li>
                <li class="added" @click='showChooseGroup = true'></li>
              </ol>
            </div>
          </div>
          <div class="filter-confirm">
            <el-button round class='primary-button' @click='doFilter'>查询</el-button>
            <el-button round @click='showFilter = false'>取消</el-button>
          </div>
        </div>
      </transition>
      <div class="users-list page-bg table_box " :class='{"has-page":total>filterCondition.page_size}'>
        <el-table
          ref="multipleTable"
          :data="usersListData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="用户信息"
            width="250">
            <template slot-scope="scope">
              <dl class="users-info clearfix">
                <dt><img :src="scope.row.avatar"></dt>
                <dd><span class='name'>{{ scope.row.name }}</span> <span class='gender'>{{ scope.row.gender }}</span></dd>
                <!-- <dd class='high ' v-if="scope.row.level === 1">优质客户</dd>
                <dd class='good ' v-if="scope.row.level === 2">高价值用户</dd>
                <dd class='common ' v-if="scope.row.level === 3">一般用户</dd>
                <dd class='protential' v-if="scope.row.level === 4">潜在用户</dd>
                <dd class='' v-if="scope.row.level === 5">流失用户</dd>
                <dd class='' v-if="scope.row.level === 0">没有评级</dd> -->
                <dd class="name"  :class="scope.row.level | filterLevelclass" >{{scope.row.level | filterLevel}}</dd>
              </dl>
            </template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="mail"
            label="邮箱"
            show-overflow-tooltip>
            <!-- <template slot-scope="scope">
              <el-popover trigger="hover" placement="bottom">
                <p class='mail-tooltips' v-for="(item,idx) in scope.row.mail">
                  <span>{{item.value}}</span>
                  <span>{{item.type}}</span>
                </p>
                <div slot="reference" class="name-wrapper">
                  {{ scope.row.mail[1].value }}
                </div>
              </el-popover>
            </template> -->
          </el-table-column>
          <el-table-column
            prop="count"
            label="参与(次)"
            width="100">
          </el-table-column>
          <el-table-column
            prop="lastActive"
            label="最后活跃"
            width="150">
          </el-table-column>
          <el-table-column
            prop="comment"
            label="备注"
            width="150"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="count"
            label="操作"
            width="150">
            <template slot-scope="scope">
              <router-link :to="`/userManage/info/${scope.row.business_consumer_uid}`">
              <el-button class='detail'
                type="text"
                size="small">
                详情
              </el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
          <div class="total">共 <span>{{total}}</span> 条数据</div>
          <div class="pagination-box" v-if="total>filterCondition.page_size">
            <div class="page-pagination">
                <ve-pagination
                  :total="total"
                  :pageSize="filterCondition.page_size"
                  :currentPage="currPage"
                  @changePage="currentChange"/>
            </div>
          </div>
      </div>
    </div>

      <transition name='fade' mode='out-in' v-if="showAddgroup">
        <com-addgroup  @handleClick="handleClick" @groupData="groupData"></com-addgroup>
      </transition>
      <transition name='fade' mode='out-in' v-if="showChooseActive">
        <com-choose  @handleClick="handleClick" @selectComConfirm='selectActiveConfirm' :checkedData='activityArray'  :max='10' @searchHandler='searchHandler' :name="'活动'"></com-choose>
      </transition>
      <transition name='fade' mode='out-in' v-if="showChooseTag">
        <com-choose  @handleClick="handleClick" @selectComConfirm='selectTagConfirm' :checkedData='tagArray'  :max='10' @searchHandler='searchHandler' :name="'标签'"></com-choose>
      </transition>
      <transition name='fade' mode='out-in' v-if="showChooseGroup">
        <com-choose  @handleClick="handleClick" @selectComConfirm='selectGroupConfirm' :checkedData='groupArray'  :max='10' @searchHandler='searchHandler' :name="'固定群组'"></com-choose>
      </transition>
      <transition name='fade' mode='out-in' v-if="showImport">
        <com-import @handleClick="handleClick" ></com-import>
      </transition>
  </div>
</template>

<script>
import comChoose from '../components/com-choose'
import comAddgroup from '../components/com-addGroup'
import VePagination from 'src/components/ve-pagination'
import comImport from '../components/com-import'
import userManage from 'src/api/userManage-service'
import districtDataPro from 'src/assets/js/district-provience.js'
import districtDataCity from 'src/assets/js/district-city.js'
export default {
  data () {
    return {
      filterVal: '',
      showFilter: false,
      grands: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 1,
          label: '优质客户'
        }, {
          value: 2,
          label: '高价值用户'
        }, {
          value: 3,
          label: '一般用户'
        }, {
          value: 4,
          label: '潜在用户'
        }, {
          value: 5,
          label: '流失用户'
        }, {
          value: 0,
          label: '没有评级'
        }
      ],
      sources: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'IMPORT',
          label: '导入'
        }, {
          value: 'WAP',
          label: '手机注册'
        }, {
          value: 'PC',
          label: 'PC注册'
        }
      ],
      sourcesVal: '',
      sexs: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'M',
          label: '男'
        }, {
          value: 'W',
          label: '女'
        }
      ],
      sexsVal: '',
      industrys: [
        {
          value: '',
          label: '全部'
        },
        {
          value: 'IT/互联网',
          label: 'IT/互联网'
        }, {
          value: '电子/通信/硬件',
          label: '电子/通信/硬件'
        }, {
          value: '金融',
          label: '金融'
        }, {
          value: '交通/贸易/物流',
          label: '交通/贸易/物流'
        }, {
          value: '消费品',
          label: '消费品'
        }, {
          value: '机械/制造',
          label: '机械/制造'
        }, {
          value: '能源/矿产环保',
          label: '能源/矿产环保'
        }, {
          value: '制药/医疗',
          label: '制药/医疗'
        }, {
          value: '专业服务',
          label: '专业服务'
        }, {
          value: '教育/培训',
          label: '教育/培训'
        }, {
          value: '广告/媒体/娱乐/出版',
          label: '广告/媒体/娱乐/出版'
        }, {
          value: '房地产/建筑',
          label: '房地产/建筑'
        }, {
          value: '服务业',
          label: '服务业'
        }, {
          value: '政府/非盈利机构/其它',
          label: '政府/非盈利机构/其它'
        }
      ],
      industrysVal: '',
      districts: [],
      districtsCity: [],
      // districtsVal: [''],
      firstVal: [],
      lastVal: [],
      activityArray: {
        'id': [],
        'name': []
      },
      tagArray: {
        'id': [],
        'name': []
      },
      groupArray: {
        'id': [],
        'name': []
      },
      usersListData: [
        // {
        //   avatar: '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
        //   name: '王小虎',
        //   gender: '男',
        //   phone: '18513152512',
        //   mail: '123@qq.com',
        //   lastActive: '2018-10-11',
        //   comment: '哈哈',
        //   level: 1,
        //   count: '1'
        // }
      ],
      multipleSelection: [],
      checkedArr: [],
      total: 0,
      currPage: 1,
      showAddgroup: false,
      showChooseActive: false,
      showChooseTag: false,
      showChooseGroup: false,
      showImport: false,
      chooseType: '活动',
      filterCondition: { // 精准搜索条件对象
        keyword: '', // 关键字查询 模糊匹配 姓名 昵称 手机号 邮箱
        user_level: '', // 用户级别
        first_visited_at_start: '', // this.firstVal[0], // 首次访问时间开始日期
        first_visited_at_end: '', // this.firstVal[1], // 首次访问时间结束日期
        last_visited_at_start: '', // this.lastVal[0], // 最后活跃时间开始日期
        last_visited_at_end: '', // this.lastVal[1], // 最后活跃时间结束日期
        sex: '', // 性别 M 男 W 女
        province: '', // 省
        city: '', // 市
        industry: '', // 行业
        join_count: '', // 参与活动场次
        source: '', // 来源 导入 微信注册 PC注册
        activity_ids: '', // 参加过的活动ID，多个活动ID用英文逗号","分割
        tags: '', // 标签ID，多个标签ID用英文逗号","分割
        groups: '', // 所属群组ID，多个群组ID用英文逗号","分割
        page: 1, // 分页页码 默认不传为第一页
        page_size: 100 // 每页显示条数 默认不传为每页显示10条
      },
      exportStr: '' // 导出数据的拼接str
    }
  },
  mounted () {
    this.queryUserPool(this.filterCondition)
    this.districts = districtDataPro
    this.districtsCity = districtDataCity
    // let arr = []
    // districtData.forEach(item => {
    //   item['children'].forEach(ele => {
    //     if (item['children']) {
    //       ele['children'] = []
    //       arr.push(item)
    //     }
    //   })

    // item['children']['children'] ? item['children']['children'] = []
    // })
    // console.log(JSON.parse(arr))
  },
  filters: {
    filterLevel (val) {
      switch (val) {
        case 1:
          return '优质客户'
        case 2:
          return '高价值用户'
        case 3:
          return '一般用户'
        case 4:
          return '潜在用户'
        case 5:
          return '流失用户'
        case 0:
          return '没有评级'
      }
    },
    filterLevelclass (val) {
      switch (val) {
        case 1:
          return 'high'
        case 2:
          return 'good'
        case 3:
          return 'common'
        case 4:
          return 'protential'
        case 5:
          return ''
        case 0:
          return ''
      }
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      // val.forEach(item => {
      //   this.multipleSelection.push(item.business_consumer_uid)
      // })
    },
    currentChange (e) {
      Object.assign(this.filterCondition, { 'page': e })
      this.queryUserPool(this.filterCondition)
    },
    handleDel (idx, type) {
      this[type].name.splice(idx, 1)
      this[type].id.splice(idx, 1)
    },
    /* 点击取消 */
    handleClick (e) {
      if (e.action === 'cancel') {
        this.showAddgroup = false
        this.showChooseActive = false
        this.showChooseTag = false
        this.showChooseGroup = false
        this.showImport = false
      }
    },
    selectActiveConfirm (res) {
      console.log(res)
      this.activityArray.name = res.name
      this.activityArray.id = res.id
      // this.filterCondition.activity_ids = res.id.toString()
    },
    selectTagConfirm (res) {
      console.log(res)
      this.tagArray.name = res.name
      this.tagArray.id = res.id
      // this.filterCondition.tags = res.id.toString()
    },
    selectGroupConfirm (res) {
      console.log(res)
      this.groupArray.name = res.name
      this.groupArray.id = res.id
      // this.filterCondition.groups = res.id.toString()
    },
    // handleDistrictChange (res) {
    //   console.log(res)
    //   this.filterCondition.province = res[0]
    //   this.filterCondition.city = res[1] ? res[1] : ''
    //   this.filterCondition.area = res[2] ? res[2] : ''
    // },
    searchHandler (res) {
      console.log(res)
    },
    filterSearch () {
      console.log('search')
      this.queryUserPool('search')
    },
    groupData (res) {
      // console.log(res)
      const data = res
      Object.assign(data, {
        'business_consumer_uids': this.checkedArr.toString()
      })
      console.log(data)
      this.addGroup(data)
    },
    addGroup (data) {
      this.$post(userManage.POST_ADD_TO_GROUP, data).then((res) => {
        this.showAddgroup = false
        this.$toast({
          'content': '导入成功',
          'position': 'center'
        })
        this.checkedArr = []
        this.$refs.multipleTable.clearSelection()
      })
    },
    // addGroupAll () {

    // },
    delUsers () {
      const data = {}
      Object.assign(data, {
        'business_consumer_uids': this.checkedArr.toString()
      })
      this.usersListData.forEach((item, idx) => {
        this.checkedArr.forEach((ele, i) => {
          if (item.business_consumer_uid === this.checkedArr[i]) {
            this.usersListData.splice(idx, 1)
          }
        })
      })
      this.$post(userManage.POST_DEL_USERS, data).then((res) => {
        this.$toast({
          'content': '删除成功',
          'position': 'center'
        })
      })
    },
    queryUserPool (data) {
      Object.assign(data, {
        'activity_ids': this.activityArray.id.toString(),
        'groups': this.groupArray.id.toString(),
        'tags': this.tagArray.id.toString()
      })
      if (data.city === '全部') {
        data.city = ''
      }
      if (data.province === '全部') {
        data.province = ''
      }
      if (data === 'search') {
        data = {
          'keyword': this.filterCondition.keyword,
          'page': 1 // 分页页码 默认不传为第一页
        }
      }
      console.log(data)
      this.$get(userManage.GET_USERS_POOL, data).then((res) => {
        const arr = []
        console.log(res)
        this.total = res.data.count
        this.currPage = res.data.page
        res.data.list.forEach(item => {
          arr.push({
            'business_consumer_uid': item.business_consumer_uid,
            'avatar': item.avatar ? item.avatar : '//cnstatic01.e.vhall.com/static/img/v35-webinar.png',
            'name': item.real_name.length <= 5 ? item.real_name : item.real_name.substr(0, 5) + '...',
            'gender': item.sex ? (item.sex === 'M' ? '男' : '女') : '未知',
            'phone': item.phone,
            'mail': item.email,
            'lastActive': item.last_visited_at,
            'comment': item.remark,
            'level': item.user_level,
            'count': item.join_count
          })
        })
        this.usersListData = arr
      })
    },
    doFilter () {
      this.queryUserPool(this.filterCondition)
    },
    handleCommandk (type) {
      switch (type) {
        case 'addGroup':
          this.showAddgroup = true
          break
        // case 'checkCurPage':
        //   // this.multipleSelection = this.usersListData
        //   // this.selCur_txt = '本页数据''
        //   document.querySelector('.table_box th.el-table_1_column_1 span.el-checkbox__inner').click()
        //   break
        // case 'checkAll':
        //   // this.multipleSelection = this.usersListData
        //   document.querySelector('.table_box th.el-table_1_column_1 span.el-checkbox__inner').click()
        //   break
        case 'export': // 导出
          break
        case 'del': // 删除

          this.$messageBox({
            header: '提示',
            width: '400px',
            content: '删除用户后将无法恢复,是否确定删除该用户？',
            cancelText: '否',
            confirmText: '是',
            handleClick: (e) => {
              if (e.action === 'confirm') {
                this.delUsers()
              }
            }
          })
          break
      }
    },
    exportAll () { // 导出全部
      Object.assign(this.filterCondition, {
        'activity_ids': this.activityArray.id.toString(),
        'groups': this.groupArray.id.toString(),
        'tags': this.tagArray.id.toString()
      })
      this.exportStr = ''
      if (this.filterCondition.city === '全部') {
        this.filterCondition.city = ''
      }
      if (this.filterCondition.province === '全部') {
        this.filterCondition.province = ''
      }
      for (const key in this.filterCondition) {
        if (this.filterCondition.hasOwnProperty(key)) {
          const element = this.filterCondition[key]
          // console.log(element)
          if (element !== '' && key !== 'page' && key !== 'page_size') {
            this.exportStr += `?${key}=${element}`
          }
        }
      }
      window.location.href = `/api/user/customer/export${this.exportStr}`
      debugger
    }
  },
  watch: {
    firstVal: {
      handler (val) {
        if (val === null) {
          this.filterCondition.first_visited_at_start = ''
          this.filterCondition.first_visited_at_end = ''
        } else {
          this.filterCondition.first_visited_at_start = val[0]
          this.filterCondition.first_visited_at_end = val[1]
        }
      }
    },
    lastVal: {
      handler (val) {
        if (val === null) {
          this.filterCondition.last_visited_at_start = ''
          this.filterCondition.last_visited_at_end = ''
        } else {
          this.filterCondition.last_visited_at_start = val[0]
          this.filterCondition.last_visited_at_end = val[1]
        }
      }
    },
    multipleSelection: {
      handler (val) {
        const arr = []
        val.forEach(item => {
          arr.push(item.business_consumer_uid)
        })
        this.checkedArr = arr
      }
    }
  },
  components: {
    VePagination,
    comAddgroup,
    comChoose,
    comImport
  }
}
</script>

<style lang='scss' scoped>
@import '~assets/css/mixin.scss';
.pond-page {
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 30px;
  margin: 0 auto;
  color: #222;
  .total {
    float: left;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
    padding-left: 15px;
    span {
      color: $color-error;
    }
  }
  /* 设备宽度大于 1600 */
  @media all and (min-width: 1600px) {
    width: 1366px;
  }
  /* 设备宽度小于 1600px */
  @media all and (max-width: 1600px) {
    width: 1019px;
    .content .handle-filter .selected {
      max-width: 880px !important;
    }
  }
  .pond-title {
    // border-bottom: 1px solid $color-bd;
    line-height: 60px;
    span.title {
      display: inline-block;
      font-size: 24px;
    }
  }
  .content /deep/ {
    font-size: 14px;
    width: 100%;
    // padding: 40px 80px;
    // background: rgba(255, 255, 255, 1);
    // border-radius: 4px;
    // border: 1px solid rgba(226, 226, 226, 1);
    .handle-bar {
      .left {
        display: inline-block;
        .el-dropdown {
          margin-right: 10px;
        }
      }
      .right {
        float: right;
        .com-input {
          margin-right: 10px;
          width: 202px;
        }
        .com-input input {
          padding-right: 10px;
          padding-left: 15px;
          border-radius: 4px;
        }
        span {
          cursor: pointer;
          position: relative;
          color: $color-blue;
          padding-right: 18px;
          .el-submenu__icon-arrow {
            right: 0px;
            margin-top: -6px;
            -webkit-transition: -webkit-transform 0.3s;
            transition: -webkit-transform 0.3s;
            transition: transform 0.3s;
            transition: transform 0.3s, -webkit-transform 0.3s;
            font-size: 12px;
            &.is-open {
              -webkit-transform: rotateZ(180deg);
              transform: rotateZ(180deg);
            }
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
    .page-bg {
      padding: 30px;
      background: rgba(255, 255, 255, 1);
      border-radius: 4px;
      border: 1px solid rgba(226, 226, 226, 1);
      margin-top: 20px;
      padding-bottom: 70px;
      &.has-page {
        padding-bottom: 30px;
      }
    }
    .handle-filter {
      .label {
        color: $color-font-sub;
        padding-right: 10px;
        float: left;
        height: 34px;
        line-height: 34px;
      }
      .filter-item {
        margin-bottom: 20px;
      }
      .filter-confirm {
        text-align: center;
      }
      .condition {
        display: inline-block;
        margin-right: 60px;
        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
      .selected {
        display: inline-block;
        max-width: 1200px;
        .added {
          cursor: pointer;
          display: inline-block;
          border-radius: 100px;
          width: 19px;
          height: 19px;
          padding: 0;
          margin: 0;
          border: 1px solid rgba(136, 136, 136, 1);
          background: url('~assets/image/add_icon.svg') no-repeat;
          background-position: center;
          background-size: contain;
          position: relative;
          top: 4px;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .tag-box {
        display: inline-block;
        li {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(240, 241, 254, 1);
          border-radius: 20px;
          border: 1px solid rgba(240, 241, 254, 1);
          margin-right: 10px;
          margin-bottom: 10px;
          .close {
            cursor: pointer;
            display: inline-block;
            position: relative;
            top: 2px;
            background: url('~assets/image/close.svg') no-repeat;
            background-position: center;
            background-size: 6px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            border-radius: 100px;
            border: 1px solid rgba(75, 90, 254, 1);
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
      .condition.area .el-select {
        width: 99px;
      }
    }
    .users-list {
      .el-table {
        .users-info {
          width: 140px;
          img {
            width: 32px;
            height: 32px;
            border-radius: 500px;
          }
          dt {
            float: left;
            padding-right: 10px;
            padding-top: 7px;
          }
          dd {
            float: left;
            &:nth-of-type(1) {
              color: $color-font;
              height: 23px;
            }
            &:nth-of-type(2) {
              color: $color-gray;
              &.protential {
                color: $color-red;
              }
              &.common {
                color: $color-default;
              }
              &.good {
                color: $color-success;
              }
              &.high {
                color: #714cea;
              }
            }
            span {
              overflow: hidden;
              display: inline-block;
              min-width: 37px;
            }
            .name {
              // width: 50px;
              // text-overflow: ellipsis;
              // white-space: nowrap;
            }
          }
        }
        .detail {
          color: #4b5afe;
        }
      }
      .pagination-box {
        text-align: center;
        margin-top: 20px;
      }
    }
    /* reset element ui */
    .el-select {
      // border: 1px solid RGBA(226, 226, 226, 1);
      .el-input__inner {
        padding: 0 15px;
        height: 34px;
        line-height: 34px;
      }
      .el-input.is-focus .el-input__inner {
        border-color: $color-blue;
      }
      &:hover .el-input__inner {
        border-color: $color-blue;
      }
    }
    .el-cascader {
      width: 202px;
      height: 34px;
      line-height: 34px;
      .el-input__suffix {
        top: -2px;
      }
      &.is-opened .el-input__suffix {
        top: 2px;
      }
      .el-input__inner {
        height: 34px;
        line-height: 34px;
      }
    }
    .el-date-editor {
      .el-range-input {
        height: 60%;
        width: 45%;
        font-size: 14px;
        position: relative;
        bottom: 1px;
      }
      .el-range__close-icon {
        display: none;
      }
      &.el-input__inner {
        height: 34px;
        line-height: 34px;
        padding: 0 8px;
        width: 270px;
      }
      .el-range__icon {
        display: none;
      }
      .el-range-separator {
        width: 10%;
      }
    }
    .com-input input {
      height: 34px;
      line-height: 34px;
      // border-radius: 17px;
    }
    .el-table tr {
      height: 70px;
    }
    .el-table .cell {
      color: $color-font;
    }
  }
}

.el-date-range-picker__editors-wrap /deep/ {
  background: red;
  .el-date-range-picker__time-picker-wrap {
    width: 100%;
    &:nth-of-type(2) {
      display: none;
    }
  }
}
.mail-tooltips {
  width: 280px;
  padding: 10px 13px;
  span:nth-of-type(2) {
    float: right;
    width: 60px;
    text-align: left;
  }
}
</style>
