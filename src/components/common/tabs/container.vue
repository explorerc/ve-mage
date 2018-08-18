
<script>
export default {
  props: {
    panels: {
      type: Array,
      required: true
    }
  },
  render (h) {
    const contents = this.panels.map(panel => {
      return panel.isActive ? panel.$slots.default : null
    })
    return h('div', {class: 'tab-content'}, contents)
  }
}
</script>

<style>
</style>
