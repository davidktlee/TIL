# TIL

# 함수

## 화살표 함수

표현식이다

```js
;() => {}

const hello = () => {
  return 'hello'
}

// 바로 리턴값인 경우 중괄호 생략 가능
const hello = () => 'hello'

// 리턴값이 객체인 경우
const hello = () => ({}) //객체를 소괄호로 감싸야한다.(함수블럭과 똑같이 생겼기때문)

// 매개변수가 하니인 경우 괄호 생략 가능
const hello = (msg) => `hello ${msg}`
console.log(hello('world'))
```

## this

1. 일반 함수에서 `this`는 호출되는 위치에서 정의된다.

```js
const user = {
  name: 'lee',
  age: 96,
  email: 'never.com',
  phone: '01012341234',
  getName: function () {
    return this.name
  },
}
console.log(user.getName()) // -> 여기서 호출
```

2. 화살표 함수에서 `this`는 선언 된 위치에서 정의된다.
자신이 선언된 함수범위 (렉시컬스코프)에서 정의됨.

콜백 함수에 this가 들어간다면 화살표함수를 써야한다.
```js
function wrapper() {
  this.name = 'name'
  const user = {
    name: 'lee',
    age: 96,
    email: 'never.com',
    phone: '01012341234',
    getName: () => {
      return this.name
    },
  }
}
wrapper() // name
```

### call, apply
특정 객체에 없는 기능을 불러와서 쓰기 위한 문법

call 과 apply의 차이는 인수에 값을 배열이나 쉼표로 구분하냐의 차이
