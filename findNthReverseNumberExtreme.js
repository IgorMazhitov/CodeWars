function findReverseNumber(n) {
    if (n < 200) {
      let array = []
      let check = 0
      for (i = 0;; i++) {
        if (check == check.toString().split('').reverse().join('')) {
          array.push(check)
        }
        check += 1
        if (array.length == n) {break}
      }
      return array.pop()
    } // up to BigInt
    let check
    let final
    if (n >= (1.1 * 10 ** Math.trunc(Math.log10(n))) && n <= (2 * 10 ** Math.trunc(Math.log10(n)))) {
      check = (BigInt(n - (10 ** Math.floor(Math.log10(n))))).toString()
      final = BigInt(check + check.toString().split('').reverse().join(''))
        } else if (n < (1.1 * 10 ** Math.trunc(Math.log10(n)))) {
          check = (BigInt(n - (10 ** (Math.floor(Math.log10(n)) - 1)))).toString()
          final = BigInt(check + check.toString().split('').reverse().splice(1).join(''))
        } else if (n >= (2 * 10 ** Math.trunc(Math.log10(n)))) {
          check = (BigInt(n - (10 ** Math.floor(Math.log10(n))))).toString()
          final = BigInt(check + check.toString().split('').reverse().splice(1).join(''))
        }
        return final
  }