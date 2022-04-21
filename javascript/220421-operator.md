# TIL 

# 비교연산자

연산자 | 이름
--|--
`==` | 동등op
`!=` | 부등
`===` | 일치
`!==` | 불일치
`a>b`|`a>=b`
`a<b`|`a<=b`

## 논리 연산자

연산자 | 이름
--|--
a && b | 그리고(and) - 가장 먼저 찾은 falsy 반환, 만약 못 찾으면 마지막 값 반환
a||b | 또는(or) - 가장 먼저 찾은 truthy 반환, 만약 못 찾으면 마지막 값 반환
!a | 부정(Not) - a가 truthy면 `false` 로, falsy면 `true` 로 바뀜

## 삼항연산자

조건 ? 2항 : 3항
```js
const a = 123
function abc() {
  console.log('hello')
}
a ? hello() : null //a가 truthy면 2항 실행, 아니면 3항 실행
```
