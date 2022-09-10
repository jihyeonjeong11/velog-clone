import React ,{ Suspense } from "react";
import SpinnerBlock from "../common/SpinnerBlock";


function Header() {
  return (
    <header>
      <h2>Suspense 사용</h2>
      <Suspense fallback={<SpinnerBlock />}>
      </Suspense>
    </header>
  );
}

export default Header;