# Vue.js 를 활용한 인스타그램 만들기

## 실행
 npm run serve

## 개발환경

* 프로젝트 환경설정 Vue 프로젝트 설치 : `npm install -g @vue/cli` <br />

* HTTP 요청을 위한 Axios 라이브러리 설치 : `npm install axios` <br />

* 컴포넌트 간 이벤트 전달을 위한 Mitt 라이브러리 설치 : `npm install mitt` <br />

* Vuex 상태 관리 라이브러리 설치 : `npm install vuex` <br />

## 프로젝트 구조
```
src
├── assets              # static 폴더
│   └── imgs/*          # image 폴더
├── components          # Vue 컴포넌트 폴더
│   ├── Container.vue   # 메인 글과 글작성 팔로워 페이지 연결을 할 수 있는 페이지 컴포넌트
│   ├── Header.vue      # Header 컴포넌트
│   ├── FilterBox.vue   # 글 작성 시 필터 적용할 수 있는 컴포넌트
│   ├── MyPage.vue      # 나의 팔로워 페이지 컴포넌트
│   └── Post.vue        # 인스타 페이지 글 구현 컴포넌트
├── data.js             # 인스타그램 더미글
├── App.vue             # 메인화면 컴포넌트
├── main.js             # app.vue에서 사용할 라이브러리 집합
└── vue.config.js       # vue 모듈 관리


```

## 웹 화면

### 메인페이지

![image](https://github.com/dongridongil/vuestargram/assets/108976641/d6319463-ebe3-4632-b407-dc4fa5c92aa5)

###  글작성시 필터 페이지

![image](https://github.com/dongridongil/vuestargram/assets/108976641/628adc02-b7c3-4ef3-bf67-c976945ab956)

