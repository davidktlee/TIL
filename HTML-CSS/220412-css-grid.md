# TIL

## CSS filter

그래픽 효과를 요소에 적용 (흐림효과, 색상 변경 등)

- blur: 흐림 효과
- contrast: 대비
- grayscale: 회색 효과
- hue-rotate: 색 그래프에서 각도 지정
- drop-shadow: (x축, y축, 효과, 그림자)
- invert: 반전
- sepia: 오래된 사진 효과
- backdrop-filter: 요소가 아닌 요소의 뒷부분이 filter 효과 받는 것

## CSS Grid

### container에 주는 속성

- display: grid = 플렉스와 같지만 grid는 2차원 속성이기 때문에 달라지는 것은 없음

밑의 2가지를 지정 해 줘야 나타남

- grid-template-columns: 열의 개수 + 너비 ex) 1fr 1fr
- grid-template-rows: 행의 개수 + 너비 ex) 1fr 1fr
    - 단위를 반복할 때 쓰는 함수 : repeat (횟수, 단위)
- gap: (row, column) 행, 열 사이의 공간
- grid-auto-rows: 100px → 넘칠 경우 어떻게 관리 할 건지 (암시적 크기 정의)
    - 대체로 grid-template-rows 보다 많이 쓴다 (행이 계속 늘어날 수 있기 때문에)
- grid-auto-flow: 배치하지 않은 아이템을 어떤 방식으로 처리할지 정의
    - 기본값: row 열 방향으로,  dense: 열 방향으로 뺵빽하게 채운다
- grid-template-areas: 직관적으로 구조를 볼 수 있는 속성
    - item들에 grid-area로 이름을 주고 그리드 처럼 그대로 적용

```css
.container {
  border: 4px solid;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 100px 200px 100px;
  grid-template-areas:
  'header header'     /* 이 부분 */
  'main aside'
  'footer footer';
}

.item {
  border: 4px solid;
}
.item:nth-child(1) {
  grid-area: header;
}
.item:nth-child(2) {
  grid-area: main;
}
.item:nth-child(3) {
  grid-area: aside;
}
.item:nth-child(4) {
  grid-area: footer;
}
```

- grid-template-columns: repeat (**auto-fill** , minmax (120px, 1fr))
    - 가로 넓이에 맞춰 자동으로 아이템을 채워주는 값
    - auto-fill은 남는 공간이 있으면 그대로 두고,

        auto-fit은 남는 공간을 아이템을 늘려 공간을 채운다


### item에 주는 속성

- grid-column:
    1. grid-column-시작점 / grid-column-끝점 ex) 3 / 4
    2. span 2 : column방향으로 2개의 셀로 확장
- grid-row:
    1. grid-row-시작점 / grid-row-끝점 ex) 2 / 4
    2. span 2 : row방향으로 2개의 셀로 확장
- order : 보여지는 순서 = 작을수록 앞
