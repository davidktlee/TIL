# TIL

## @ at rules

- import url(”경로”)
- charset “UTF-8” = 코드의 꼭대기에 있어야 됨
- keyframes 이름  = 애니메이션
- media (타입) 조건 {} = 조건일 때 CSS (타입은 생략 가능)
    - 타입 = (orientation : portal) → 세로가 더 길때
    - 타입 = (orientation : landscape) → 가로가 더 길때
    ```
    // 이런식으로도 사용 가능하다.
<link rel="stylesheet" href="main-sm.css" media="all and (max-width: 600px)" />
    ```

