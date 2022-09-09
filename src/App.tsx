import React, { lazy, Suspense } from "react";
import Logo from "./svgs/Logo.svg";
import MainTemplate from "./components/main/MainTemplate";
import SpinnerBlock from "./components/common/SpinnerBlock";

const App = () => {
  return (
    <main>
      <MainTemplate>
        <h1>
          Welcome to React App thats build using Webpack and Babel separately
        </h1>
      <SpinnerBlock />
      <Logo />
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
