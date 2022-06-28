# TIL

## 배열 생성 방법

- 배열 리터럴
- Array 생성자 함수
    - 전달된 인수의 개수에 따라 다르게 동작
- Array.of
- Array.from

> Array.from
`Array.from` 메서드는 유사 배열 객체 혹은 이터러블 객체를 인수로 전달 받아 배열로 변환하여 반환
querySelector 할 때 노드리스트가 반환되면 Array.from도 사용 가능 할 것 같다.

## 배열 메서드
결과물을 반환하는 패턴이 두 가지이다.

- 원본 배열을 직접 변경하는 메서드 - push/pop, unshift/shift, splice, join, reverse, fill
- 원본 배열을 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드 - slice, concat


