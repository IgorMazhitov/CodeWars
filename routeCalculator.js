function calculate(sum){
    if (sum.match(/[^0-9\$\+\-\*\.]/g)) {return '400: Bad request'} // check for wrong input
    if (!sum.match(/\$|\*|\-|\+/g)) {
      return +sum} // check for only numbers
    let sum1 = sum.match(/(\d+\.*\d*)/g).map(Number) //temporary array with numbers
    let actions = sum.replace(/(\d+\.*\d*)/g, ',' + 'repl' + ',').split(',').filter(String) // temporary array with actions to do
    let check = actions.map(el => el == 'repl' ? el = sum1.shift() : el) // final array to solve
    for (i = 0; i < check.length; i++) {
      if (check[i+1] == '$') {
        check[i] = check[i] / check[i+2]
        let div = check.splice(i+1, 2)
        i -= 1
        if (check.length == 1) {return +check.join('')}
      }
    } // division
    for (i = 0; i < check.length; i++) {
      if (check[i+1] == '*') {
        check[i] = check[i] * check[i+2]
        let mul = check.splice(i+1, 2)
        i -=1
        if (check.length == 1) {return +check.join('')}
      }
    } // multiply
    for (i = 0; i < check.length; i++) {
      if (check[i+1] == '-') {
        check[i] = check[i] - check[i+2]
        let sub = check.splice(i+1, 2)
        i -= 1
        if (check.length == 1) {return +check.join('')}
      }
    } // sub
    for (i = 0; i < check.length; i++) {
      if (check[i+1] == '+') {
        check[i] = check[i] + check[i+2]
        let add = check.splice(i+1, 2)
        i -= 1
        if (check.length == 1) {return +check.join('')} 
      }
    } // add
  }