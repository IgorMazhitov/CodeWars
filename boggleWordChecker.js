function checkWord( board, word ) {
    let start = {'x': [], 'y': []}, x = start['x'], y = start['y']
    let bool = [], stack = []
    for (i = 0; i < board.length; i++) {
      for (j = 0; j < board.length; j++) {
        if (board[i][j] == word[0]) {
          start['x'].push(j) 
          start['y'].push(i)
        }
      }
    }
    function snail (x, y, i, res) {
      res += board[y][x]
      board[y][x] = board[y][x].toLowerCase()
      if (x + 1 < board.length) {
        if (board[y][x+1] == word[i]) {
          snail(x+1, y, i+1, res)
        }
      }
      if (x - 1 >= 0) {
        if (board[y][x-1] == word[i]) {
          snail(x-1, y, i+1, res)
        }
      }
      if (y - 1 >= 0) {
        if (board[y-1][x] == word[i]) {
          snail(x, y-1, i+1, res)
        }
      }
      if (y + 1 < board.length) {
        if (board[y+1][x] == word[i]) {
          snail(x, y+1, i+1, res)
        }
      }
      if (y - 1 >= 0 & x - 1 >= 0) {
        if (board[y-1][x-1] == word[i]) {
          snail(x-1, y-1, i+1, res)
        }
      }
      if (y - 1 >= 0 & x + 1 < board.length) {
        if (board[y-1][x+1] == word[i]) {
          snail(x+1, y-1, i+1, res)
        }
      }
      if (y + 1 < board.length & x - 1 >= 0) {
        if (board[y+1][x-1] == word[i]) {
          snail(x-1, y+1, i+1, res)
        }
      }
      if (y + 1 < board.length & x + 1 < board.length) {
        if (board[y+1][x+1] == word[i]) {
          snail(x+1, y+1, i+1, res)
        }
      }
      board[y][x] = board[y][x].toUpperCase()
      if (res == word) {bool.push(true)}
      return res
    }
    for (j = 0; j < x.length; j++) {
      let check = snail(x[j], y[j], it = 1, res = '')
      for (i = 0; i < board.length; i++) {
        board[i] = board[i].map(el => el.toUpperCase())
      }
    }
    if (word.length == 1) {
      return (board.join('').match(word)) ? true : false
    } // 1 letter word
    return (bool.length !== 0) ? true : false
  }
  