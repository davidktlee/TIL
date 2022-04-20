# quiz

1. 다음 중 옳지 않은 문법인 것은?

```jsx
1. const user = {
	name: 'lee'
}
user.age = 30

2. const user = {
	name,
	age
}

3. const user = {
	'person name': 'kim'
}
console.log(user.'person name')

4. const user = {
	name: 'park'
}
console.log(user[name])

5. const obj = {
	for: 1,
	var: 3,
	return: 1
}
```

1. 기대하는 값으로 옳은 것은?

```jsx
let ranking= {
  "3": "독일",
  "5": "스위스",
  "2": "영국",
  "100": "중국",
  "1": "한국"
};

for (let rank in ranking) {
  console.log(rank);
}

1. // 3, 5, 2, 1, 100
2. // 3, 5, 2, 100, 1
3. // 1, 100, 2, 5, 3
4. // 1, 2, 3, 5, 100
```

1. 심볼에 대한 설명으로 옳은것은?

```jsx
1. 
const id = Symbol("id");
const user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) 
console.log(key); // name, age, id

2.
const id = Symbol('id');
const user = {
	name: 'lee',
	id: 123
}	
console.log(user) // {name: 'lee', [Symbol(id)]: 123}

3.
const id = Symbol('id');
const user = {
	age: 96,
}
user[id]= 456
console.log(user) // {name: age, [Symbol(id)]: 456}

4. 
const id = Symbol('id');
const user = {
	age: 96,
}
user[id]= 456
user.id = 567
console.log(user) // {name: age, [Symbol(id)]: 567}
```

- 해설

1번

1. .표기법으로 추가 가능하다.
2. 키값과 밸류값이 같으면 생략가능하다.
V 3. 키값을 따옴표로 묶은 것은 점 표기법으로 접근 불가능하다.
3. 대괄호표기법으로 접근 가능하다.
4. 객체는 예약어를 키 값으로 사용할 수 있다.

2번

답 4번
for in 반복문을 돌리면 키 값이 적은대로 나오는 것이 아닌 숫자 오름차순으로 나온다.

3번

1. Symbol값은 for in문으로 조회되지 않는다.
2. 대괄호 안에 넣지 않으면 단순 문자열이 되어버린다. {name: 'lee', id:123}
3. 추가할때 대괄호 안에 넣어야 한다.
4. 밑에 user.id는 심볼값이 아니기때문에 덮어씌워지는 것이 아닌 새로운 프로퍼티가 생긴다.

