<template>
  <div class="font-container" :class="customClass">
    <div ref="target">
      <div class="font-content">1231231</div>
    </div>
    <com-edit ref="editTarget">
      <div>文字内容</div>
      <com-editer></com-editer>
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
    customClass: {
      type: String,
      default: ''
    },
    edit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      fontContent: ''
    }
  }
}
</script>

<style scoped lang="scss">
.font-container {
  display: inline-block;
  position: relative;
  .font-content {
    width: 400px;
    height: 340px;
  }
}
</style>
