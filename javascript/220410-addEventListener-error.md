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
// hoisting 이용하지 말 것. 안티 패턴임
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

위의 방식은 좋은 방식이 아님.

브라우저에서 이벤트 핸들러를 DOM 요소에 다는 건 많은 리소스를 사용함.

그런데 이 li 요소를 forEach 돌면서 이벤트 리스터를 달면 안 좋음

li가 1000개가 넘어가면?

그렇기 때문에 이벤트 위임이라는 기법을 사용함(이벤트 캡쳐링, 버블링 응용)

일반적으로 li 는 ul 태그로 감싸져있기 때문에, ul 태그 하나에만 이벤트 리스너를 달아주고,

이벤트 위임으로 이벤트를 캐치해서 사용하는게 좋음

```
  function click(e) {
    if(e.target.tagName === 'li'){
      console.log('클릭 시 동작')
    }
  }

  const $ulEl = document.querySelector('.menu')
  $ulEl.addEventListener('click', click)

```

이벤트 위임은 면접 단골 질문이니 꼭 알아두셈
