<template>
  <div class="font-container" v-if="value.enable">
    <div ref="target">
      <div class="font-content" v-html="value.content"></div>
    </div>
    <com-edit ref="editTarget" class="font-edit custom-editor" @show="showHandle" @hide="hideHandle">
      <div class="nav-blank-title">文字</div>
      <label class='label-spe'>文字内容</label>
      <com-editer class="font-editer" v-model="value.content" ></com-editer>
    </com-edit>
  </div>
</template>

<script>
import ComEditer from 'src/components/ve-html5-editer'
import editMixin from './mixin'
import ComEdit from './edit'

export default {
  mixins: [editMixin],
  components: {
    ComEdit, ComEditer
  },
  props: {
    offTop: {
      type: Number,
      default: -38
    }
  },
  data () {
    return {
      sizeEditor: false,
      height: 0
    }
  },
  methods: {
    showHandle (rect) {
      // this.$refs.target.style.cssText = 'visibility:hidden'
      // let height = this.$refs.editTarget.$el.querySelector('.vue-html5-editor .toolbar').offsetHeight
      // console.log(rect.height - height)
      // this.$refs.editTarget.$el.querySelector('.vue-html5-editor .content').style.cssText = `height:auto;min-height:300px`
    },
    hideHandle () {
      // this.$refs.target.style.cssText = ''
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/variable.scss';
.font-container /deep/ {
  display: inline-block;
  position: relative;
  font-size: 14px;

  .font-content {
    width: 100%;
    word-break: break-all;
    a {
      color: $color-blue;
      text-decoration: underline;
    }
  }
  .font-edit {
    .font-editer {
      min-width: auto;
      height: 100%;
      .vue-html5-editor {
        width: 300px;
        margin: 0 auto;
        min-height: 400px;
        line-height: inherit;
        background-color: transparent;
        background-color: #dadada;
        position: relative;
        border-radius: 4px;
        .toolbar {
          background-color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
        .content {
          padding: 0;
          position: absolute;
          top: 37px;
          left: 0;
          overflow: auto;
          width: 100%;
          bottom: 0;
        }
      }
      li {
        padding: 0 10px;
        .icon {
          width: 16px;
          height: 16px;
        }
      }
      li[title='列表'],
      li[title='图片'],
      li[title='全屏'] {
        display: none;
      }
    }
  }
  .custom-editor.font-edit {
    .font-editer {
      background-color: transparent;
      li .icon {
        font-size: 12px;
      }
    }
    .label-spe {
      padding-bottom: 10px;
    }
  }
}
</style>
