import styled from 'styled-components';
import { color } from '../../utils/color';
import { useSelector, shallowEqual } from 'react-redux';


function AppCard({ children, title, headerText, className }) {
  const theme = useSelector(state => state.theme, shallowEqual);
  const header = {
    background: `${color[theme]['primary']}`
  }
  const card = {
    background: `${color[theme]['panel']}`,
    borderColor: `${color[theme]['glay2']}`,
  }

  return (
    <Card className={className} style={card}>
      <Header style={header}>
        <Title>{title}</Title>
        <HeaderText>{headerText}</HeaderText>
      </Header>
      <Body>
        {children}
      </Body>
    </Card>
  )
};

const Header = styled.div`
  padding: 10px 16px;
`

const Card = styled.div`
  border: solid 1px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`

const Title = styled.h2`
  margin-bottom: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`

const HeaderText = styled.p`
  color: #fff;
  font-size: 14px;
`

const Body = styled.div`
  padding: 20px;
`

export default AppCard;