function validSolution(board){
    let test = []
    for (i = 0; i < board.length; i++) {
      board[i] = board[i].filter((item, pos) => board[i].indexOf(item) == pos)
      if (board[i].length !== 9) {return false}
    } //horizontal check
    for (i = 0; i < board.length; i++) {
      let inter = []
      for (j = 0; j < board.length; j++) {
        inter.push(board[j][i])
      }
      test.push(inter)
    } //flipping over the matrix
    board = test
    for (i = 0; i < board.length; i++) {
      board[i] = board[i].filter((item, pos) => board[i].indexOf(item) == pos)
      if (board[i].length !== 9) {return false}
    } //vertical check
    for (i = 0; i < board.length; i++) {
      let check1 = []
      for (j = 0; j < 3; j++) {
        for (k = 0; k < 3; k++) {
          check1.push(board[j].shift())
          
        }
      }
      check1 = check1.filter((item, pos) => check1.indexOf(item) == pos)
      if (check1.includes(undefined)) {break}
      if (check1.length !== 9) {return false}
    } //blocks 3x3 check
    return true
  }