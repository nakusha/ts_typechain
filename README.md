typescript 설치
yarn global add typescript

tsconfig.json만들기

package.json에 추가
"scripts": {
    "start":"node index.js",
    "prestart":"tsc"
}
