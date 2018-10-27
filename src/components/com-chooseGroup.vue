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
                         placeholder="输入分组名称"></com-input>
            </div>
            <div class="select-person-box">
              <ul>
                <li v-for="(person,idx) in personList"
                    @click.stop="clickRowGroup(idx)"
                    :class="{active:person.isChecked}"
                    :key="person.id">
                  {{person.name}} ({{person.count}}人）
                  <com-checkbox v-model="person.isChecked"
                                class="fr"
                                small></com-checkbox>
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
                         placeholder="输入标签名称"></com-input>
            </div>
            <div class="select-person-box">
              <ul>
                <li v-for="(tag,idx) in tagList"
                    @click.stop="clickRowTag(idx)"
                    :class="{active:tag.isChecked}"
                    :key="tag.id">
                  {{tag.name}} ({{tag.count}}人）
                  <com-checkbox v-model="tag.isChecked"
                                class="fr"
                                small></com-checkbox>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div slot="bottom"
             class="select-bottom">
          <span class="select-all fl">已选择{{selectedCount}}组：</span>
          <div class="select-list fl"
               :title="selectedPersonListStr">
            {{selectedPersonListStr}}
          </div><div class="select-list fl"
               :title="selectedTagListStr">
            {{selectedTagListStr}}
          </div>
          <button class="primary-button"
                  @click="okSelectList">确定</button>
        </div>
      </message-box>
</template>

<script>
export default {
  data () {
    return {
      curTab: 1,
      searchPerson: '',
      selectedCount: 0,
      selectedPersonListStr: '',
      selectedTagListStr: ''
    }
  },
  props: {
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
    personList: {
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
      this.personList[idx].isChecked = !this.personList[idx].isChecked
    },
    clickRowTag (idx) {
      this.tagList[idx].isChecked = !this.tagList[idx].isChecked
    },
    swap (flag) {
      this.curTab = flag
    }
  }
}
</script>

<style lang="scss" scoped src="src/pages/live-mager/css/live.scss">
</style>
<style>
</style>
