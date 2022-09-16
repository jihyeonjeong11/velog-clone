import React, { lazy, Suspense } from "react";
import { Logo } from "./static/svgs";
import MainTemplate from "./components/main/MainTemplate";
import SpinnerBlock from "./components/common/SpinnerBlock";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ConditionalBackground from "./components/base/ConditionalBackground";
import { themedPalette } from "./lib/styles/themes";
import GlobalStyles from "./lib/styles/GlobalStyles";

const App = () => {
  return (
    <main>
      <Helmet>
        <title>클론</title>
        <meta
          name='description'
          content='개발자들을 위한 블로그 서비스. 어디서 글 쓸지 고민하지 말고 벨로그에서 시작하세요.'
        />
        <meta property='fb:app_id' content='203040656938507' />
        <meta property='og:image' content='https://images.velog.io/velog.png' />
      </Helmet>
      <GlobalStyles />
      <MainTemplate>
        <ErrorBoundary>
          <Router>
            <ConditionalBackground />

            <Routes>
              <Route path='*' element={<HomePage />} />
            </Routes>
          </Router>
        </ErrorBoundary>
      </MainTemplate>
    </main>
  );
};

export default App;

// 원본

// import React from "react";

// const App = () =>{
//     return (
//         <h1>
//             Welcome to React App thats build using Webpack and Babel separately
//         </h1>
//     )
// }

// export default App
