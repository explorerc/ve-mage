<template>
    <div id="entry" class="container">
        {{serverUrl}}<br>{{buildEnv}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      serverUrl: process.env.API_PATH,
      buildEnv: process.env.BUILD_ENV
    }
  }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 10px;
    }
</style>
