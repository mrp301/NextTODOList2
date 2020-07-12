import styled from 'styled-components';
import { color } from '../../utils/color';
import { useSelector, shallowEqual } from 'react-redux';


function TheHeader(props) {
  const theme = useSelector(state => state.theme, shallowEqual);
  const header = {
    background: `${color[theme]['header']}`,
    borderColor: `${color[theme]['primary']}`,
  }

  return (
    <Header style={header}>
      <Title>{props.title}</Title>
    </Header>
  )
};

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 50px;
  border-bottom: solid 1px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 14px;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
`

export default TheHeader;