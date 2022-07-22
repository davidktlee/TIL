# TIL

# AJAX

자바스크립트로 비동기 방식으로 데이터를 서버에 요청, 받은 데이터를 바탕으로 브라우저 화면을 갱신하는 프로그래밍 방식

Web API인 XMLHttpRequest 객체를 기반으로 동작

## 비교

전통적인 렌더링 방식은 불필요한 데이터 통신이 발생

동기 방식으로 동작하기 때문에 응답이 올 때까지 다음 처리가 늦어짐

**VS**

AJAX는 필요한 부분만 재렌더링해 불 필요한 데이터 통신X

비동기 방식이기 때문에 서버에게 요청 보낸 후 따로따로 처리

## JSON

클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷

### 표기 방식

키와 값으로 구성되어 있으며 키는 반드시 큰 따옴표로 묶어야 하고 값은 상관없지만 문자열일때는 따옴표 필수.

`JSON.stringify` ,`JSON.parse`  → 객체를 JSON 형식으로 변환하거나 JSON을 객체 형식으로 변환

## XMLHttpRequest

브라우저는 주소창이나 `a` , `form` 태그를 통해 HTTP 요청 전송 기능을 기본 제공

객체 생성은 생성자 함수를 호출하여 생성, 브라우저에서만 동작

### 프로퍼티와 메서드

- 프로토타입 프로퍼티
    - `readyState, statusText, responseType, response`
- 이벤트 핸들러 프로퍼티
    - `onreadystatechange, onerror, onload`
- 메서드
    - `open, send, abort, setRequestHeader`

### HTTP 요청 전송 순서

`[XMLHttpRequest.prototype.open](http://XMLHttpRequest.prototype.open)` 메서드로 HTTP 요청 초기화

`[XMLHttpRequest.prototype.](http://XMLHttpRequest.prototype.open)send` 메서드로 초기화된 요청을 서버에 전송

`[XMLHttpRequest.prototype.](http://XMLHttpRequest.prototype.open)setRequestHeader` 특정 HTTP 요청의 헤더값 설정

### HTTP 응답 처리

`onreadystatechange` 이벤트를 통해 HTTP 요청의 현재 상태를 확인

`readystate` 메서드로 `XMLHttpRequest.Done`인지 확인

→ `onload` 이벤트는 HTTP 요청이 성공적으로 완료된 경우만 발생하기 때문에 사용 권장.

응답 완료되면 `status` 메서드로 정상 처리와 에러 처리 구분
