function generateBC(url, separator) {
    let array = [], array2 = []
    let words = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
    let del = 0
    if (url.match(/(http(s)*)/) !== null) {
      url = url.replace(/(http(s)*:\/\/)/, ' ').trim()
    } // deleting https if exist
    if (url.match(/(\/index\.)/) !== null) {
      url = url.replace(/(\/index\.)/, ' ').trim()
    } // deleting last el if index is existing
    url = url.split('/').filter(el => el !== '')
    if (url.length == 1) {
      return '<span class="active">HOME</span>'
    } // if only HOME page exist
    // first - HOME 
    let home = url.shift()
    home = '<a href="/">HOME</a>'
    array.push(home)
    // first HOME 
    // ----------------------------------
    // second - last element
    let last = url.pop()
    if (last.match(/\-/g) !== null) {
      last = last.replace(/[^a-zA-Z\-].+/, ' ').trim()
      if (last.length <= 30) {
        last = last.split('-').map(el => el.toString().toUpperCase()).join(' ')
        last = '<span class="active">' + last + '</span>'
      } else {
        last = last.split('-').filter(el => {
            if (!words.includes(el) && el.match(/[^a-zA-Z]/) == null) {
              return el
            }
          }).map(el => el[0].toString().toUpperCase()).join('')
        last = '<span class="active">' + last + '</span>'
      }
    } else {
      last = '<span class="active">' + last.match(/^\w+(?=\.)*/g).toString().toUpperCase() + '</span>'
    }
    // second - last element
    // ----------------------------------
    // third - middle
    let check = url.join(' ').split(' ')
    for (i = 0; i < check.length; i++) {
      if (check[i].match(/\-/g) !== null) {
        if (check[i].length <= 30) {
          check[i] = check[i]
            .split('-')
            .map(el => el.toString().toUpperCase())
            .join(' ')
        } else {
          check[i] = check[i]
            .split('-')
            .filter(el => {
            if (!words.includes(el)) {
              return el
            }
          })
            .map(el => el[0].toString().toUpperCase())
            .join('')
        }
      } else {
        check[i] = check[i].toString().toUpperCase()
      }
    }
    for (i = url.length-1; i >= 0; i--) {
      let href = '<a href="/'
      for (j = 0; j <= i; j++) {
        href += url[j] + '/'
      }
      array2.push(href + '">' + check[i] + '</a>')
    }
    array2 = array2.reverse()
    array = array.concat(array2)
    array.push(last)
    return array.join(separator)
  }