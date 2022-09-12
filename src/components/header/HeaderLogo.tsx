import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo, VelogIcon } from "../../static/svgs/index";
import { themedPalette } from "../../lib/styles/themes";
import media from "../../lib/styles/media";
import { createFallbackTitle } from "../../lib/utils";
import { ellipsis } from "../../lib/styles/utils";

// import * as React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Logo, VelogIcon } from '../../static/svg';
// import { UserLogo } from '../../modules/header'; // 빼고
// import { themedPalette } from '../../lib/styles/themes';
// import { createFallbackTitle } from '../../lib/utils';
// import media from '../../lib/styles/media';
// import { ellipsis } from '../../lib/styles/utils';

export interface HeaderLogoProps {
  custom: boolean;
  //  userLogo: userLogo | null;
  userName: string | null;
}

const HeaderLogo = function ({ custom, userName }: HeaderLogoProps) {
  if (!custom) {
    return (
      <HeaderLogoBlock>
        <Link to="/">
          <Logo data-testid="velog-logo" className="velog-logo" />
        </Link>
      </HeaderLogoBlock>
    );
  }
  if (!userName) return <div />;
  // if(!userLogo) return <div />
  const velogPath = `/@${userName}`;
  return (
    <HeaderLogoBlock>
      <VelogLogoLink to="/">
        <VelogIcon />
      </VelogLogoLink>
      <Link to={velogPath} className="user-logo">
        {/* {userLogo.title || createFallbackTitle(userName)} */}
        {createFallbackTitle(userName)}
      </Link>
    </HeaderLogoBlock>
  );
};

// svg에 height가 다 있었지만, 굳이 필요없다는 생각이 들어서 다 뺐다.(svg자체가 width, height 값이 있어서, height가 중복되면 잘리거나 한다.)

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${themedPalette.text1};
  font-size: 1.3125rem;
  text-decoration: none;
  font-family: Fira Mono, monospace;

  ${media.medium} {
    font-size: 1.125rem;
    .velog-logo {
    }
  }

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }

  .user-logo {
    display: block;
    max-width: calc(100vw - 200px);
    ${ellipsis};
  }
`;

const VelogLogoLink = styled(Link)`
  color: inherit;

  svg {
    color: inherit;
    margin-right: 1rem;

    display: block;
    ${media.medium} {
      margin-right: 0.75rem;
    }
  }
`;

export default HeaderLogo;
