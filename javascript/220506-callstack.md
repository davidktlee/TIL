# TIL 

# 콜스택

콜 스택에는 webAPI는 쌓이지 않는다.
callback 함수는 콜백 큐에 쌓이고 call stack 함수 들이 다 호출 되고 나면
이벤트 루프를 통해 call stack 안에 들어가서 실행 된다.

```js
setTimeout(() => {
  console.log('timeout')
}, 1000)

function a() {
  console.log('a')
  function b() {
    console.log('b')
  }
  b()
}
a()
```

