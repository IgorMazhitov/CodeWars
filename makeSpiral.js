function spiralize (n) {
    let array = []
    for (i = 0; i < n; i++) {
      array.push([])
      for (j = 0; j < n; j++) {
        array[i].push(0)
      }
    } // creating the array
    let start = 0, end = array.length // starting points
    for (k = 0; k < n; k++) {
      // main loop (where we will 'cut' our array from all sides)
      for (i = start; i < end; i++) {
        // loop for y coordinate or 'vertical loop'
        if (i !== start && i !== end-1) {
          // condition (if row is not first or last)
          for (j = start; j < end; j++) {
            // loop for x coordinate or 'horizontal loop'
            if (i == start + 1) {
              // condition for 0'z in the beggining of the 2nd row 
              if (check(end-1, i, array) == undefined) {
                // check if there is no any 1's on the way (can accept only 2 1's, before and after or in the corner)
              array[i][end-1] = 1
                }
            } else {
              // else - we will add 1's to the index 0 and last index of the array
              if (check(end-1, i, array) == undefined) {
                // same same 
              array[i][end-1] = 1
                }
              if (check(start, i, array) == undefined) {
                // same same 
              array[i][start] = 1
                }
            }
          }
        } else {
          // else - we will fulfill array with 1's
          if (i == start) {
            // if it is 1'st row we will start from the left element
            for (j = start-1; j < end; j++) {
              if (check(j, i, array) == undefined) {
                // same same
              array[i][j] = 1
                }
            }
          } else {
            // else = we will start from 'start' index
            for (j = start; j < end; j++) {
              if (check(j, i, array) == undefined) {
                // same same 
              array[i][j] = 1
                }
            }
            }
          }
      }
      start += 2
      // we cut it from up and left
      end -= 2
      // we cut it from bottom and right
    }
    return array
    // that's it
  }
  
  
  // this function was used to check all surrounding elements if there's more, than 2 1's
  function check(x, y, array) {
    let el = array[y][x]
    let count = 0
    if (y - 1 >= 0 && x - 1 >= 0 && y + 1 < array.length && x + 1 < array.length) {
      if (array[y][x-1] == 1) {count++}
      if (array[y][x+1] == 1) {count++}
      if (array[y+1][x] == 1) {count++}
      if (array[y-1][x] == 1) {count++}
      if (array[y+1][x+1] == 1) {count++}
      if (array[y+1][x-1] == 1) {count++}
      if (array[y-1][x+1] == 1) {count++}
      if (array[y-1][x-1] == 1) {count++}
    }
    if (count >= 3) {return count}
  } 
  