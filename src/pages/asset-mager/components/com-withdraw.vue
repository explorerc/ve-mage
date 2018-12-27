<template>
<message-box class="width-draw-msg"
            width="530px"
            type="promt"
            header="提现"
            confirmText="下一步"
            @handleClick="close">
            <div class="modal-box">
              <com-input :value.sync="value" placeholder="请输入提现金额" class='inp' :class="{ 'error':errorTips }" @focus='errorTips = false'></com-input>
              <el-button @click='widthDraw'>提现</el-button>
            </div>
</message-box>
</template>

<script>
export default {
  data () {
    return {
      errorTips: false,
      value: 0
    }
  },
  methods: {
    widthDraw () {

    },
    close () {
      console.log('close')
      this.$emit('withdrawClose')
    }
  }
}
</script>

<style lang='scss' scoped>
.modal-box {
  width: 100%;
  margin: 15px 10px;
}
</style>
