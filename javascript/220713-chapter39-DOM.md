# TIL 

# DOM

DOM은 HTML 문서의 계층 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

## 노드

HTML 요소 =  렌더링 엔진에 의해 파싱, DOM을 구성하는 요소 노드 객체로 변환

### 트리 자료구조

노드들의 계층 구조로 이루어진 비선형 자료구조

루트 노드 = 부모 노드가 없는 최상위 노드 → 0개 이상의 자식 노드를 갖는다.

리프 노드 = 자식 노드가 없는 노드

### 노드의 종류

- 문서 노드 ⇒ DOM 트리 최상위에 존재하는 루트 노드로써 document 객체를 가리킴
- 요소 노드 ⇒ HTML 요소를 가리키는 객체, 문서의 구조를 표현함
- 어트리뷰트 노드 ⇒ HTML 요소의 어트리뷰트를 가리키는 객체
- 텍스트 노드 ⇒ HTML 요소의 텍스트를 가리키는 객체, 요소 노드의 자식 노이며, 문서의 정보를 표현함 (DOM트리의 최종단)

> DOM을 구성하는 노드 객체는 표준 빌트인 객체가 아닌, 브라우저 환경에서 동작하는 호스트 객체이지만 노드 객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.            모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
>

### 요소 노드 취득

- id를 이용한 요소 노드 취득 ⇒ `getElementById` 중복 될 경우 첫 번째 요소만 반환
- 태그 이름을 이용한 요소 노드 취득 ⇒ `getElementsByTagName` HTMLCollection 객체 반환
- class를 이용한 요소 노드 취득 ⇒ `getElementsByClassName` HTMLCollection 객체 반환
- CSS선택자를 이용한 요소 노드 취득 ⇒ `querySelector` 만족하는 하나의 요소 노드를 탐색하여 반환
    - `querySelectorAll` 만족하는 모든 요소 노드 NodeList 객체 반환
- 특성 요소 노드를 취득할 수 있는지 확인  ⇒ CSS선택자를 통해 특정 요소 노드 취득 가능 여부 확인.

### HTMLCollection 과 NodeList

유사배열 객체이며 이터러블

스프레드 문법이나 `Array.from` 메서드를 통해 배열로 변경 후 배열 메서드 사용 권장

왜? 실시간으로 노드 객체의 상태 변경을 반영하는 live 객체로 동작하므로!

### 노드 탐색

DOM 트리 상의 노드를 탐색할 수 있도록 Node, Element 인터페이스는 트리 탐색 프로퍼티 제공

**모두 접근자 프로퍼티(gettet)이다.**

- 자식 노드 탐색
- 자식 노드 존재 확인
- 요소 노드의 텍스트 노드 탐색
- 부모 노드 탐색
- 형제 노드 탐색

### 노드 정보 취득

`Node.prototype.nodeType` 이나 `Node.prototype.nodeName` 프로퍼티로 노드 객체에 대한 정보 취득

### 요소 노드의 텍스트 조작

- nodeValue
- textContent
    - setter와 getter 모두 존재하는 접근자 프로퍼티, nodeValue보다는 코드가 간단하다.

## DOM 조작

DOM조작은 리플로우나 리페인트를 발생시킬 수 있으므로 주의해서 다뤄야한다.

### innerHTML

요소 노드에 `innerHTML` 프로퍼티에 문자열을 할당하면 노드의 모든 자식 노드가 제거 되고, 할당한 문자열의 HTML 마크업이 파싱되어 자식 노드로 DOM에 반영된다.

**크로스 사이트 스크립팅 공격에 취약할 수 있다.**

**왜? 파싱과정에서 악성코드마저 그대로 실행될 수 있기 때문에.**

### `Element.prototype.insertAdjacentHTML(position, DOMString)`

기존 요소를 제거하지 않으면서 위치를 지정해 새로운 요소를 삽입한다.

### 노드 생성과 추가

- `createElement` 요소 노드를 생성하여 반환

### 복수의 노드 생성과 추가

`DocumentFragment` 노드를 생성 후에 거기다가 다른 노드들을 생성 후 붙여서 `DocumentFragment` 만 기존 DOM에 추가하면 리플로우와 리페인트를 1번으로 줄일 수 있다.

### 노드 삽입

`append` 와 `appenChild` 로 뒤에 삽입 할 수 있고

`insertBefore` 와 `insertAfter` 로 지정한 위치에 삽입할 수도 있다.

**그 외 노드 복사, 노드 교체, 노드 삭제 등의 메서드가 있다.**

## 어트리뷰트

HTML  요소는 여러 개의 어트리뷰트 속성을 가질 수 있다.

모든 어트리뷰트 요소는 `Element.prototype.attributes` 로 취득 가능

### HTML 어트리뷰트 VS DOM 프로퍼티

요소 노드는 상태를 가지고 있고 HTML 어트리뷰트는 요소 노드의 초기 상태를 관리,

DOM 프로퍼티는 최신 상태를 관리한다. (언제나 최신 상태 유지)

### data 어트리뷰트와 dataset 프로퍼티

data 어트리뷰트는 `data-user-id` 같이 `data-` 뒤에 임의의 이름을 붙여 사용한다.

data 어트리뷰트의 값은 dataset 프로퍼티로 취득 가능하다.
