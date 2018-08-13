import Com from './com.vue'

export default {
  extends: Com,
  data () {
    return {
      verticalOffset: 0,
      height: 0,
      visible: false,
      autoClose: 3000,
      timerId: 0
    }
  },
  mounted () {
    this.createTask()
  },
  beforeDestory () {
    this.clearTask()
  },
  methods: {
    createTask () {
      if (!this.autoClose) return
      this.timerId = setTimeout(() => {
        this.visible = false
      }, this.autoClose)
    },
    clearTask () {
      if (!this.timerId) return
      clearTimeout(this.timerId)
    },
    afterEnter () {
      this.height = this.$el.offsetHeight
    }
  },
  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  }

}
