# TIL

## 얕은 복사와 깊은 복사

```jsx
// 얕은 복사
// 값을 변경하면 같이 변경되어 의도치 않게 값이 변경될 수 있다.
const user = {
	name: 'lee',
	age: 5
}
const copyUser = user
console.log(copyUser === user) // true
user.age = 22
console.log(copyUser.age) // 22

// 값은 변경되지만 배열같은 참조값에 값을 추가하면 값이 복사된다.
const user = {
	name: 'lee',
	age: 5
	emails: ['gmaail']
}
const copyUser = Object.assign({},user) // {}에 user을 담아 반환
console.log(copyUser === user) // false
user.age = 22
console.log(copyUser.age) // 5

user.emails.push('naveer')
console.log(user.emails === copyUser.emails) // true

// 값은 변경되지만 배열같은 참조값에 값을 추가하면 값이 복사된다.
const user = {
	name: 'lee',
	age: 5
	emails: ['gmaail']
}
const copyUser = {...user} // {}에 user을 담아 반환
console.log(copyUser === user) // false
user.age = 22
console.log(copyUser.age) // 5

user.emails.push('naveer')
console.log(user.emails === copyUser.emails) // true

// 깊은 복사 (lodash 패키지 이용)
// 중첩 객체가 있다면 깊은 복사를 통해 값이 변경되지 않게 하는 것이 좋다.
import _ from 'lodash'

const user = {
	name: 'lee',
	age: 5
	emails: ['gmaail']
}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user) // false

```

# import

```jsx
import '가져올 이름' from '가져올 경로'
```

# export

```jsx
// 기본통로로 나가는 data
export default function (data) {
	return Object.prototype.toString.call(data).slice(8, -1)
// 내보낼 때 이름을 안 정해줘도 되고 하나의 data만 내보낼 수 있다.
// import 시 마음대로 이름을 정할 수 있다.

// 정해준 이름으로 나가는 data
export '내보낼 이름'
// 내보낼 때 이름을 정해줘야 되고 여러개의 data를 내보낼 수 있다.
// import 시 중괄호로 묶어 {내보낼 이름} 써야 한다.
// 한번에 import 할 때는
import * as '가져올 이름' from '파일이름'
```

# lodash

## import lodash

```jsx
import _ from 'lodash'
```

## import function

```jsx
// 고유화 작업

const userA = [
	{userId: '1', name: 'lee'},
	{userId: '2', name: 'kim'},
]
const userB = [
	{userId: '1', name: 'lee'},
	{userId: '3', name: 'park'},
]

const userC = userA.concat(userB) // userA와 userB를 합치는 함수
_.uniqBy(userC, 'userId') // 겹치는 값(userId)를 없애주는 함수

// 합치면서 겹치는 값을 없애주는 함수
const userD = _.unionBy(userA, userB, 'userId')
```

```jsx
const users = [
	{userId: '1', name: 'lee'},
	{userId: '2', name: 'kim'},
	{userId: '3', name: 'jeon'},
	{userId: '4', name: 'park'}
]

// name: 'kim' 이라는 값을 찾을 때 {찾을 범위, 찾을 값}
const foundUser = _.find(users, {name: 'kim'})
// {userId:'2',name:'kim'}

// name: 'lee' 라는 index값을 찾을 때 {찾을 범위, 찾을 값}
const foundUserIndex = _.findIndex(users, {name: 'lee'})
// 0

// name: 'park' 이라는 값을 제거할 때 {찾을 범위, 제거할 값}
_.remove(users, {name: 'park'})
// {userId: '1', name: 'lee'}, {userId: '2', name: 'kim'},
// {userId: '3', name: 'jeon'}

```

