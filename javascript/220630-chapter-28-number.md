# TIL

# Number

표준 빌트인 객체인 Number 객체는 생성자 함수 객체다.

new를 사용하지 않고 Number 객체를 사용하면 Number 인스턴스가 아닌 숫자를 반환한다.

## Number 프로퍼티

`Number.MAX_SAFE_INTEGER`

자바스크립트에서 안전하게 표현할 수 있는 가장 큰 정수

`Number.MIN_SAFE_INTEGER`

자바스크립트에서 안전하게 표현할 수 있는 가장 작은 정수

## Number 메서드

`Number.isFinite`

인수로 전달된 숫자값이 유한수이면 true 아니면 false

`Number.toFixed`

숫자를 반올림하여 문자열로 반환한다. 반올림하는 소수점 이하 자릿수를 나타내는 정수값을 인수로 전달 할 수 있다.

`Number.prototype.toString`

숫자를 문자열로 변환하여 반환한다. 진법을 인수로 전달할 수 있다.
