# TIL

인출할 금액과 총 금액을 입력 받아 계좌의 남은 금액을 반환하는 함수를 작성하시오.

조건: ATM 기기는 5배수 금액만 취급하며 인출할 때 0.5만원의 수수료가 필요하다.

첫 번째 입력 값은 인출할 금액이고, 두 번째 값은 계좌의 금액이다.

정상적인 인출이 불가능 할 경우, 통장의 원래 금액을 반환한다.

```js
function answer(withdraw, total) {
  let willWithdraw = withdraw + 0.5
  if (withdraw % 5 !== 0) {
    return total
  } else if (money > total) {
    return total
  }
  return total - money
}
console.log(answer(300, 300.0)) // 300
console.log(answer(40, 130.0)) // 89.5
```
