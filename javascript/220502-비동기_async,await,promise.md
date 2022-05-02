# TIL 
## 비동기

비 동기적으로 데이터 불러와서 사용하기

```js
// fetch().then()
fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
  })

// axios
axios({
  url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
  method: 'GET',
}).then((res) => console.log(res.data))

// await, async await는 async로 포함된 함수 안에서만 사용 가능
async function getMovie() {
  let res = await fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
  res = await res.json()
  console.log(res)
}
getMovie()
// fetch 보다는 async, await, axios를 사용
async function getMovie() {
  const { data } = await axios({
    url: 'https://www.omdbapi.com?apikey=7035c60c&s=frozen',
    method: 'GET',
  })
  console.log(data)
}
getMovie()
```

다음주 비동기 promise 객체, 콜백지옥, 파트9 챕터4 14,15,16 보기

### erorr handler

```js
// then()
.then()
.catch()
.finally()

// async / await
try {

} catch (error) {

} finally {

}

```

### promise

정적메소드는 바로 사용
prototype이 들어간 것은 반환되는 인스턴스에 사용

```js
// promise 인스턴스 생성 패턴
function getMovie() {
  // promise instance
  return new Promise(resolve => { 
    fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
      .then(res => res.json())
      .then(res => {
        resolve(res)
      })
  })
}

getMovie().then(res => console.log(res))
// then으로 받아 데이터를 처리할 수도 있고 즉시 실행 함수로 처리할 수도 있다.
;(async function () {
  const res = await getMovie()
  console.log(res)
})()

// promise 인스턴스 resolve 콜백 패턴
function imageLoad(src) {
  return new Promise(resolve => {
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () => {
      resolve()
    })
  })
}

const imgContainer = document.querySelector('.image')

imageLoad('https://gstatic.com/webp/gallery/1.jpg')
  .then(() => {
    console.log('Done!')
    imgContainer.classList.add('done')
  })

;(async function () {
  await imageLoad('https://gstatic.com/webp/gallery/1.jpg')
  console.log('Done!')
  imgConatiner.classList.add('done')
})()


// Promise.all() 패턴
function getMovie() {
  Promise.all([
    fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
      .then(res => res.json()),
    fetch('https://omdbapi.com/?apikey=7035c60c&s=ironman')
      .then(res => res.json())
  ])
    .then(res => {
      console.log('fetch1:', res[0])
      console.log('fetch2:', res[1])
      console.log('Done!')
    })
}

async function getMovie() {
  const [res1, res2] = await Promise.all([
    fetch('https://omdbapi.com/?apikey=7035c60c&s=frozen')
      .then(res => res.json()),
    fetch('https://omdbapi.com/?apikey=7035c60c&s=ironman')
      .then(res => res.json())
  ])

  console.log('async1:', res1)
  console.log('async2:', res2)
  console.log('Done!')
}

getMovie()

// promise 인스턴스 resolve, reject 콜백 패턴
function imageLoad(src) {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject('이미지 경로 없는디?')
      return
    }
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () => {
      resolve('이미지 로드 완료!')
    })
  })
}

imageLoad()
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log(error)
  })


// Promise.resolve (micro task 때 쓰이기도 함)
const promiseInstance = Promise.resolve(123)
pi.then((res) => console.log(res)) // 123

function getMovie() {
  return new Promise((resolve) => {
    fetch('https://www.omdbapi.com?apikey=7035c60c&s=frozen')
      .then((res) => res.json())
      .then((res) => {
        resolve(res)
      })
      .catch(() => {
        reject('교통사고')
      })
  })
}

getMovie()
  .then() // resolve 와 연결됨
  .catch((err) => { // reject 와 연결됨
    console.log(err)
  })
```

