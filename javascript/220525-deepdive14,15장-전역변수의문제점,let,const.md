# TIL

# 전역 변수의 문제점

- 변수는 생성되고 값을 할당 받으면서 메모리에 저장되게 되는데 변수가 생성되어 소멸하기 까지 주기가 길다면 그만큼 메모리를 불 필요하게 오래 차지하고 있는 것이다.

## 전역 변수와 지역 변수

- 지역 변수는 var은 함수레벨 스코프를 따라서 함수스코프가 끝나면 소멸하고, let과 const는 블록레벨 스코프를 따라 블록스코프가 끝나면 소멸한다. (클로저의 경우 소멸하지 않는 경우도 있다.)
- 지역 변수는 함수가  호출 된 직후에 호이스팅이 일어나  함수의 코드가 실행되기 전에 선언되고 undefined가 할당된다. 함수 코드가 실행되다가 할당문을 만나면 할당이 이루어진다. 예제 14-02의 경우, 함수가 실행 되었을 때 x가 선언되어 있지 않아 전역 변수의 x를 참조 해 ‘global’이 나온다고 생각할 수 있지만 밑의 줄의 변수 x의 호이스팅이 먼저 일어나 콘솔 했을 때 undefined가 나오게 된다.

## 전역 변수 사용을 자제해야 하는 이유

- 전역 변수는 호출 없이 실행되고 (처음부터 메모리를 차지), 전역은 따로 종료문이 없으므로 코드가 다 끝날 때 까지 메모리를 차지하게 된다. → 긴 생명주기
- 어디서든지 참조하고 변경할 수 있어서 의도치 않게 값이 변경 될 수 있고 가독성이 나빠질 수 있다. → 암묵적 결합
- 변수를 검색 할 때 전역이 스코프 체인 상 마지막이기 때문에 검색할 때 속도가 가장 느리다.
- 파일이 분리되어 있더라도 하나의 전역 스코프를 공유한다는 자바스크립트의 문제점 때문에 의도치 않은 에러를 발생시킬 수 있다. → 네임스페이스 오염

→ 이 문제를 해결하기 위해 나온것이 ES6 문법의 module이다. ES6의 모듈은 파일 자체의 독자적인 모듈 스코프를 제공하고 그렇기 때문에 window 객체의 프로퍼티도 아니고 전역 변수가 아니다.

- 전역 변수가 아니라는 것이 다른 파일에서만 참조할 수 없다는 것인가요?
- 생명 주기가 코드 끝날 때 까지 유효한 것은 같은가요?

⇒ 변수의 스코프는 좁을 수록 좋다고 하고 전역 변수를 꼭 사용해야 할 때가 아니라면 지역 변수를 사용하도록 한다.

# let, const

## var의 특징(문제점)

1. 중복 선언 허용

→ 같은 스코프 내에서 중복 선언을 허용한다. 중복 선언 시 초기화 문의 유무에 따라 초기화 문이 있다면 var 키워드가 없는 것 처럼 동작하고 초기화 문이 없는 변수 선언문은 무시된다.

1. 함수 레벨 스코프

→ var 변수는 오직 함수의 코드 블록만을 지역 스코프로 가져 함수 외부에서 선언 할 경우 전역 변수가 된다.

1. 변수 호이스팅

→ var 변수는 선언문 이전에 참조하더라도 변수 호이스팅이 일어나 에러가 나지 않는다. var 변수의 선언문은 런타임 이전에 호이스팅이 일어나 코드의 선두로 끌어 올려진 것 처럼 작동하고 undefined가 할당된다. 그 후 할당문을 만나면 값이 할당된다. ⇒ 가독성을 떨어뜨리고 오류의 여지를 남긴다.

## let의 특징

1. 같은 스코프 내에서 중복 선언이 금지된다.
2. 블록 레벨 스코프

→ var 변수와 다르게 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

1. 변수 호이스팅

→ let 변수는 선언 단계와 초기화 단계가 분리되어 진행되며 선언 단계는 똑같이 런타임 이전에 진행되지만 초기화 단계는 선언문을 만나면 이루어진다. 즉 초기화 이전에 (선언문을 만나기 전에) 변수를 참조하려 하면 에러가 발생하고 선언 단계와 초기화 단계 사이의 구간을 TDZ (Temporal Dead Zone) 이라 한다.

1. let 전역 변수는 보이지 않는 개념적인 블록에 존재하게 된다.

→ 실행 컨텍스트에 자세히 나온다고 한다.

# const의 특징

1. 선언과 초기화를 같이 해야 한다.
2. 재할당 금지

→ var, let 과 달리 재할당이 금지되어 있어 변수에 원시 값을 할당 해상수로 사용할 수 있다.

(원시값은 변경 불가능 한 값이므로 const와 만나면 바꿀수 없다)

그러나 const로 선언한 변수에 객체를 할당했을 경우 객체는 참조 타입이므로 값이 변경 가능하다.

# 정리

ES6를 사용한다면 var 변수는 사용하지 않는 것이 좋고 const를 먼저 사용하고 재할당이 필요한 경우에 let으로 바꿔 사용하는 것이 좋다고 한다.
