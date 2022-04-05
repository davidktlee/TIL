# TIL 

# CSS

## margin

요소의 외부 여백을 지정하는 단축 속성 ( 음수 사용 가능)

- 기본값: 0
- auto: 브라우저가 여백을 계산 → 가로(세로) 너비가 있는 요소의 가운데 정렬에 사용
- 단위: px, em, vw 등

## padding

요소의 내부 여백을 지정하는 단축 속성

- 기본값: 0
- 단위: px, em, vw 등
- %: 부모 요소의 가로 너비에 대한 비율로 지정

## border

요소의 테두리 선을 지정하는 단축 속성

- border-width: 선 두계
- border-style: 선 종류 (solid: 실선 , dashed: 파선)
- border-color: 선 색상 (transparent: 투명) → 지정 안하면 글자 색 상속

## border-radius

- 기본값: 0
- 단위: px, em, vw 등

## 색상 표현

- 색상 이름: 브라우저에서 제공하는 색상 이름 ex) red, tomato
- HEX 색상코드: 16진수 색상 ex) #000, #FFFFFF
- RGB: 빛의 삼원색 ex) rgb(255,255,255)
- RGBA: 빛의 삼원색 + 투명도 ex) rgba(0,0,0,0.5)

## box-sizing

- 기본값: content-box 요소의 내용(content)으로 크기 계산
- border-box 요소의 내용 + padding+border로 크기 계산

## overflow

- 기본값: visible
- hidden: 넘치는 내용 잘라냄
- auto: 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성

## 말 줄임표 만들기

```jsx
white-space: nowrap
overflow: hidden
text-overflow: ellipsis
```

## 한글 줄바꿈

- word-break: keep-all

## 단어로 구분 못할 때 안 넘치게 하는법

- overflow-wrap: break-word

## display

요소의 화면 출력 (보여짐) 특성

기본값

- block 상자 요소
- inline 글자 요소
- inline-block 글자+상자 요소
- 기타 - table, table-row 등

값

- flex 플렉스 박스 (1차원 레이아웃)
- grid 그리드 (2차원 레이아웃)
- none 보여진 특성없음, 화면에서 사라짐

## opacity

투명도

- 기본값: 1 불투명
- 0~1 사이의 소수점 숫자

## 글꼴

### font-style 글자의 기울기

- 기본값: normal
- italic 이탤릭체

### font-size 글자의 크기

- 기본값: 16px
- 단위: px, em, rem 등

### font-weight 글자의 두께

- 기본값: 400
- bold 700
- 단위 : 100-900 사이

### line-height 한줄의 높이, 행간과 유사

- 숫자: 요소의 글꼴 크기의 배수로 지정
- 단위: px, em, rem 단위로 지정

### font-family: 글꼴1,”글꼴 2”...글꼴계열(필수)

중간에 띄어쓰기 등 특수문자가 들어가있으면 따옴표로 묶어야 한다.

## 문자

### color 글자의 색상 (앞에 font X)

- 기본값: rgb(0,0,0)

### text-decoration 문자의 장식(선)

- 기본값: none
- underline 밑줄
- line-through 중앙선

### text-align 문자의 정렬 방식

- 기본값: 왼쪽 정렬
- right 오른쪽 정렬
- center 중앙 정렬

### text-indent 문자의 첫줄 들여쓰기

- 기본값: 0
- 단위: px, em, rem등

## 배경

### background-color 요소의 배경 색상

- 기본값: transparent
- 단위: 색상

### background-img 요소의 배경이미지 삽입

- 기본값: none
- url (’경로’)
- linear-gradient (그라데이션 사용 때 color 아닌 img)

### background-repeat 요소의 배경 이미지 반복

- 기본값: repeat
- repeat-x 이미지를 수평 반복
- repeat-y 이미지를 수직 반복
- no-repeat 반복 없음

### background-position 요소의 배경 이미지 위치

- 방향 top, bottom, left, right, center (방향1, 방향2)
- 단위 px, em, rem등 (x축 , y축)

### background-size 요소의 배경 이미지 크기

- 기본값: auto
- 단위: px, em, rem 등
- cover 비율을 유지, 요소의 더 넓은 너비에 맞춤 =

    잘리지 않음 (큰쪽에 맞춰지니까)

- contain 비율을 유지, 요소의 더 짧은 너비에 맞춤 = 짤릴수도 있음

### background-attachment 요소의 배경 이미지 스크롤 특성

- 기본값: scroll 이미지가 요소를 따라 같이 스크롤
- fixed 이미지가 뷰포트에 고정, 스크롤 X

## 배경

### position 요소의 위치 지정 기준

위치를 지정할 때에는 기준을 먼저 잡고 위치를 선정.

position 속성의 값으로 absolute, fixed가 지정된 요소는 display 속성이

‘block’으로 변경 됨.

- 기본값: static 기준없음
- relative 요소 자신을 기준
- absolute 위치 상 부모 요소를 기준
    - **부모 요소에 relative 요소가 있어야 그 부모를 기준으로 위치 이동**
- fixed 뷰포트를 기준(브라우저)

> 같이 쓰는 CSS 속성들
>
>
> top, bottom, left, right, z-index (음수로 사용 가능)
>
> 요소의 각 방향별 끼리 지정
>
> 기본값: auto
>
> 단위: px, em, rem 등
>

### 요소 쌓임 순서 (static order)

어떤 요소가 사용자에게 앞에 보이는지 결정

1. 요소에 position 속성의 값이 있는 경우에 위에 쌓임(기본값 static 제외)
2. 1번과 조건이 같은 경우, z-index 속성의 숫자값이 높을수록 위에 쌓임
3. 1번, 2번 조건까지 같은 경우, HTML의 다음 구조일수록 위에 쌓임 (순서)

### z-index 요소의 쌓임 정도를 지정 (2번째 조건)

- 기본값: auto 부모 요소와 동일한 쌓임 정도
- 숫자 숫자가 높을수록 높이 쌓임
