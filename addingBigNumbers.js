
// No BigInt

function add(a, b) {
    let a1 = a.split(''), b1 = b.split('') 
    // 2 arrays are created
    let right = 0, left = 0, res 
    let bi = b1.length-1
    // some values
    if (b1.length <= 24 && a1.length <= 24) {
        return (parseInt(a) + parseInt(b)).toString()
      }
    // acceptable length
    for (i = a1.length-1; i >= 0; i--) {
      res = parseInt(a1[i]) + parseInt(b1[bi])
      if (res > 9) {
        right = res - 10
        left = 1
        a1[i] = right
        a1[i-1] = parseInt(a1[i-1]) + left
        if (i-1 < 0) {break}
        left = 0
      } else {
        a1[i] = res + left
      }
      bi -= 1
    }
    if (a.length < b.length) {
      if (left == 1) {
        let end = Math.abs(a.length-b.length)
        let b2 = b.split('').splice(0, end)
        for (i = end-1; i >= 0; i--) {
          res = parseInt(b2[i]) + left
          left = 0
          if (res > 9) {
            left = 1
            right = res - 10
            b2[i] = right
            b2[i-1] = parseInt(b2[i-1]) + left
            left = 0
          } else {
            b2[i] = res
          }
        }
        return b2.concat(a1).join('')
      } else {
        let end = Math.abs(a.length - b.length)
        let b2 = b.split('').splice(0, end)
        return b2.concat(a1).join('')
      }
      
    } else {
      if (a.length == b.length) {
        if (left == 1) {
          return 1 + a1.join('')
        }
      }
    }
  }