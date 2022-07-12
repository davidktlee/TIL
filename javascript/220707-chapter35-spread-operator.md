# TIL

# 스프레드 문법

여러 값들의 집합을 펼쳐서 개별적인 값들의 목록으로 만든다.

사용 가능한 대상은 `Array, String, Map, Set, Dom컬렉션, arguments` 와 같이

`for...of` 문으로 순회할 수 있는 이터러블에 한정된다.

**스프레드 문법의 결과는 값이 아니며 다음과 같이 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용할 수 있다.**

- 함수 호출문의 인수 목록
- 배열 리터럴의 요소 목록
- 객체 리터럴의 프로퍼티 목록

### 함수 호출문의 인수 목록에서 사용하는 경우

```jsx
const arr = [1,2,3]
const max = Math.max(...arr) // 3
```

**Rest 파라미터와 반대의 개념이다**

### 배열 리터럴 내부에서 사용하는 경우

기존 concat 이나 splice 메서드를 사용하는 방식과는 다르게 스프레드 문법을 사용하면 더욱 간결하게 표현 가능하다.

```jsx
// ES5
const arr = [1,2].concat([3,4])
console.log(arr) // [1,2,3,4]

// ES6
const arr = [...[1,2],...[3,4]]
console.log(arr) // [1,2,3,4]

// ES6 splice 메서드
const arr1 = [1,3]
const arr2 = [2,4]
arr1.splice(1,0, ...arr2)
```

- 이터러블을 배열로 변환

```jsx
function sum() {
	return [...arguments].reduce((pre,cur)=> pre + cur,0)
	}
	console.log(sum(1,2,3)) // 6

	// 더 나은 방법 -> Rest 파라미터
	const sum = (...args) => args.reduce((pre,cur) => pre + cur,0)
	console.log(sum(1,2,3)) // 6
	```

	**이터러블이 아닌 유사 배열 객체를 배열로 변경하려면 `Array.from` 메서드**

	### 객체 리터럴 내부에서 사용하는 경우

	```jsx
	// 특정 프로퍼티 변경
	const obj = {
		a: 1,
			b: 2
			}
			const changed = {...obj, b: 100}
			console.log(obj) // {a:1, b:100}
			```

			ㅇ
