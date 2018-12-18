/***
 * 根据检索自动聚焦输入
 * @param querySelector
 */
export function focusInput (querySelector) {
  if (!querySelector) console.error('querySelector不能为空')
  let s = document.querySelectorAll(querySelector)
  s.forEach(item => {
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
    if (input) input.focus()
  })
}
