<template>
  <div class="single-select-wrap">
    <div class="question-content">
      <div class="index phone-index" v-if="value.detail.format==='phone'">{{index}}</div>
      <div class="index" v-else>{{index}}</div>
      <div v-if="edit"
           class="q-des">{{value.ext.name}}<span v-if="value._required"
              class="v-red">*</span>
        <div class="v-tips"
             v-if="value.detail.format==='phone'">
          <i class="iconfont icon-wenhao"></i><span>手机号默认为必填项，不可修改。</span>
        </div>
      </div>
      <div class="q-edit"
           :class="{display:!edit}">
        <!-- 问题描述区 -->
        <com-input v-if="edit"
                   class="q-subject"
                   @focus="focusTitle"
                   @blur="blurTitle"
                   :class="{error:value.error}"
                   v-model.async="value.title"
                   :max-length="30"></com-input>
        <div v-if="!edit"
             class="q-subject">{{value.title}}<span v-if="value._required"
                class="v-red">*</span></div>
        <!-- 问题描述区 -->
        <component ref="content"
                   :is="QComs[value.type]"
                   v-model="value"
                   :edit="edit"
                   :isView="isView"></component>
      </div>
      <div class="q-operate"
           v-if="edit">
        <a v-if="showAddItem"
           class="add-select-item"
           @click="addItem"><i data-v-d1ee2774=""
             class="iconfont icon-tianjia"></i><span>添加选项</span></a>
        <span v-if="!(value.detail&&value.detail.format==='phone')"
              class="required-des">必填</span>
        <el-switch class='switch'
                   v-if="!(value.detail&&value.detail.format==='phone')"
                   v-model="value._required"
                   inactive-color="#DEE1FF"
                   :width="32"
                   active-color="#FFD021"></el-switch>
        <span v-if="value.detail&&value.detail.format==='mobile'"
              class="required-des">短信验证</span>
        <el-switch class='switch'
                   v-if="value.detail&&value.detail.format==='mobile'"
                   v-model="value.verifiy"
                   inactive-color="#DEE1FF"
                   :width="32"
                   active-color="#FFD021"></el-switch>
        <div class="sort"
             v-if="value.detail.format!='phone'"><i class="iconfont icon-yidong"></i></div>
        <div class="del"
             @click="remove"><i class="iconfont icon-shanchu1"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
import { coms as QComs, types as QTypes } from 'components/questionnaire/types'
import qRadio from './q-radio'
import qCheckbox from './q-checkbox'
import qSelect from './q-select'
import qText from './q-text'
import qDate from './q-date'
import qArea from './q-area'

export default {
  components: {
    qRadio,
    qCheckbox,
    qSelect,
    qText,
    qDate,
    qArea
  },
  props: {
    index: {
      type: Number,
      default: 1
    },
    value: {
      type: Object,
      default () {
        return {

        }
      }
    },
    edit: {
      type: Boolean,
      default: false
    },
    isView: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      QComs: QComs
    }
  },
  mounted () {
    if (this.value.detail.format === 'phone') {
      this.value._required = true
    }
    if (this.value.verification === 'Y') {
      this.value.verifiy = true
    }
  },
  methods: {
    validate () {
      return this.$refs.content.validate()
    },
    check () {
      return this.$refs.content.check()
    },
    focusTitle () {
      if (this.value.title === this.value.ext.name) {
        this.value.title = ''
      }
      if (this.value.error) {
        this.value.error = false
        this.value.title = ''
      }
    },
    blurTitle () {
      if (!this.value.title) {
        this.value.title = this.value.ext.name
      }
    },
    addItem () {
      if (this.value.detail.list.length < 20) {
        this.value.detail.list.push({
          value: '选项'
        })
      }
    },
    remove () {
      let option = {
        type: this.value.ext.key,
        index: this.index
      }
      this.$emit('remove', option)
    }
  },
  watch: {
    'value._required': {
      handler (val) {
        if (val) {
          this.value.required = 'Y'
        } else {
          this.value.required = 'N'
        }
      },
      deep: true
    },
    'value.verifiy': {
      handler (val) {
        if (val) {
          this.value.verification = 'Y'
        } else {
          this.value.verification = 'N'
        }
      },
      deep: true
    }

  },
  computed: {
    showAddItem () {
      return !this.value.ext.fixedness && (this.value.type === QTypes.RADIO || this.value.type === QTypes.CHECKBOX || this.value.type === QTypes.SELECT) && this.value.detail.list.length < 20
    }
  }
}
</script>

<style scoped lang="scss">
.single-select-wrap {
  width: 100%;
  font-size: 12px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #d2d2d2;
  overflow: hidden;
  &.sortable-chosen {
    border-top: 1px solid #4b5afe !important;
    border-color: #4b5afe;
    .sort {
      color: #4b5afe;
    }
  }
  .sort,
  .del {
    &:hover {
      color: #4b5afe;
    }
  }
  /deep/ {
    .el-radio + .el-radio {
      margin-left: 0;
    }
    .el-checkbox + .el-checkbox {
      margin-left: 0;
    }
    .com-input {
      width: 100%;
      input {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
      }
    }
    .index {
      float: left;
      margin-top: 2px;
      margin-right: 15px;
      padding-left: 10px;
      font-size: 14px;
      &.phone-index {
        margin-top: 8px;
      }
    }
    .v-red {
      display: inline-block;
      color: #fc5659;
      margin-left: 5px;
      vertical-align: middle;
    }
    .question-content {
      padding: 30px;
      width: 100%;
      background-color: #fff;
      .q-des {
        margin-bottom: 15px;
        font-size: 14px;
      }
      .q-edit {
        padding: 0 10px;
        /*margin-bottom: 15px;*/
        margin-bottom: 5px;
        &.display {
          // margin-bottom: 0;
        }
        .q-subject {
          margin-bottom: 14px;
          word-break: break-all;
          font-size: 14px;
          &.error {
            input {
              border-color: #fc5659;
              color: #fc5659;
            }
            .limit {
              display: none;
            }
          }
        }
      }
      .v-tips {
        display: inline-block;
        margin-left: 8px;
        position: relative;
        i {
          vertical-align: middle;
          margin-right: 3px;
          &:hover {
            & + span {
              opacity: 1;
            }
          }
        }
        span {
          /*position: absolute;*/
          display: inline-block;
          /*max-width: 400px;*/
          /*top: 50%;
          left: 26px;
          transform: translateY(-50%);*/
          position: relative;
          padding: 6px 10px 4px 10px;
          border-radius: 3px;
          color: #fff;
          opacity: 0;
          word-wrap: break-word;
          word-break: break-all;
          z-index: 10;
          background-color: #313131;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, .4);
          line-height: 20px;
          font-size: 10px;
          margin-left: 4px;
          &:after {
            display: block;
            position: absolute;
            content: '';
            height: 0px;
            width: 0px;
            top: 50%;
            left: -4px;
            transform: translateY(-50%);
            border-top: 4px solid transparent;
            border-right: 4px solid #313131;
            border-bottom: 5px solid transparent;
          }
        }
      }
      .q-operate {
        padding: 0 10px 0 15px;
        text-align: right;
        .add-select-item {
          float: left;
          cursor: pointer;
          margin-left: 18px;
          &:hover {
            color: #4b5afe;
          }
          i {
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
          }
          span {
            vertical-align: middle;
            display: inline-block;
          }
        }
        .required-des {
          display: inline-block;
          vertical-align: middle;
        }
        .el-switch__core {
          height: 20px;
          .el-switch__button {
            width: 14px;
            height: 14px;
          }
        }
        .sort {
          display: inline-block;
          text-align: center;
          // width: 30px;
          // height: 30px;
          // line-height: 30px;
          // border-radius: 30px;
          // border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
          vertical-align: middle;
        }
        .del {
          display: inline-block;
          text-align: center;
          vertical-align: middle;
          // width: 30px;
          // height: 30px;
          // line-height: 30px;
          // border-radius: 30px;
          // border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
