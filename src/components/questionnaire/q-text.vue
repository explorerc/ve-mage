<template>
  <div class="q-edit-content">
    <com-input v-if="!edit"
               :type="value.detail.format"></com-input>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default () {
        return {}
      }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.q-edit-content {
}
</style>
