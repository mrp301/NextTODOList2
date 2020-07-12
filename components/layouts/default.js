import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import SideBar from '../organisms/SideBar';
import styled from 'styled-components';
import { color } from '@/utils/color';
import css from "@/styles/utils.scss"

function LayoutDefault({ children }) {
  const theme = useSelector(state => state.theme, shallowEqual);

  const main = {
    background: `${color[theme]['innerColor']}`
  };

  return (
    <Flex className={css[`text--${theme}`]}>
      <SideBar />
      <Main style={main}>
        <Inner>
          {children}
        </Inner>
      </Main>
    </Flex>
  )
};

const Main = styled.main`
  flex: 1 1 auto;
  width: 100%;
  min-height: 100vh;
  margin-left: 180px;
  padding: 20px;
`

const Flex = styled.div`
  display: flex;
`

const Inner = styled.div`
  margin: 0 auto;
`;

export default LayoutDefault;