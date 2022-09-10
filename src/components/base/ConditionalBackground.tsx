import React from 'react';
import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { themedPalette } from '../../lib/styles/themes';

interface Props {}


const GrayBackground = createGlobalStyle`
  body {
    background: ${themedPalette.bg_page1};
  }
`;

// global스타일로 body에 bg를 만들어줌

const WhiteBackground = createGlobalStyle`
  body {
    background: ${themedPalette.bg_page2};
  }
`;

/**
 * Bacgkround should be gray on following paths
 * - /
 * - /recent
 * - /lists
 */
function ConditionalBackground(props: Props) {
  const location = useLocation();
  const isGray = useMemo(
    () =>
      [{ path: '/', exact: true }, '/recent', '/lists'].some((path : any) => 
         matchPath(location.pathname, path.path)
      // some은 하나만 true 이면 true일것
        
      ),
    [location],
  );
  
  return isGray ? <GrayBackground /> : <WhiteBackground />;
}

export default ConditionalBackground;
