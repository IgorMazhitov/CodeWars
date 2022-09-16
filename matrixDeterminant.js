function determinant(m) {
    let res = 0
    if (m.length == 1) {
      res = parseInt(m.join(''))
      m = res
      return res
    }
    if (m.length == 2) {
      res = m[0][0] * m[1][1] - m[0][1] * m[1][0]
      m = res
      return res
    }
    let inter = []
    for (let i = 0; i < m[0].length; i++) {
      inter.push([])
      for (let j = 1; j < m.length; j++) {
        inter[i].push([])
        for (let k = 0; k < m[j].length; k++) {
          if (k !== i) {
            inter[i][j-1].push(m[j][k])
          }
        }
      }
    }
    for (let i = 0; i < m[0].length; i++) {
      if (i % 2 == 0) {
        inter[i] = m[0][i] * determinant(inter[i])
      } else {
        inter[i] = m[0][i] * (-determinant(inter[i]))
      }
    }  
    return inter.reduce((a, b) => a + b)
  };