# TIL

# SCSS

표준인 CSS 의 전처리 도구

→ CSS로 변환 해 주는 컴파일러 “parcel”이 필요하다.

## 주석

원래 CSS에 주석 처리 하는 것 처럼 /* */ 하면 된다.

// 로 주석 처리 하면 SCSS에서는 주석이지만 CSS에서는 사라진다.

## 중첩

```scss
/* SCSS 문법 */
.container {
	ul {
		li {
			color:red;
		}
	}
}
```

이런 식으로 SCSS 문법으로 작성하면

```css
.container {
}
.container ul {
}
.container ul li {
	color: red;
}
```

이런 식으로 CSS 문법으로 변환된다.

## 상위 선택자 참조

```scss
.container {
	$.active {
		li {
		&:last-child {
			color: red;
			}
		}
	}
} // & (앤퍼센드) 표시를 통해 상위 선택자를 참조 할 수 있다.
```

```css
.container {
}
.container.active{
}
.container ul li:last-child {
	color: red;
}
```

## 중첩 된 속성

```scss
.box {
	font: {
		weight: bold;
		size: 10px;
		family: sans-serif;
	}
} // 속성 안에 들어가는 값을 묶어 사용할 수 있다.
```

```css
.box {
	font-weight: bold;
	font-size: 10px;
	font-family: sans-serif;
}
```

## 변수

`$변수이름 :  값` 으로 표시한다.

위 방법으로 변수 생성이 가능하고 변수는 자바스크립트 변수와 마찬가지로

**유효범위를 가지며, 재할당도 가능하다.**

## 연산자

다른 것은 다 똑같이 동작하는데 나눗셈 연산자는 단축 속성으로 동작하기 때문에

**괄호로 묶어줘야 한다.**

## 재활용

`@mixin` 이라는 단어를 통해 재활용이 가능한 코드를 생성할 수 있고

`@include` 라는 단어를 통해 가져와서 쓸 수 있다.

```scss
// size 변수에 크기 지정
$size: 100px;
// box 라는 함수를 만들고 파라미터로 $size 값을 받는다.
@mixin box ($size) {
	width: $size;
	height: $size;
}
// 기본값을 미리 줘버릴 수도 있다.
@mixin box ($size: 100px) {
	width: $size;
	height: $size;
}
// box 함수를 그대로 가져오면서 인수로 200px을 입력하면 width와 height에 200px이 들어감.
// 이런식으로 인수와 매개변수를 이용해 각각 다른 값을 줄 수도 있다.
.container {
	@include box(200px);
}

```

## 반복문

```scss
// 1부터 10까지 box:nth-child(1~10) width가 100px인 box를 만든다.
// Scss 에서는 보간법은 ${] 가 아닌 #{}을 쓴다.
@for $i from 1 through 10 {
	box:nth-child(#{$i}){
		width: 100px *$i; // 값을 적는 부분이기 때문에 보간법 X
	}
}
```

```css
box:nth-child(1) {
  width: 100px;
}

box:nth-child(2) {
  width: 200px;
}

box:nth-child(3) {
  width: 300px;
}

box:nth-child(4) {
  width: 400px;
}

box:nth-child(5) {
  width: 500px;
}

box:nth-child(6) {
  width: 600px;
}

box:nth-child(7) {
  width: 700px;
}

box:nth-child(8) {
  width: 800px;
}

box:nth-child(9) {
  width: 900px;
}

box:nth-child(10) {
  width: 1000px;
}
```

**Css 로 작성하면 이렇게 긴 코드를 작성해야 하는데 Scss 는 간단하게 반복문으로 작성 가능하다.**

## 함수

```scss
// 값을 연산해서 반환 된 결과를 사용하기 위해 사용
@function ratio ($size, $ratio) {
	@return $size * $ratio;
}
.box {
	$width: 100px;
	width: $width;
	height: ratio($width, 1/2);
}
```

```css
.box {
  width: 100px;
  height: 50px;
}
```

### 색상 내장 함수

`mix(color, color)` → 섞어서 색 내주는 함수

`lighten(color,%)` → %만큼 밝게 만들어 주는 함수

`darken(color,%)` → %만큼 어둡게 만들어 주는 함수

`saturate(color,%)` → %만큼 채도 높게 만들어 주는 함수

`rgba(color, opacity)` → 투명도 만큼 색을 투명하게 만들어 주는 함수

## 데이터 타입

``` Scss
`$number` : 숫자

`$string` : 문자

`$color` : 색상

`$boolean` : 참, 거짓

`$list` : 배열 데이터
$list: orange, red, white;
// $item은 임의로 지정한 이름. color에 list안의 데이터들을 하나씩 넣어준다.
@each $item in $list {
	.box {
		color: $item;
	}
}

`$map` : 객체 데이터 (소괄호로 key: value 로 만듬)
$map: (
	o: orange,
	r: red,
	w: white
);
// $key에 map안의 key 값이 들어가고 $value에 map 안의 value 값이 들어감
@each $key,$value in $map{
	.box-#{$key} {
		color: $value;
	}
}
```

``` Css
list에 대한 Css 값
.box {
  color: orange;
}

.box {
  color: red;
}

.box {
  color: white;
}
map에 대한 Css값
.box-o {
  color: orange;
}

.box-r {
  color: red;
}

.box-w {
  color: white;
}
```
