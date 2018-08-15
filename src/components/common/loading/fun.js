import Vue from 'vue'
import Com from './com.vue'

const ComConstructor = Vue.extend(Com)
let instance = null
export default (options = {}) => {
  let state = true
  let loadingText
  if (options === false) {
    state = false
  } else {
    ({
      loadingText
    } = options)
  }

  if (!instance && state) {
    instance = new ComConstructor({
      propsData: {
        loadingText: loadingText === undefined ? 'Loading' : loadingText
      }
    })

    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  } else {
    instance.vm.visible = state
  }

  return instance.vm
}
