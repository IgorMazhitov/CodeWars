function findAll(n, k) {
    // __________________
    // ALL VARIABLES 
    let ans = [], numbers = [], numbers1 = []
    let start = ('1').repeat(k)
    let end = (Math.ceil(n / k) - 1).toString().repeat(k)
    let low = start.split('').map(Number)
    let high = end.split('').map(Number)
    // ALL VARIABLES 
    // __________________
    // IF BUTS AND MAYBES 
    if (k == 0) {
      return n == 0 ? 1 : 0
    } // sum is 0 or length is 0
    if (n / k == 9) {
      return [1, ('9').repeat(k), ('9').repeat(k)]
    } // only 9's
    if (n / k > 9) {
      return []
    } // empty array
    // IF BUTS AND MAYBES 
    // __________________
    // FINDING LOWEST AND HIGHEST NUMBERS
    for (i = start.length-1; i >= 0; i--) {
      for (j = 0; j < 8; j++) {
        low[i] += 1
        if (low.reduce((a, b) => a + b) == n) {
          numbers.push(parseInt(low.join('')))
          break
        }
      }
      if (low.reduce((a, b) => a + b) == n) {break}
      } // lowest
    for (i = high.length-1; i >= 0; i--) {
      high[i] += 1
      if (high.reduce((a, b) => a + b) == n) {
        numbers1.push(parseInt(high.join('')))
        break
      }
    } // highest
    // FINDING LOWEST AND HIGHEST NUMBERS
    // __________________________________
    // FINDING AMOUNT OF CORRECT NUMBERS
    let count = 0
    let inter = numbers[0].toString().split('').map(Number)
    for (i = inter.length-1; i >= 0; i--) {
      if (inter[i] == 9) {continue} else {
        if (inter.reduce((a, b) => a + b) == n) {count++}
        if (parseInt(inter.join('')) >= numbers1[0]) {
            break
          }
        inter[i] += 1
        if (inter[i] < inter[i+1]) {
          for (j = i+1; j < inter.length; j++) {
            inter[j] = inter[i]
            i++
          }
        }
        i++
      }
    }
    return [count, numbers[0].toString(), numbers1[0].toString()]
  }
  