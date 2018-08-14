<template>
  <div class="v-frame">
    <p>
      感谢您选择微吼，在开始前请先设置登录密码
    </p>
    <com-input :value.sync="outValue" placeholder="" ></com-input>
    <p>密码创建要求</p>
    <a href="javascript:;" class="v-confirm" @click="setPassword()">确定</a>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        outValue: ''
      }
    },
    components: {
    },
    created () {
    },
    watch: {
    },
    methods: {
      setPassword () {
        alert(this.outValue)
      }
    }
  }
</script>
<style lang="scss">
.v-frame {
  width: 900px;
  height: 600px;
  margin: 200px auto;
  border: 1px solid #333;
  .v-confirm {
    display: block;
    width: 385px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #333;
    color: #fff;
    text-decoration: none;
  }
}
</style>
