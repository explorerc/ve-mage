<template>
  <!-- 选择收件人 -->
      <message-box v-show="show"
                   width="740px"
                   type="prompt"
                   header="选择接收组"
                   confirmText='确认'
                   class="select-person"
                   @handleClick="handleSelectPerson">
        <div class="select-person-box">
          <div class="select-nav fl" >
            <div class="select-item" :class="{'active':curTab===1}" @click='swap(1)'>
              <i class="iconfont icon-fenzu"></i>
              <span>分组</span>
            </div>
            <div class="select-item" :class="{'active':curTab===2}" @click='swap(2)'>
              <i class="iconfont icon-biaoqian"></i>
              <span>标签</span>
            </div>
          </div>
          <!-- 分组 -->
          <div class="select-content fl" v-show="curTab===1">
            <div class="search-person-box">
              <com-input type="search"
                         class="search-com"
                         :value.sync="searchPerson"
                         @keyup.native.enter="searchEnter('group')"
                         @empty="searchEmpty('group')"
                         placeholder="输入分组名称"></com-input>
            </div>
            <div class="select-person-box" :class='{"search-empty":!groupList.length}'>
              <ul>
                <li v-for="(person,idx) in groupList"
                    @click.stop="clickRowGroup(idx)"
                    :class="{active:person.isChecked}"
                    :key="person.id">
                  {{person.name}} ({{person.count}}人）
                  <el-checkbox v-model="person.isChecked"
                                class="fr"
                                small></el-checkbox>
                </li>
              </ul>
            </div>
          </div>
          <!-- 标签 -->
          <div class="select-content fl" v-show="curTab===2">
            <div class="search-person-box">
              <com-input type="search"
                         class="search-com"
                         :value.sync="searchPerson"
                         @keyup.native.enter="searchEnter('tag')"
                         @empty="searchEmpty('tag')"
                         placeholder="输入标签名称"></com-input>
            </div>
            <div class="select-person-box" :class='{"search-empty":!tagList.length}'>
              <ul>
                <li v-for="(tag,idx) in tagList"
                    @click.stop="clickRowTag(idx)"
                    :class="{active:tag.isChecked}"
                    :key="tag.id">
                  {{tag.name}} ({{tag.count}}人）
                  <el-checkbox v-model="tag.isChecked"
                                class="fr"
                                small></el-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div slot="bottom" class="select-bottom">
          <span class="select-all fl">已选择{{selectedCount}}人：</span>
          <div style="text-align: justify;" class="select-list fl" :title="selectedGroupListStr + selectedTagListStr" v-show="selectedGroupListStr.length || selectedTagListStr.length">
            <span >{{selectedGroupListStr}} </span><span>{{selectedTagListStr}}</span>
          </div>
          <!-- <div class="select-list fl" >
          </div> -->
          <button class="primary-button" @click="okSelectList">确定</button>
        </div>
      </message-box>
</template>

<script>
import userManage from 'src/api/userManage-service'
export default {
  data () {
    return {
      curTab: 1,
      searchPerson: '',
      searchGroup: '',
      searchTag: '',
      selectedCount: 0,
      selectedGroupListStr: '',
      selectedTagListStr: '',
      selectedGroupList: [],
      selectedTagList: [],
      groupArr: [],
      tagArr: [],
      isInit: true,
      groupEmpty: false,
      tagEmpty: false
    }
  },
  props: {
    webinarType: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    checkedData: {
      type: Array,
      default () {
        return []
      }
    },
    groupList: {
      type: Array,
      default () {
        return []
      }
    },
    tagList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    okSelectList () {
      this.$emit('okSelectList')
    },
    /* 点击取消 */
    handleSelectPerson (e) {
      if (e.action === 'cancel') {
        this.$emit('close')
      }
    },
    searchEnter (flag) {
      this.$emit('searchEnter', this.searchPerson, flag)
    },
    /* 选中行 */
    clickRowGroup (idx) {
      this.groupList[idx].isChecked = !this.groupList[idx].isChecked
      this.isInit = false
    },
    clickRowTag (idx) {
      this.tagList[idx].isChecked = !this.tagList[idx].isChecked
      this.isInit = false
    },
    swap (flag) {
      this.curTab = flag
    },
    searchEmpty (flag) {
      this.$emit('searchEnter', '', flag)
    },
    // 获取用户数量
    getMemberCount () {
      this.$get(userManage.GET_CUSTON_NUM, {
        fileds: this.webinarType,
        group_ids: this.groupArr.toString(),
        tag_ids: this.tagArr.toString()
      }).then((res) => {
        console.log(res)
        this.selectedCount = res.data
        this.$emit('totalCount', this.selectedCount)
      })
    }
  },
  watch: {
    groupList: {
      handler (newArray) {
        let temArray = []
        let listStr = ''
        let temArr = []
        newArray.forEach((item, idx) => {
          if (!item.isChecked) return
          temArray.push(item)
          listStr += `${item.name} (${item.count}人）、`
          temArr.push(item.id)
        })
        this.selectedGroupListStr = listStr.substring(0, listStr.length - 1)
        this.selectedGroupList = temArray
        this.groupArr = temArr
        this.$emit('selectedGroupListfn', this.selectedGroupList, this.selectedGroupListStr, this.groupArr.toString())
        console.log(this.groupArr)
        if (this.groupArr.length === 0) {
          this.selectedCount = 0
          this.$emit('totalCount', 0)
          return false
        }
        if (!this.isInit) {
          this.getMemberCount()
        }
      },
      deep: true
    },
    tagList: {
      handler (newArray, oldArray) {
        let temArray = []
        let listStr = ''
        let temArr = []
        newArray.forEach((item, idx) => {
          if (!item.isChecked) return
          temArray.push(item)
          listStr += `${item.name} (${item.count}人）、`
          temArr.push(item.id)
        })
        this.selectedTagListStr = listStr.substring(0, listStr.length - 1)
        this.selectedTagList = temArray
        this.tagArr = temArr
        this.$emit('selectedTagListfn', this.selectedTagList, this.selectedTagListStr, this.tagArr.toString())
        console.log(this.tagArr)
        if (this.tagArr.length === 0) {
          this.selectedCount = 0
          this.$emit('totalCount', 0)
          return false
        }
        if (!this.isInit) {
          this.getMemberCount()
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped src="src/pages/live-mager/css/live.scss">
</style>
<style lang='scss' scoped>
.select-content .search-empty {
  background:url('~assets/image/search_empty.png') no-repeat center;
  background-size:180px;
}
</style>
