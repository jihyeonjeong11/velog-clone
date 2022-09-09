import React from 'react';
import Block from '../common/Block';



function MainTemplate({ children }: ChildContainer) {
  return (
    <>
      <Block>{children}</Block>
    </>
  );
}


export default MainTemplate;
