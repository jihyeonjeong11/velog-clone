import React from "react";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";

export type MainResponsiveProps = {
  className?: string; // 추가 클래스네임
  children: React.ReactNode;
};

// React.FC 안쓰는 이유. 문법상 default params을 쓸수없다.
function MainResponsive({ className, children }: MainResponsiveProps) {
  return (
    <>
      <InnerWrapper className={className}>{children}</InnerWrapper>
    </>
  );
}

//margin 0 auto 는 margin-left, right: auto 와 같고 가운데 정렬 해준다.

const InnerWrapper = styled.div`
  width: 1728px;
  margin: 0 auto;
  // background: tan;
  // height: 100px;
  ${mediaQuery(1919)}{
    width: 1376px;
  }
  ${mediaQuery(1440)}{
    width: 1024px;
  }
  ${mediaQuery(1056)}{
    width: calc(100% - 2rem);
  }
`

export default MainResponsive;
