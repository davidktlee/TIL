# TIL

## li 여러 요소 제어할 때

li 요소가 여러개 있을 때 querySelectorAll(’li’) 을 사용해 불러올 수 있다.

그 때 li 요소들에게 이벤트를 주려고 할 때 forEach 배열 메서드를 통해 각각의 li 요소들에게

이벤트리스너를 달아야 한다.

불러 온 그대로 이벤트리스너를 주려고 하면

```
var liEl = document.querySelectorAll('.menu li')
liEl.addEventListener('mouseover', click)
function click(e) {
  console.log(e)
}
```

main.js:51 Uncaught TypeError: liEl.addEventListener is not a function
    at main.js:51:6

이런식으로 에러가 난다.

그래서 밑에 있는 예제 처럼 forEach 메서드를 통해 li 하나하나에 이벤트를 달아 줘야한다

```
var liEl = document.querySelectorAll('.menu li')
liEl.forEach((li) => li.addEventListener('mouseover', click))
function click(e) {
  console.log(e)
}
```
