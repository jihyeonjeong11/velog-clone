https://blog.bitsrc.io/create-react-app-without-create-react-app-b0a5806a92

Prerequisites concepts to know
Webpack — helps in bundling our code into one single file
Babel — used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.
Node.js — installing node, creating package.json and installing node modules using npm

웹팩, 바벨, 노드

This article will help us to understand
How webpack and babel work in a more practical sense;
The actual starting to ending flow of building the React app;
How development and production build is being setup and its significance;
Setting up the server details thats required;
Writing webpack and babel config files and understanding the logic that exists there;
How we can configure client-side and server-side rendering;
Understanding how HMR is works in React.

HMR이란? Hot Module Replacement. 모듈 바꿔도 hot reload 되는것

 https://github.com/kannanagasamy/react-app-without-cra
 하다 막히면? 저 위에서 보자.

 

 steps

 1. node 설치 확인

 2. yarn init 으로 package.json 실행

 3. webpack dependencies 설치
 npm i --save-dev webpack webpack-cli webpack-dev-server

webpack — Will allow us to bundle all of our code into a final build
webpack-cli — CLI tool for providing a flexible set of commands for developers to increase speed when setting up a custom webpack project. If you’re using webpack v4 or later and want to call webpack from the command line, you need this
webpack-dev-server — Webpack dev server is a mini Node.js Express server.It uses a library called SockJS to emulate a web socket. Will enable us to create a localhost dev environment

웹팩cli - 커맨드라인 툴
웹팩-dev-server dev 환경에서 websocket으로 돌아가는 로컬 서버 만드는 용