/***
 * 根据检索自动聚焦输入
 * @param querySelector
 */
export function focusInput (querySelector, pQuerySelector) {
  if (!querySelector) console.error('querySelector不能为空')
  let s = document.querySelectorAll(querySelector)
  if (s.length >= 1) {
    let item = s[0]
    let input = null
    if (item.tagName.toLocaleLowerCase() === 'input' || item.tagName.toLocaleLowerCase() === 'textarea') {
      input = item
    } else {
      let it = item.querySelectorAll('input')
      if (it && it.length > 0) {
        input = it[0]
      } else {
        let ta = item.querySelectorAll('textarea')
        if (ta && ta.length > 0) {
          input = ta[0]
        }
      }
    }
    if (input) {
      let pBox = document.querySelectorAll(pQuerySelector)[0]
      let scrollHeith = window.$(input).offset().top - window.$(pBox).offset().top
      scrollHeith = scrollHeith > 100 ? scrollHeith - 50 : scrollHeith
      window.$(pBox).animate({scrollTop: `${scrollHeith}px`}, 500)
      let st = setTimeout(() => {
        clearTimeout(st)
        let pInput = window.$(input).parent(querySelector)
        if (pInput.length > 0) {
          input.focus()
        }
      }, 2000)
    }
  }
}
