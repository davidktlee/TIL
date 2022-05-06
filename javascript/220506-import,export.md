# TIL

# module 가져오기, 내보내기

모듈 안에서의 그냥 this는 `undefined`월

ESM 문법

```js
// 이름 내보내기 (여러 개 가능)
export function hello() {
  console.log('hello')
}

export const world = {
  a: 1,
  b: 2,
}
// 객체 구조 분해에서는 콜론 대신 as를 사용
import { named as lee, named2 } from './test.js'

// 기본 내보내기 (하나만 가능)
// import 할 때 이름이 같지 않아도 됨
export default function hi() {
  console.log('hi')
}

// import 시
import hi, { hello, world } from './test.js'

// 한번에 다 가져올 때
import * as 가져올이름 from './test.js'
```

## nodeJS 에서 가져오기

CommonJS 문법 = 기본 내보내기가 없음

```js
// 가져오기 는 require
const path = require('path')

// 내보내기 는 module.exports 객체로 내보냄
module.exports = {
  a: 1,
  2: 2,
}
```
