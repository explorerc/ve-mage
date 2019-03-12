function parseDom (str) {
  var div = document.createElement('div')
  div.innerHTML = str
  return div.children
};

export default {
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  data () {
    return {
      enable: true
    }
  },
  mounted () {
    if (this.edit && this.value.enable) {
      this.renderTool()
    }
  },
  filters: {
    voidLink (value) {
      return value || 'javascript:void(0)'
    }
  },
  watch: {
    'value.enable': {
      handler (val) {
        if (this.edit && val) {
          this.$nextTick(() => {
            this.renderTool()
          })
        }
      }
    }
  },
  methods: {
    handleEnter (e) {
      e.stopPropagation()
      if (this.edit) {
        this.$refs.target.style.border = '2px dashed #ffd021'
        this.$refs.edit.style.display = 'block'
      }
    },
    handleLeave () {
      if (this.edit) {
        this.$refs.target.style.border = '2px dashed transparent'
        this.$refs.edit.style.display = 'none'
      }
    },
    showEdit () {
      // let rect = this.$refs.target.getBoundingClientRect()
      this.$refs.editTarget.show()
    },
    disable () {
      this.$messageBox({
        header: '删除',
        type: 'error',
        width: '400px',
        content: '是否确认删除该模块？删除后将无法还原。',
        cancelText: '取消',
        confirmText: '删除',
        handleClick: (e) => {
          if (e.action === 'confirm') {
            this.value.enable = false
          }
        }
      })
    },
    renderTool () {
      this.$refs.target.addEventListener('mouseover', this.handleEnter)
      this.$refs.target.addEventListener('mouseout', this.handleLeave)
      this.$refs.edit = parseDom('<div ref="edit" class="edit"><i class="icon-delete"></i><i class="icon-pen"></i></div>')[0]
      this.$refs.target.insertBefore(this.$refs.edit, this.$refs.target.firstChild)
      this.$refs.edit.querySelector('.icon-delete').addEventListener('click', this.disable)
      this.$refs.edit.querySelector('.icon-pen').addEventListener('click', this.showEdit)
      this.$refs.target.style.border = '2px dashed transparent'
    }
  }
}
