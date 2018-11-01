
<script>
export default {
  name: 'ComDrag',
  props: {
    dragTarget: {
      type: String,
      default: ''
    },
    customData: {
      type: Array,
      default () {
        return []
      }
    },
    customIndex: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isRender: true,
      isHolding: false,
      currentIndex: -1,
      prevIndex: -1,
      startIndex: -1,
      currentTarget: null,
      shadowStyle: { height: 0 },
      offsetTop: 0,
      offsetY: 0,
      prevLength: 0
    }
  },
  mounted () {
    this.offsetTop = this.$refs.dragWrap.offsetTop
    this.init()
  },
  updated () {

  },
  render () {
    const classNames = {
      'com-drag': true,
      'isHolding': this.isHolding
    }
    if (this.$slots.default) {
      this.$slots.default = this.$slots.default.filter((item) => {
        return !item.elm || (item.elm.classList && !item.elm.classList.contains('shadow-item'))
      })
      console.log(this.$slots.default)
      if (this.currentIndex >= 0) {
        console.log(this.currentIndex)
        const shadow = (<div class="shadow-item" style={this.shadowStyle}></div>)
        this.$slots.default.splice(this.currentIndex, 0, shadow)
      }
    }
    return (
      <div on-mousedown={(e) => this.startDrag(e)} ref="dragWrap" class={classNames}>
        {this.$slots.default}
      </div >
    )
  },
  methods: {
    init () {
      this.$refs.dragWrap.addEventListener('mousemove', (e) => {
        if (this.isHolding) {
          let top = e.pageY - this.offsetTop - this.offsetY + this.$refs.dragWrap.scrollTop
          this.currentTarget.style.top = `${top}px`
          let itemHeight = parseInt(this.shadowStyle.height)
          this.currentIndex = Math.round((e.pageY - this.offsetTop + this.$refs.dragWrap.scrollTop) / itemHeight)
          console.log(this.currentIndex)
          if (this.currentIndex < 0) {
            this.currentIndex = 0
          }
          if (this.currentIndex > this.customData.length) {
            this.currentIndex = this.customData.length
          }
          // console.log(`当前插入位置${this.currentIndex}`)
        }
      })

      document.addEventListener('mouseup', (e) => {
        if (this.isHolding) {
          if (this.startIndex >= 0 && this.startIndex !== this.currentIndex) {
            let temp = this.customData.splice(this.startIndex, 1)
            if (this.startIndex < this.currentIndex && this.currentIndex > 0) {
              this.currentIndex -= 1
            }
            this.customData.splice(this.currentIndex, 0, temp[0])
            if (this.customIndex) {
              this.customData.map((item, index) => {
                item[this.customIndex] = index + 1
              })
            }
          }
          this.isHolding = false
          this.currentIndex = -1
          if (this.currentTarget) {
            this.currentTarget.classList.remove('isHolding')
            this.currentTarget.style.top = '0px'
          }
          this.currentTarget = null
          this.offsetY = 0
        }
      })
    },
    startDrag (e) {
      if (!(this.dragTarget && e.target.matches(this.dragTarget))) {
        return
      }
      let elm = this.getWrap(e.target)
      // if (!this.shadowStyle.height) {
      //   this.shadowStyle.height = `${elm.offsetHeight}px`
      // }
      // this.shadowStyle.height = `${elm.offsetHeight}px`
      let _index = this.getIndex(elm)
      this.isHolding = true
      this.startIndex = _index
      this.currentIndex = _index
      this.currentTarget = elm
      this.offsetY = e.offsetY + e.target.offsetTop
      this.currentTarget.style.top = `${e.pageY - this.offsetTop - this.offsetY + this.$refs.dragWrap.scrollTop}px`
      this.currentTarget.classList.add('isHolding')
    },
    getWrap (target) {
      if (target.parentNode === this.$refs.dragWrap) {
        return target
      }
      return this.getWrap(target.parentNode)
    },
    getIndex (elm) {
      return this.$slots.default.findIndex((item) => {
        return item.elm === elm
      })
    }
  }
}
</script>

<style scoped lang="scss">
.com-drag {
  &.isHolding {
    * {
      user-select: none;
    }
  }
  /deep/ {
    position: relative;
    .shadow-item {
      border: 1px dashed #fc5659;
    }
    .isHolding {
      position: absolute;
      z-index: 10;
    }
  }
}
</style>
