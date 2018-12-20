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
    let countHeight = function () {
      let pBox = document.querySelectorAll(pQuerySelector)[0]
      let scrollHeith = window.$(input).offset().top - window.$(pBox).offset().top
      scrollHeith = scrollHeith > 100 ? scrollHeith - 50 : scrollHeith
      return scrollHeith
    }
    if (input) {
      let pBox = document.querySelectorAll(pQuerySelector)[0]
      pBox.scrollTop = 0
      let scrollHeith = countHeight()
      window.$(pBox).animate({scrollTop: `${scrollHeith}px`}, 500)
    }
  }
}

export function downloadIamge (url, name) {
  let image = new Image()
  // 解决跨域 Canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous')
  image.onload = function () {
    let canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    let context = canvas.getContext('2d')
    context.drawImage(image, 0, 0, image.width, image.height)
    let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase()
    ext = ext.split('?')[0]
    let imgData = canvas.toDataURL('image/' + ext)
    let a = document.createElement('a')
    let event = new MouseEvent('click')
    a.download = name || '下载图片名称'
    a.href = imgData
    a.dispatchEvent(event)
  }
  image.src = url
}
