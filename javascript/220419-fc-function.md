# TIL

# 함수

## 선언과 표현

### 선언

```js
function hello() {
  console.log('hello')
}
hello()
```

- 호이스팅 O

```js
abc()
function abc() {
  console.log(123)
}
```

### 표현

```js
const hello = function () {
  console.log('hello')
}
hello()
```

- 호이스팅 X

## 함수의 반환과 종류

`return`
`undefined`

`return` 키워드를 사용하면 반환 후 함수 종료

함수를 호출했을 때 `return` 이 없으면 undefined 반환

## 메소드 체이닝

```js
function sum(hello, world) {
  return hello + world
}
console.log(sum('hello ', 'world').slice(6, -1))
// 반환된 데이터에 slice 메소드를 사용
```

## 매개변수 패턴

### 기본값 정의

```js
function sum(a, b) {
  return a + b
}
console.log(sum(1, 2)) // 3
console.log(sum(4)) // NaN (4 + undefined)

// 매개변수의 기본값 정의
function sum(a = 1, b = 3) {
  return a + b
}
console.log(sum(4)) // 7
console.log(sum()) // 4
```

### 구조 분해 할당 (Destructuring Assignment)

```js
const user = {
  name: 'lee',
  age: 64,
}

function getName({ name }) {
  return user.name
}
console.log(getName(user)) // 'lee'

const user = {
  name: 'lee',
  age: 64,
}

function getName({ name, email = 'default@mail/com' }) {
  return [name, email]
}
console.log(getName(user)) // ['lee', 'default@mail/com']
```

### 나머지 매개변수 (Rest 파라미터)

```js
function sum(...rest) {
  // 전개연산자, 배열로 받는다.
  return [...rest]
}
console.log(sum(1, 2, 3, 4, 5, 6)) //[1,2,3,4,5,6]
```

### `arguments` 객체

```js
function sum() {
  console.log(arguments) // 유사배열객체 [1,2,3,4,5,6,7]
}
console.log(sum(1, 2, 3, 4, 5, 6, 7))
```

## 즉시실행함수 (IIFE)

즉시 실행 함수 (표현)

```js
;(function () {
  // 앞의 ;은 인터프리터가 앞 문장이 끝났다고  인식 하지 못할 수 있어서 익명함수 앞에 붙여준다.
  console.log(123)
})() // 123
;(function () {
  console.log(123)
})() // 123
```

## 콜백 = 콜백 함수

함수의 인수로 사용되는 함수

```js
function sum(callback) {
  callback()
}

sum(function () {
  console.log('sum')
})
```

```js
// setTimeout(함수, 지연시간)
function abc() {
  console.log('abc')
}
setTimeout(abc, 1000)

// 이런 방식으로도 가능하다/
setTimeout(function () {
  //로직
}, 1000)
```

