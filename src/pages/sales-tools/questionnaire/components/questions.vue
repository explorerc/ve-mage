<template>
  <div>
    <com-question v-for="(item,index) in dragData"
                :value.sync="item"
                :edit="false"
                :index="index+1"
                :key="index"
                :class="{isSingle:isSingle}"
                :ref="`com${index}`">
    </com-question>
    <com-question v-if="phoneData.length"
                  :class="{isBorder:isBorder}"
                  class="v-phone"
                  :value.sync="phoneData[0]"
                  :edit="false"
                  :ref="`comPhone`"
                  :index="dragData.length+1"
                  :isView="true"
                  :key="dragData.length+1">
    </com-question>
  </div>
</template>
<script>
// import { types as QTypes } from 'components/questionnaire/types'
import question from 'components/questionnaire/wrap'
export default {
  components: {
    comQuestion: question
  },
  props: {
    dragData: {
      type: Array,
      default: null
    },
    phoneData: {
      type: Array,
      default: null
    }
  },
  computed: {
    isSingle () {
      return (this.dragData.length === 1) && (this.phoneData.length === 0)
    }
  }
}
</script>
