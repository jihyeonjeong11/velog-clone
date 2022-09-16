import React from "react";
import Block from "../common/Block";
import SpinnerBlock from "../common/SpinnerBlock";
import MainResponsive from "../main/MainResponsive";
import styled from "styled-components";
import { SearchIcon } from "../../static/svgs/index";
import media from "../../lib/styles/media";
import HeaderLogo from "./HeaderLogo";
import { Link, Routes } from "react-router-dom";
import { themedPalette } from "../../lib/styles/themes";
import ThemeToggleButton from "./ThemeToggleButton";
import RoundButton from "../common/RoundButton";

//comp 구성

const user = false;

function Header() {
  return (
    <header>
      <Block>
        <HeaderOuter>
          <Inner>
            <HeaderLogo custom={false} userName='jihyeon' />
            {false ? (
              <Right>
                <ThemeToggleButton />
                <SearchButton to={"/"}>
                  <SearchIcon />
                </SearchButton>
                <RoundButton
                  border
                  color='darkGray'
                  style={{ marginRight: "1.25rem" }}
                  to='/write'
                  className='write-button'
                >
                  새 글 작성
                </RoundButton>
              </Right>
            ) : (
              <Right>
                <ThemeToggleButton />
                <SearchButton to={"/test"}>
                  <SearchIcon />
                </SearchButton>
                <RoundButton color='darkGray' to={"/test2"}>
                  로그인
                </RoundButton>
              </Right>
            )}
          </Inner>
        </HeaderOuter>
      </Block>
    </header>
  );
}

const SearchButton = styled(Link)<{ to: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  outline: none;
  border-radius: 50%;
  color: ${themedPalette.text1};
  cursor: pointer;
  $:hober {
    background: ${themedPalette.slight_layer};
    svg {
      // 일단 뺸다.
    }
    margin-right: 0.5rem;
  }
`;

const HeaderOuter = styled.div`
  height: 4rem;
`;

const Inner = styled(MainResponsive)`
  height: 100%; // parent height 전체
  display: flex; // 위 MainResponsive에서 가져가는 영역 전체 flex
  align-items: center; // vertical center
  justify-content: space-between; // 헤더 왼쪽 오른쪽
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

// ${media.medium} {
//   display: none; //Right는 medium 1024px 이하일때 display:none으로, header.tsx에 floatingHeader를 띄운다.
// }

export default Header;
