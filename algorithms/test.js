function answer(param) {
  let res = 1
  for (let i = 0; i < param.length; i++) {
    for (let j = 0; j < param[i].length; j++) {
      res *= param[i][j]
    }
  }
  return res
}
console.log(answer([[6, 5], [2], [13, 2]]))
