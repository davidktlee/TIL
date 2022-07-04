# TIL

# 정규표현식

정규표현식은 일정한 패턴을 가진 문자열들을 표현하기 위해 사용하며,

문자열을 대상으로 패턴 매칭 기능을 제공한다.

## 정규표현식의 생성

### 정규표현식 리터럴

`/패턴/플래그/`

### RegExp 생성자 함수

`new RegExp(패턴[, 플래그])

### RegExp 메서드

`RegExp.prototype.exec`

인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색해 결과를 배열로 반환. 없는 경우 null

**첫 번째 매칭 결과만 반환**

`RegExp.prototype.test`

인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색해 결과를 불리언 값으로 반환.

`RegExp.prototype.match`

대상 문자열과 인수로 전달받은 정규표현식과의 매칭결과를 배열로 반환한다.

## 플래그

정규 표현식의 검색 방식을 설정하기 위해 사용 6개 중 중요한 3가지

선택적으로 사용할 수 있으며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정도 가능.

| 플래그 | 의미 | 설명 |
| --- | --- | --- |
| i | Ignore case | 대소문자 구분 없이 패턴 검색 |
| g | Global | 대상 문자열 내에서 패턴과 일치하는 모든 문자열 전역 검색 |
| m | multi line | 문자열의 행이 바뀌더라도 패턴 검색 진행 |

## 패턴

- 문자열의 일정한 규칙을 표현하기 위해 사용
- `/`로 열고 닫으며 문자열의 따옴표는 생략

### 문자열 검색

```tsx
// 문자열 검색
const target:string = 'Hello Everyone'
let regExp = /Hello/;
regExp.test(target) // true
```

### 임의의 문자열 검색

.은 임의의 문자 1개를 의미한다.

```tsx
// 임의의 문자열 검색 .은 임의의 문자 1개를 의미한다.
let regExp = /.../g;
target.match(regExp) // ['Hel', 'lo ','Eve','ryo',]
```

### 반복검색

- {최소,최대} 반복되는 문자열 의미 {최소,}는 앞선 패턴이 최소 1번이상 반복-
- +는 앞선 패턴이 최소 1번이상 반복, ?는 앞선 패턴이 최대 1번이상 반복

```tsx
let regExp = /l{1,2}/g
target.match(regExp) // ['ll']
```

### OR검색

- `|` 은 or의 의미를 갖는다.
- 범위를 지정하려면 [] 내에 -를 사용한다.
- `\d` 는 숫자를 의미하며, `\D` 는 문자를 의미한다.
- `\w` 는 알파벳, 숫자, 언더스코어를 의미한다. `\W` 는 나머지 문자를 의미한다.

```tsx
const target = 'A AA B'
const regExp = /[A-Z]+/g
// 대소문자 구분 X = [A-Za-z]
// 숫자 [0-9]
target.match(regExp) // ['A','AA''B']
```

### NOT 검색

- `[...]`내의`^` 은 not의 의미를 갖는다. `[^0-9]` 는 숫자를 제외한 문자를 의미한다.

### 시작 위치로 검색

- `[...]` 밖의 `^` 은 문자열의 시작을 의미한다.

### 마지막 위치로 검색

- `$` 는 문자열의 마지막을 의미한다.

## 자주 사용하는 정규표현식

### 특정 단어로 시작하는지 검사

```jsx
const url = 'http://example.com';
// 'http'로 시작하는지 검사
// ^ : 문자열의 처음을 의미한다.
const regexr = /^http/;
```

### 특정 단어로 끝나는지 검사

```jsx
const fileName = 'index.html';

// 'html'로 끝나는지 검사
// $ : 문자열의 끝을 의미한다.
const regexr = /html$/;

console.log(regexr.test(fileName)); // true
```

### 숫자로만 이루어진 문자열인지 검사

```jsx
const targetStr = '12345';

// 모두 숫자인지 검사
// [^]: 부정(not)을 의미한다. 얘를 들어 [^a-z]는 알파벳 소문자로 시작하지 않는 모든 문자를 의미한다.
// [] 바깥의 ^는 문자열의 처음을 의미한다.
const regexr = /^\d+$/;

console.log(regexr.test(targetStr)); // true
```

### 하나 이상의 공백으로 시작하는지 검사

- `\s` 는 여러 가지 공백 문자를 의미한다.

```jsx
const targetStr = ' Hi!';

// 1개 이상의 공백으로 시작하는지 검사
// \s : 여러 가지 공백 문자 (스페이스, 탭 등) => [\t\r\n\v\f]
const regexr = /^[\s]+/;

console.log(regexr.test(targetStr)); // true
```

### 아이디로 사용 가능한지 검사

```jsx
const id = 'abc123';

// 알파벳 대소문자 또는 숫자로 시작하고 끝나며 4 ~10자리인지 검사
// {4,10}: 4 ~ 10자리
const regexr = /^[A-Za-z0-9]{4,10}$/;

console.log(regexr.test(id)); // true
```

### 메일 주소 형식에 맞는지 검사

```jsx
const email = 'ungmo2@gmail.com';

const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

console.log(regexr.test(email)); // true
```

### 핸드폰 번호 형식에 맞는지 검사

```jsx
const cellphone = '010-1234-5678';

const regexr = /^\d{3}-\d{3,4}-\d{4}$/;

console.log(regexr.test(cellphone)); // true
```

### 특수 문자 포함 여부 검사

```jsx
const targetStr = 'abc#123';

// A-Za-z0-9 이외의 문자가 있는지 검사
let regexr = /[^A-Za-z0-9]/gi;

console.log(regexr.test(targetStr)); // true

target.replace(/[^A-Za-z0-9]/gi,'')
```

특수 문자를 제거할때는 `String.prototype.replace` 메서드를 사용한다.
