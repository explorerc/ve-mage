<template>
  <div>
    123
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
      outValue: function () {
        if (this.outValue.trim() !== '') {
          this.setPassword()
        }
      }
    },
    methods: {
      setPassword () {
        if (this.outValue.trim() === '') {
          this.isWarning = true
        } else {
          this.isWarning = false
        }
      }
    }
  }
</script>
<style>
</style>

