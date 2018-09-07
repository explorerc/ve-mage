<template>
  <div class="com-check-box">
    <input v-if="isChecked" type="checkbox" :id="id" checked>
    <input v-else type="checkbox" :id="id">
    <label :for="id"></label>
  </div>
</template>

<script>
  export default {
    name: 'com-checkbox',
    data () {
      return {
        id: `checkbox_${Math.random()}`,
        isChecked: false
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: {
        handler (newVal) {
          this.isChecked = newVal
        },
        immediate: true
      },
      isChecked (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .com-check-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    top: 1px;
    input[type="checkbox"] + label::before {
      content: "\a0";
      display: inline-block;
      width: 10px;
      height: 10px;
      padding: 2px;
      border: solid 1px #888;
      line-height: 1;
      text-align: center;
      border-radius: 2px;
    }
    input[type="checkbox"]:checked + label::before {
      border: solid 1px #4B5AFE;
      transition: border-color .2s;
    }
    input[type="checkbox"]:checked + label::after {
      position: absolute;
      content: "\2713";
      color: #4B5AFE;
      font-size: 12px;
      top: -1px;
      left: 4px;
    }
    input {
      display: none;
    }
    &[small] {
      top: 4px;
      input[type="checkbox"] + label::before {
        height: 8px;
        width: 8px;
      }
      input[type="checkbox"]:checked + label::after {
        top: -2px;
        left: 3px;
        font-size: 10px;
      }
    }
  }
</style>
