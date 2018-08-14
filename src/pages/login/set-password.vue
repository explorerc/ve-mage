<template>
  <div class="v-frame">
    <p>
      感谢您选择微吼，在开始前请先设置登录密码
    </p>
    <com-input :value.sync="outValue" placeholder="请输入公司名称" :max-length="50" ></com-input>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: ['account', 'mobile'],
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
    }
  }
</script>
<style lang="scss">
.v-frame {
  width: 900px;
  height: 600px;
  margin: 200px auto;
  border: 1px solid #333;
}
</style>
