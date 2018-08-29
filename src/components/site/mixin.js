function parseDom (str) {
  var div = document.createElement('div')
  div.innerHTML = str
  return div.children
};

export default {
  mounted () {
    this.$refs.target.addEventListener('mouseover', this.handleEnter)
    this.$refs.target.addEventListener('mouseout', this.handleLeave)
    this.$refs.edit = parseDom('<div ref="edit" class="edit"><i class="iconfont icon-pen"></i></div>')[0]
    this.$refs.target.insertBefore(this.$refs.edit, this.$refs.target.firstChild)
    this.$refs.edit.addEventListener('click', this.showEdit)
  },
  filters: {
    voidLink (value) {
      return value || 'javascript:void(0)'
    }
  },
  methods: {
    handleEnter (e) {
      e.stopPropagation()
      if (this.edit) {
        this.$refs.target.style.border = '2px dashed #ff0000'
        this.$refs.edit.style.display = 'block'
      }
    },
    handleLeave () {
      if (this.edit) {
        this.$refs.target.style.border = 'none'
        this.$refs.edit.style.display = 'none'
      }
    },
    showEdit () {
      this.$refs.editTarget.show()
    }
  }
}
