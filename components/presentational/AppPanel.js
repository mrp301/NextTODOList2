import styled from 'styled-components';
import { color } from '@/utils/color';
import Link from 'next/link';
import { useSelector, shallowEqual } from 'react-redux';

const AppPanel = ({ children, panelTitle }) => {
  return (
    <Link href="/hoge">
      <Panel>
        <Icon><img src="../../static/images/icon_create.png" /></Icon>
        <Body>
          <Title>{panelTitle}</Title>
          <Text>{children}</Text>
        </Body>
      </Panel>
    </Link>
  )
};

const Title = styled.h2`
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 18px;
`

const Panel = styled.li`
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border: solid 1px #e6e8eb;
  border-radius: 4px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background: #f5f5f5;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 160px;
`

const Body = styled.div`
  padding: 10px;
`

const Text = styled.p`
  font-size: 14px;
`

export default AppPanel;