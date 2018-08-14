<template>
  <div class="pagination-box" v-if="total">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @current-change="changePage">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 've-pagination',
    props: {
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    created () {
      this.changePage(1)
    },
    methods: {
      changePage (num) {
        this.$emit('changePage', num)
      }
    }
  }
</script>

<style lang="scss">

</style>
