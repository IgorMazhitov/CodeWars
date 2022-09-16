var theLift = function(queues, capacity) {
    let lift = []
    let stops = [0]
    while (final(queues) !== true) {
      // ___________________ UP ___________________
      for (let i = 0; i < queues.length; i++) {
        if (checkToGrabUp(queues[i], i)) {
          lift = takeInUp(queues[i], lift, i, capacity)
          if (stops[stops.length-1] !== i) {stops.push(i)}
        }
        if (lift.includes(i)) {
          queues[i] = drop(queues[i], lift, i)
          if (stops[stops.length-1] !== i) {stops.push(i)}
        }
        if (checkToGrabUp(queues[i], i)) {
          lift = takeInUp(queues[i], lift, i, capacity)
          if (stops[stops.length-1] !== i) {stops.push(i)}
        }
      }
      // ___________________ UP ___________________
      //___________________ DOWN ___________________
      for (let j = queues.length-1; j >= 0; j--) {
        if (checkToGrabDown(queues[j], j)) {
          lift = takeInDown(queues[j], lift, j, capacity)
          if (stops[stops.length-1] !== j) {stops.push(j)}
        }
        if (lift.includes(j)) {
          queues[j] = drop(queues[j], lift, j)
          if (stops[stops.length-1] !== j) {stops.push(j)}
        }
        if (checkToGrabDown(queues[j], j)) {
          lift = takeInDown(queues[j], lift, j, capacity)
          if (stops[stops.length-1] !== j) {stops.push(j)}
        }
      }
      //___________________ DOWN ___________________
    }
    if (stops[stops.length-1] !== 0) {stops.push(0)}
    return stops
  }
  function takeInUp (floor, lift, floorNumber, capacity) {
    for (let q = 0; q < floor.length; q++) {
      if (floor[q] > floorNumber) {
        if (lift.length < capacity) {
          let el = parseInt(floor.splice(q, 1).join(''))
          lift.push(el)
          q--
        }
        if (lift.length == capacity) {break}
        if (floor.length == 0) {break}
      }
    }
    return lift
  }
  // take in people in to the lift on the way Up
  function takeInDown (floor, lift, floorNumber, capacity) {
    for (let w = 0; w < floor.length; w++) {
      if (floor[w] < floorNumber) {
        if (lift.length < capacity) {
          let el = parseInt(floor.splice(w, 1).join(''))
          lift.push(el)
          w--
        }
        if (lift.length == capacity) {break}
        if (floor.length == 0) {break}
      }
    }
    return lift
  }
  // take in people in to the lift on the way Down
  function final (building) {
    for (let e = 0; e < building.length; e++) {
      for (let r = 0; r < building[e].length; r++) {
        if (building[e][r] !== e) {
          return false
        }
      }
    }
    return true
  }
  // check if everybody on their floors
  function drop (floor, lift, floorNumber) {
    for (let t = 0; t < lift.length; t++) {
      if (lift[t] == floorNumber) {
        let el = parseInt(lift.splice(t, 1).join(''))
        floor.push(el)
        t--
      }
    }
    return floor
  }
  // dropping people on their floor
  function checkToGrabUp (floor, floorNumber) {
    for (let y = 0; y < floor.length; y++) {
      if (floor[y] > floorNumber) {
        return true
      }
    }
    return false
  }
  // check if we have to take in people
  function checkToGrabDown (floor, floorNumber) {
    for (let u = 0; u < floor.length; u++) {
      if (floor[u] < floorNumber) {
        return true
      }
    }
    return false
  }