# TIL

## 유의적 버전 (Semantic Versioning)

버전 번호를 어떻게 정하고 올려야 하는지를 명시하는 규칙 및 요구사항

### 요약

버전을 major, minor, patch 숫자로 하고

1. 기존 버전과 호환되지 않게 내용(API)이 바뀌면 “major 버전”을 올리고
2. 기존 버전과 호환되면서 새로운 기능을 추가할 때는 “minor 버전”을 올리고
3. 기존 버전과 호환되면서 버그를 수정한 것이라면 “patch 버전”을 올린다.

참조:[https://semver.org/lang/ko/](https://semver.org/lang/ko/)

## transition 전환 효과

### transition 효과를 줄 때 가상 요소(ex)hover)에 주면 가상 요소가 선택 될 때만 적용되기 때문에 전환 효과를 줄 속성에 입력 (오리지널에 줘야함)

## transform 변환 효과

- transform-origin : 100%(x축) 0%(y축) 전환 기준점 (오리지널에 줘야함)
- 부모 요소에 3D 효과가 있으면 자식 요소에는 적용이 안되는데
    - → transform-style: preserve-3d 로 적용 시킬 수 있다.

## CSS animation

@keyframes 를 통해 만들어놓은 애니메이션의 **컨트롤러**

아마도 JS보다 CSS로 애니메이션 통제할 일이 더 많고 빠르고 실제 JS 라이브러리들도 내부 구현을 살펴보면 CSS를 제어하는 라이브러리들이 많다.

- 아래의 keyframes “rolling” 이라는 애니메이션을 제어하는 컨트롤러이다.

```css
@keyframes rolling {
0% {
	transform: translateX(0); /*  x축을 0만큼 이동시킨다 */
	}
100% {
	transform: translateX(100px); /* 100%가 되면 x축을 100px만큼 이동시킨다. */
	}
}
```

- animation-name = 애니메이션 이름 ex) rolling
- animation-duration = 애니메이션 지속시간 ex) 1s
- animation-timing-function = 동작함수 ex) ease-in-out
- animation-iteration-count = 반복 횟수 ex) infinite / 2 (무한반복 / 2회)
- animation-delay = 시작 전 지연 시간 ex) 3s
- animation-direction = 애니메이션 방향
    - 기본값: normal , reverse (반대로 동작), alternate (갔다오기)→ 반복횟수 최소 2회 이상, alternate-reverse (반대부터 갔다오기)

- animation-fill-mode = 애니메이션 전후 상태(위치)를 설정 **안쓰거나 both 만 사용**
    - both: keyframes 에 따라 애니메이션을 실행한 후 그대로 있는 것.

- animation-play-state = 애니메이션 실행 ex)기본값: running / paused = 일시정지

## 다단 (multi-stage)

- column-width: 단의 너비
- column-count: 단의 개수
- column-gap: 단 사이 너비
- column-rule: (단 사이)선 두께, 종류 색상 (border와 같음)
