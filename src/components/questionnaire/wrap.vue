<template>
  <div class="single-select-wrap">
    <div class="index">{{index}}</div>
    <div class="question-content">
      <div v-if="edit"
           class="q-des">{{value.ext.name}}</div>
      <div class="q-edit"
           :class="{display:!edit}">
        <!-- 问题描述区 -->
        <com-input v-if="edit"
                   class="q-subject"
                   v-model="value.title"
                   :max-length="30"></com-input>
        <div v-if="!edit"
             class="q-subject"
             v-text="value.title"></div>
        <!-- 问题描述区 -->
        <component ref="content"
                   :is="QComs[value.type]"
                   v-model="value"
                   :edit="edit"></component>
      </div>
      <div class="q-operate"
           v-if="edit">
        <a v-if="showAddItem"
           class="add-select-item"
           @click="addItem">添加选项</a>
        <span v-if="!(value.detail&&value.detail.format==='mobile')"
              class="required-des">必填</span>
        <el-switch class='switch'
                   v-if="!(value.detail&&value.detail.format==='mobile')"
                   v-model="value.required"
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
        <div class="sort fuck">排序</div>
        <div class="del"
             @click="remove">删除</div>
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
    }
  },
  data () {
    return {
      QComs: QComs
    }
  },
  mounted () {
    if (this.value.verification === 'Y') {
      this.value.verifiy = true
    }
  },
  methods: {
    addItem () {
      if (this.value.detail.list.length < 20) {
        this.value.detail.list.push({
          value: '选项'
        })
      }
    },
    remove () {
      this.$emit('remove', this.index)
    }
  },
  watch: {
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
      return !this.value.ext.fixedness && (this.value.type === QTypes.RADIO || this.value.type === QTypes.CHECKBOX || this.value.type === QTypes.SELECT)
    }
  }
}
</script>

<style scoped lang="scss">
.single-select-wrap {
  width: 100%;
  font-size: 12px;
  position: relative;
  padding-bottom: 10px;
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
        height: 30px;
        line-height: 30px;
        font-size: 12px;
      }
    }
    .index {
      float: left;
      width: 20px;
      margin-top: 2px;
    }
    .question-content {
      border-radius: 2px;
      border: 1px solid #d2d2d2;
      margin-left: 20px;
      padding: 10px;
      .q-des {
        margin-bottom: 15px;
      }
      .q-edit {
        padding: 0 10px;
        margin-bottom: 15px;
        &.display {
          // margin-bottom: 0;
        }
        .q-subject {
          margin-bottom: 14px;
        }
      }
      .q-operate {
        padding: 0 10px 0 15px;
        text-align: right;
        .add-select-item {
          float: left;
          cursor: pointer;
          margin-top: 6px;
        }
        .required-des {
          display: inline-block;
          vertical-align: middle;
        }
        .el-switch__core {
          height: 18px;
          .el-switch__button {
            width: 14px;
            height: 14px;
          }
        }
        .sort {
          display: inline-block;
          text-align: center;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 30px;
          border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
        }
        .del {
          display: inline-block;
          text-align: center;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 30px;
          border: 1px solid #d2d2d2;
          cursor: pointer;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
