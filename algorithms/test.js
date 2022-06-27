function answer(arr) {
  let res = []
  let totalNum = 0
  let min = Number.max_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      totalNum += arr[i]
      if (arr[i] < min) min = arr[i]
    }
  }
  res.push(totalNum)
  res.push(min)
  return res
}
console.log(answer(12, 77, 38, 41, 53, 92, 85))