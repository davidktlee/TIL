# TIL

## Commands

`$ git init`

`$ git clone`

## Commit convention

- 커밋 제목은 50자 이내로

- 제목과 내용사이 간격

- **Prefix** 를 이용하여 한 눈에 커밋의 용도를 알기 쉽게 하는것 중요!

- Commit을 나눌 때 자른 단위가 동작하는지 고민해보고 커밋하기!

- **Commit을 어떻게 나눌지에 대한 고민**

### Prefixes

docs: documentations - 문서

feat: features - 기능이나 코드

conf: configuration - 설정 (환경설정 등)

fix: bug-fix - fix about malfunction = 동작하지 않는 행위에 대한 수정 (오타 등 포함)

refactor: refactoring - 잘 돌아가는 코드의 기능을 향상시키는 것

test: test code

ci: continuous intergration - 기능 개발했을 때 테스트 하는동안 다른 일 가능한 툴

build: Build - 빌드하며 생긴 부산물들

perf: performance - 퍼폼하며 생긴 부산물들


## git init 과 git clone의 차이점

`$ git init` 은 다른 두개의 파일을 같은 파일이라고 -u => upstream set 을 통해 명시해줘야 한다.

`$ git clone` 은 레포를 복사해서 불러오기 때문에 상태가 같다고 명시 해 줄 필요가 없다.

예로 git init은 조립식 컴퓨터를 사서 조립하는 것이고, 

git clone은 컴퓨터 완성품을 복제한다고 생각하면 쉬울 것 같다.
