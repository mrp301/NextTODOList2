import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import SideBar from '../organisms/SideBar';
import styled from 'styled-components';
import { color } from '@/utils/color';
import css from "@/styles/utils.scss"
import TheHeader from '@/components/presentational/TheHeader';

function LayoutDefault(props) {
  const theme = useSelector(state => state.theme, shallowEqual);
  const userName = useSelector(state => state.userName, shallowEqual);

  const main = {
    background: `${color[theme]['innerColor']}`
  };

  return (
    <Flex className={css[`text--${theme}`]}>
      <SideBar />
      <Main style={main}>
        <TheHeader title={props.title} />
        <Inner>
          {props.children}
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
`

const Flex = styled.div`
  display: flex;
`

const Inner = styled.div`
  padding: 20px 20px 40px;
`;

export default LayoutDefault;