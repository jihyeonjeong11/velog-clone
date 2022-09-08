velog-client
├── .env //react 환경변수
├── .github // 깃헙액션
|   └── workflows
|       ├── dev.yml // ssr배포(s3)
|       └── main.yml // ssr 배포
├── .gitignore //깃이그노어
├── .prettierrc // 프리티어
├── .vscode //vscode
|   └── settings.json // vscode 이 프로젝트 추가 설정
├── README.md
├── asset-license.md
├── config //웹팩, 
|   ├── env.js
|   ├── jest
|   |   ├── cssTransform.js
|   |   └── fileTransform.js
|   ├── modules.js
|   ├── paths.js
|   ├── pnpTs.js
|   ├── webpack.config.js
|   ├── webpack.config.server.js
|   ├── webpack.config.serverless.js
|   └── webpackDevServer.config.js
├── deploy-hook // netlify deploy용 hook
|   ├── .gitignore
|   ├── handler.js
|   ├── package.json
|   ├── serverless.yml
|   └── yarn.lock
├── deploy.config.json
├── docker // docker-redis 이번에 제대로 다시 한번 써보기
|   └── redis
|       ├── Dockerfile
|       └── docker-compose.yml
├── package.json
├── public
|   ├── favicon.ico
|   ├── favicons

├── scripts // 웹팩도 그냥 처음부터 다시 써보자.
|   ├── activate
|   ├── activate.dev
|   ├── build.js
|   ├── build.server.js
|   ├── keepChunks.js
|   ├── start.js
|   └── test.js
├── serverless.yml


```

