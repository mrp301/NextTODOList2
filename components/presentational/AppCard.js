import styled from 'styled-components';
import { color } from '../../utils/color';
import { useSelector, shallowEqual } from 'react-redux';

const useClock = () => {
  return useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  )
}

const AppCard = ({ children, title, headerText, className }) => {
  const { theme } = useClock();
  const Header = styled.div`
    padding: 10px;
    background: ${color[theme]['primary']};
  `

  return (
    <Card className={className}>
      <Header>
        <Title>{title}</Title>
        <HeaderText>{headerText}</HeaderText>
      </Header>
      <Body>
        {children}
      </Body>
    </Card>
  )
};

const Card = styled.div`
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`

const Title = styled.h2`
  margin-bottom: 4px;
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