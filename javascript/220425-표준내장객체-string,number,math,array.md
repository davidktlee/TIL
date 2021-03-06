# TIL

## for

```js
for (시작조건(초기화); 종료조건; 변화조건) {
  실행문
}

for (let i = 0; i < 10; i += 1) {
  console.log(i)
}

ex)
const ulEl = document.querySelector('ul')
for (let i = 0; i < 10; i += 1) {
  const liEl = document.createElement('li')
  liEl.textContent = `Heelll ${i}`
  ulEl.appendChild(liEl)
}
```

### for of

배열을 반복할 때 사용

반복을 하려면 구조가 같아야 한다.

```js
const users = [
  { name: 'lee', age: 96 },
  { name: 'kim', age: 97 },
]
for (const user of users) {
  console.log(user)
}
```

### for in

객체를 반복할 때 사용

```js
const lee = {
  age: 15,
  isValid: true,
}

for (const key in lee) {
  console.log(key)
}
```

## while

조건이 truthy면 무한 반복
조건이 falsy면 실행 안함

```js
let i = 0 // 시작 조건을 밖에 적어 놓는다.
while (조건) {
  // 종료 조건
  console.log(i) // 그 외 코드
  i += 1 // 변화조건
}
```

## do while

조건이 falsy라도 최소 1번은 실행

```js
let i = 0 // 시작
do {
  console.log(i)
  i += 1 // 변화
} while (i < 3) // 종료
```

# 표준 내장 객체(메소드)

static 메소드는 일반 문자에서 사용할 수 없다.

## 문자 

```js
// split
const str = 'Hello World'
const arr = str.split(' ')
console.log(arr) // arr ['Hello', 'World']

// indexOf
const str = 'The fox jumps over'
console.log(str.indexOf('fox')) // fox가 들어있으면 index값 없으면 -1

// includes 있는지 없는디

// match
문자.match(정규식)
const str = 'Hello World!'
console.log(str.match(/^.*(?=\s)/gi)) //임의의 문자로 시작해 공백까지 전체/대소문자 구분없이 일치

// replace 대체할 때 사용
const str = 'Hello World'
str.replace('world', 'lee') // 찾을 문자, 대체 할 문자 
str.replace('world', '') // 'Hello' 

// slice 추출 원하는 시작 지점과 끝나는 지점 직전 인덱스 추출
const str = 'Hello World'
str.slice(0, 5) // 0번째부터 4번째까지 추출 (5번의 직전까지 추출)
str.slice(0, -1) // 마지막 문자는 제거는 -1

// toUpperCase 대문자로 변경
const str = 'hello world'
str.toUpperCase() // 'HELLO WORLD'

// trim 앞 뒤 공백을 없앨 때 사용
const str = '   hello world  '
str.trim() // 'hello world'
```

## 숫자

```js
// toFixed() 몇번 째 자리까지 출력할건지 (문자데이터로 바뀜)
const num = 3.142424
num.toFixed(2) // 3.14 
parseFloat() // 다시 숫자로 바꿔주는 메소드

// (1)parseInt(), (2)Number.parseInt() 정수로 변환
const num = '1241'
parseInt(num) // 1241

// (1)isNaN(), (2)Number.isNaN() 숫자인지 아닌지 확인 (2)번 사용 권유
const num = 123
inNaN(num) // false 

// (1)parseFloat(), (2)Number.parseFloat() 실수를 포함해 숫자로 변환
const num = '3.142424'
num.parseFloat(num) // 3.142424 
```

## 수학

```js

// abs 절대값
const num = -7
Math.abs(num) // 7

// ceil 올림
const num = 0.45
Math.ceil(num) // 1

// round 반올림
const num = 0.45
Math.round(num) // 1

// floor 내림
const num = 4.5
Math.floor(num) // 4

// min 최소값 구하기
Math.min(0,1,3,4,5,10) // 0

// max 최대값 구하기
Math.max(0,1,3,4,5,10) // 10

// random 랜덤값 구하기
function getRandom(min,max) {
  return Math.floor(Math.random() * (max-min) + min)
}
console.log(getRandom(0,99)) // 0부터 99까지의 랜덤한 숫자 구하기

Math.random()*10 // 10안의 숫자 랜덤
```

## 배열

```js

// length 배열의 길이
const arr = [1,2,3,4]
arr.length // 4

// concat 주어진 배열이나 기존 배열을 합쳐서 새 배열 반환, 원본 수정X
const arr1 = [1,2,3,4]
const arr2 = [4,5,6,7]
const arr3 = arr1.concat(arr2) // [1,2,3,4,4,5,6,7]

// every 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트
const arr = [1,2,3,4]
arr.every(item => { // item은 배열의 요소들을 하나씩 받는 것
  return item < 5 // 판별 함수
}) // true

// filter 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환, 원본 수정X 
const arr = [1,2,3,4]
arr.filter(item => {
  return item > 3
}) // [1,2] 배열의 개수가 줄어들 수 있다.

// find 주어진 함수를 만족하는 첫 번째 요소의 값을 반환, 없다면 undefined
const arr = [1,2,3,4]
arr.find(item => {
  return item < 3
}) // 1

// findIndex 주어진 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환, 없다면 -1
const arr = [1,2,3,4]
arr.findIndex(item => {
  item === 5
}) // -1

// forEach 주어진 함수를 배열 요소 각각 실행
const arr = [1,2,3,4]
arr.forEach(item => {
  console.log(item)
}) // [1,2,3,4]

// join 배열의 모든 요소를 연결해 하나의 문자열로 만듬
const arr = [1,2,3,4]
arr.join('//') // 1//2//3//4

// map // 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열 반환, 원본 수정X
const arr = [1,2,3,4]
arr.map((item,index) => { 
  return item * 2
}) // 0,1,2,3 [2,4,6,8]

const arr = ['ar','패션','스포츠']
arr.map(item => {
  return {
    name: item
  }
}) // [{name: 'ar'},{'name: 패션'},{'name: 스포츠'}]

// pop 기존 배열의 마지막 요소 제거하고 없앤 요소를 반환
const arr = [1,2,3,4]
arr.pop() // 4
console.log(arr) // [1,2,3]

// shift 기존 배열의 첫번째 요소 제거하고 없앤 요소 반환
const arr = [1,2,3,4]
arr.shift() // 1
console.log(arr) // [2,3,4]

// push 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이 반환
const arr = [1,2,3,4]
arr.push(5,6,7) // 7
console.log(arr) // [1,2,3,4,5,6,7]

// unshift 배열의 앞에 하나 이상의 요소를 추가하고, 배열의 새로운 길이 반환
const arr = [1,2,3,4]
arr.unshift(5,6,7) // 7
console.log(arr) // [5,6,7,1,2,3,4]

// reduce 콜백함수에서 리턴 된 값이 누적되는 값으로 들어감. 2번째 인수는 초기값
// accumulator = 누적되는 값, currentValue = 아이템들 
const arr = [1,2,3,4]
const sum = arr.reduce((acc, cur)=> {
  return acc + cur
},0)
console.log(sum) // 10

// reverse 배열의 순서를 반전, 원본 변경O
const arr = [1,2,3,4]
console.log(arr.reverse()) // [5,4,3,2,1]

// slice 원하는 부분만 잘라낼 때 사용, 인수 - (어디서 시작, 직전값까지 추출)
const arr = [1,2,3,4]
console.log(arr.slice(0,3)) // 4

// some 배열안의 어떤 요소라도 통과하는지 테스트 (빈 배열이면 false)
const arr = [1,2,3,4]
console.log(arr.some(item=> {
  return item === 1
}) // true

// splice(인덱스, 삭제개수, 추가데이터) 배열의 기존 요소를 삭제 또는 교체, 추가함,(제거한 데이터를 배열로 반환) 원본 변경O 
const arr = ['a','b','c','d']
console.log(arr.splice(2,1,'e')) // ['c']
console.log(arr) // ['a','b','e','d']
```

## object 객체

```js
// Object.assign 객체의 얕은 복사
const user = {
  name: 'lee',
  age: 96
}
const userB = {
  name: 'kim',
  isValid: true
}
const userA = {} 
Object.assign(userA,user,) // (복사될 객체, 출처 객체1, 출처객체2, ...)
console.log(userA) // userA {name: 'lee',age: 96}
Object.assign(userA,user,userB)
console.log(userB) // userA {name: 'kim', age: 96, isValid: true} 같은 속성이 있으면 덮어 씌어진다
const res = Object.assign({},userA,user,userB) // 빈 객체를 만들면 출처객체를 내용의 변화없이 합칠 수 있다. 

// entries 2차원 배열 만들기 
const user = {
  name: 'lee',
  age: 96
}
const res = Object.entries(user)
console.log(res) 
/* [[
  'name',
  'lee'
],
[
  'age',
  96
]]  */ 
// 만들고 for문 돌릴 수 있음
for (const item of res){
  console.log(item[0]) // key
  console.log(item[1]) // value
}

// keys 객체의 key들 추출
const user = {
  name: 'lee',
  age: 96,
  isValid: true
}
const res = Object.keys(user)
console.log(res) // ['name', 'age', 'isValid']

// values 객체의 value들 추출
const user = {
  name: 'lee',
  age: 96,
  isValid: true
}
const res = Object.values(user)
console.log(res) // ['lee', 96, true]
```

## 날짜와 시간

```js

// new Date()  현재시간 불러오기
const date = new Date()
// 시간은 변수에 잘 담지 않는다.
date.getFullYear() // X

new Date().getFullYear() // 현재년도 불러오기
new Date().getMonth() // 현재월 불러오기
new Date().getDate() // 현재날짜 불러오기
new Date().getDay() // 현재요일 불러오기
new Date().getHours() // 현재 시 불러오기
new Date().getMinutes() // 현재 분 불러오기
new Date().getSeconds() // 현재 초 불러오기

// Date.now 1970.01.01 00:00:00 이후 몇 ms 지났는지

// moment.js // 시간에 대한 라이브러리 (좀 무겁다)
특정 시간을 쉽게 추출 해낼 수 있다.
moment().format('YYYY년') // 2022년 
// Day.js 시간에 대한 라이브러리(좀 가볍다)
```
