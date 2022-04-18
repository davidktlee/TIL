# JS 데이터 (지료형, Data type)

## 원시형

1. 문자(String)
1. 숫자(Number)
1. 불린(Boolean)
1. null
1. undefined
1. 심볼(Symbol)
1. 큰정수(BigInt)

## 참조형

1. 배열(Array)
1. 객체(Object)
1. 함수(Function)

## 문자

항상 따옴표로 묶여 있어야 한다.

```JS
"david"
'david'
`내용 ${}` // 보간
```

## 숫자

Not A Number 숫자 데이터 / 숫자로 표시가 불가!

```JS
123
0.123
```

## 불린

```JS
true
false
```

## null

값이 없다는 것을 명시할 때 쓰는 데이터.

## undefined

값이 할당되지 않은 것을 컴퓨터가 암시해주는 것.

## 심볼

유일한 식별자(ID) 데이터 이름을 만들 때 사용

```js
const s = Symbol('weight') // 설명

const user = {
  name: 'David',
  [s]: 100,
}

console.log(user[s])
```

## BigInt

큰 정수

```js
123n // 숫자 뒤 n으로 표기
```

## 배열

대괄호 안에 요소를 정의한 것.

배열 안의 아이템들은 item 또는 element 라고 부름

```js
const a = [1, 2, 3] // 리터럴 방식

a[0] // 1 (인덱싱)
```

## 객체

중괄호 안에 프로퍼티를 정의한 것.

키와 밸류로 정의하고 키는 유일한 값이기 때문에 조회하기 편하다.

키는 중복 불가능.

```js
const a = {
  key: value // 키에 _ 가 들어가면 숨겨놓은 키라는 뜻
}
a.key // 점 표기법으로 키 값으로 조회
a['key'] // 괄호 표기법으로 키 값으로 조회

// 객체 안의 함수
const b = {
  b: function () {

  }
  // 콜론과 function 생략 가능
  b() {

  }

}
```

## 함수

```js
function order() {
  //명령
}
order() // 호출함으로써 함수를 사용
```
# 형 변환

```js
// 자바스크립트에서는 동등연산자를 사용하면 자동으로 형 변환이 일어나기 때문에 사용X
const a = 123;
const b = '123';

console.log(a == b) // true
// 일치 연산자 사용
console.log(a === b) // false
```

# truthy, falsy 값으로
```js
if () {
	console.log('참')
}
// 조건을 적는 부분에 truthy 값을 넣으면 콘솔이 출력 되고 falsy 값을 넣으면 출력 안됨.

```
## truthy 값

- true
- 숫자 1
- 객체
- 배열
등 falsy 값 외에 모든 값 truthy 값

## falsy 값

- false
- 숫자 0
- -0
- null
- undefined
- NaN
- 0n
- ‘’ 비어있는 문자

# 자료형 확인

1. `typeof 데이터`

```js
console.log(typeof '123') // String
```
- null과 array는 정확하게 알아낼 수 없다.

1. `데이터.constructor`

```js
console.log([].constructor === Array) // true
```

1. `Object.prototype.toString.call(데이터)`

```js
// 타입 체크 함수
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType(null)) // [null]
```
