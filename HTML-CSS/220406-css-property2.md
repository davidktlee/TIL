# TIL

# CSS Flex

## flex 속성

### display - flex container의 화면 출력(보여짐) 특성

**아이템의 부모 요소에 적용시켜야 함**

- flex: 블록요소와 같이 flex container 정의 (블록요소로 정의)
- inline-flex: 인라인 요소와 같이 flex container 정의 (인라인 요소로 정의)

### flex-direction 주 축을 선정

- 기본값: row 행 축 (좌 → 우)
- row-reverse: 행 축 (우 → 좌)

### flex-wrap - flex items 묶음 (줄바꿈) 여부

- 기본값: nowrap 줄바꿈 없음
- wrap : 여러줄로 묶음

### justify-content 주 축의 정렬 방법

- 기본값 : flex-start = item을 시작점으로 정렬
- flex-end = item을 끝점으로 정렬
- center = item을 가운데 정렬

### align-content - 교차축의 여러 줄 정렬 방법

**2줄 이상일 때만 동작하고 그럴려면 flex-wrap이 되어 있어야 한다.**

- 기본값: stretch = item을 시작점으로 정렬
    
    →높이가 지정이 안되있으면 2줄이 되었을 때 줄 남는만큼 늘어난다.
    
    ![align-content stretch예시.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0d06bdb8-0820-4318-ac08-e6ba1c114f60/align-content_stretch예시.png)
    
- flex-start = item을 시작점으로 정렬
    
    → 2줄에서 위로 정렬 된다.
    
    ![align-content 예시.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a8a6bea-9dd4-40b9-8d4e-0729be4b502e/align-content_예시.png)
    
- flex-end = item을 끝점으로 정렬
- center = item을 가운데 정렬

### align-items 교차축의 한 줄 정렬 방법

**위의 align-content 보다 자주 쓰인다.** 

- stretch = items를 교차축으로 늘림
- flex-start = items를 각 줄의 시작점으로 정렬
- flex-end = items를 각 줄의 끝점으로 정렬
- center = items를 각 줄의 가운데 정렬

## 아이템에게 주는 속성

### order - flex item의 순서

- 기본값: 0
- 숫자가 작을수록 먼저

### flex-grow = flex item의 증가 너비 비율

container에 나머지 비어있는 공간을 어떻게 채울 것인지

```css
.container {
  width: vw;
  height: 400px;
  background-color: orange;
  display: flex;
  align-items: center;
}
.container .item {
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 10px;
}
.container .item:nth-child(2) {
  flex-grow: 1;
}
.container .item:nth-child(3) {
  flex-grow: 2
}
```

![flex-grow 예시.PNG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ae4fb222-4526-4499-91a0-0651f559a11b/flex-grow_예시.png)

이런식으로 flex-grow 1을 주면 2의 반 비율로, 3번째 요소에 2를 주면 1에 2배만큼 커져서 채운다.

- 기본값: 0 증가비율 없음
- 숫자 : 증가비율

### flex-shrink = flex item의 감소 너비 비율

- 기본값: 1 flex-container 너비에 따라 감소 비율 적용
- 숫자 : 감소비율 (0 하면 감소 안함)

### flex-basis = flex item의 공간 배분 전 기본 너비

- 기본값: auto 요소의 컨텐츠 너비
- 단위: px, em, rem 등

# CSS transtion

## 전환효과 - 요소의 시작과 끝(전환) 효과를 지정하는 단축 속성

## transition:속성명 ,지속시간(단축형시 필수),타이밍 함수, 대기시간

### transition-property = 전환효과를 사용할 속성 이름을 지정

- 기본값: all
- 속성이름 : 전환 효과를 사용할 속성 이름 명시

### transition-duration

- 기본값: 0s
- 시간: 지속시간 지정

### transition-timing-function = 전환효과의 타이밍 함수를 지정

- 기본값: ease 느리게-빠르게-느리게
- linear 일정하게
- ease-in 느리게-빠르게
- ease-out 빠르게-느리게
- ease-in-out 느리게-빠르게-느리게

참조

[Docs](https://greensock.com/docs/v2/Easing)

[Easing 함수 치트 시트](https://easings.net/ko)

### transition-delay = 전환효과가 몇 초 뒤에 시작할지 대기시간 지정

- 기본값: 0s
- 시간 : 대기시간을 지정 (second)

# CSS transform

## 변환 - 요소의 변환 효과

**transform: 변환함수1, 변환함수2 ...**

**transform: 원근법, 이동, 크기, 회전, 기울임** 

## 2D 변환 함수

- px 단위

### translate(x,y) 이동(x축, y축)

### translateX(x) 이동(x축)

### translateY(y) 이동(y축)

- deg 단위 (각도)

### rotate(degree) 회전 (각도)

### skewX(x) 기울임 (x축)

### skewY(y) 기울임 (y축)

- 배수

### scale(x,y) 크기 (x축, y축)

비율이 이상해지기 때문에 보통 하나로 컨트롤 한다 예) scale(1.3)

## 3D 변환 함수

- px 단위

### perspective(n) 원근법 (거리)

원근법 함수는 제일 앞에 작성

- deg 단위

### rotateX(x) 회전 (x축)

### rotateY(y) 회전 (y축)

### perspective 원근법 속성

- 단위: px 등 단위로 지정

**속성과 함수의 차이**

강사님의 주관적인 판단으로는 perspective 속성 사용을 권장한다.

### backpace-visibility = 3D 변환으로 회전된 요소의 뒷면 숨김 여부

- 기본값: visible 뒷면보임
- hidden: 뒷면 숨김
