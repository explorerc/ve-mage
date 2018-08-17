Date.prototype.format = function (fmt) {
  if (!this) return
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

String.prototype.formatDate = function (fmt) {
  let params = this.replace(/[-\s]/g, ':').split(':')
  params[1] -= 1
  let result = new Date(...params)
  return result.format(fmt)
}

String.prototype.gbLength = function () {
  var l = this.length
  var blen = 0
  for (let i = 0; i < l; i++) {
    if ((this.charCodeAt(i) & 0xff00) !== 0) {
      blen += 2
    } else {
      blen += 1
    }
  }
  return blen
}

String.prototype.gbIndex = function (length) {
  let l = this.length
  let blen = 0
  let index = 0
  for (let i = 0; i < l; i++) {
    if ((this.charCodeAt(i) & 0xff00) !== 0) {
      blen += 2
    } else {
      blen += 1
    }
    if (blen === length) {
      index = i
      break
    } else if (blen > length) {
      index = i - 1
      break
    }
  }
  return index
}

String.prototype.copyClipboard = function (callBack) {
  var input = document.createElement('input')
  input.setAttribute('value', this)
  input.style.position = 'fixed'
  input.style.top = '1000000000px'
  document.body.appendChild(input)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    input.blur()
    if (callBack) callBack('success')
  } else {
    if (callBack) callBack('error')
  }
  var lt = setTimeout(function () {
    clearTimeout(lt)
    document.body.removeChild(input)
  }, 500)
}
