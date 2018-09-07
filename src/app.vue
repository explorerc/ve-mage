<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import EventBus from 'src/utils/eventBus'
export default {
  created () {
    EventBus.$on('auth', () => {
      this.$router.replace('/login')
    })
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
