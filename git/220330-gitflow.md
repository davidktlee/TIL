# TIL
- hexo blog
- gitignore
- branch
- gitflow

## Commands
`$ git flow`
`$ git branch`

## git flow
- git flow
	- 단계: (hotfix)-  master  -(release)-  develop  - feature
	- 장점: 가장 많이 적용, 각 단계가 명확히 구분된다
	- 단점: 복잡하다..
### git flow commands
1. ` $ git flow init` 으로 초기화 한 후(기본 설정 추천)
->새 기능의 개발은  'develop' 브랜치에서 시작한다.

2. ` $ git flow feature start [branchname]`으로 새 기능의 개발을 시작한다.
-> 'develop'에 기반한 새 기능 브랜치를 생성 및 전환

3. 기능 개발이 완료 되었을 시 `$ git flow feature finish [branchname]`으로 새 기능의 개발을 종료한다.

4. 공동으로 개발하고 있다면 원격 서버에 `$ git flow feature publish [branchname]` 으로 게시하여 다른 사용자들도 사용할 수 있게 한다.
	- 또한 `$ git flow feature pull origin [branchname]` 으로 가져올 수도 있다.

5. `$ git flow release start [v0.0.0]` 으로 release 브랜치를 생성하고 종료하며 3개의 커밋이 생성된다.
첫 번째는 main브랜치에 대한 커밋, 
두 번째는 태그, 
세 번째는 develop에 대한 태그이다.

6. ` $ git push origin main` 과 remote에'develop'이라는 브랜치가 없을 수도 있으니까 -u 셋을 통해 명시해준다.
	- ` $ git push -u origin develop`

## git branch commands
1. ` $ git branch [branchname]`을 통해 브랜치를 생성한다.

2. ` $ git switch [branchname]`로 브랜치를 이동시킨다.

3. 파일 작성을 완료한 후 애드 커밋을 한다.

4. branch를 다시 main으로 이동한 후 ` $ git merge [branchname]`으로 머지시킨다.

## gitignore
` $ git push` 할 때 모듈이나 라이브러리 까지 push 하면 많은 시간이 걸릴 수 있으니 사용자에게 requirements 로 다운받게 하고
push 할 때 무시하게 만들어 주는 파일.

## hexo blog
hexo 블로그는 정적인 블로그이고 non-interactive 하다. 

한 번 로드할 때 마다 모든 html 파일을 새로 불러온다.

커스터마이징이 다양하게 가능하다는 점에서 강점이 있는 것 같은데 아직까진 사용하기 낯선 느낌이다.
