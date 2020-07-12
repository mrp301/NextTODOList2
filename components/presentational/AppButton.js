import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components';
import { color } from '@/utils/color';

const state = () => {
  return useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  )
};

export default({ children, type, handleClick, className }) => {
  const { theme } = state();

  const Button = styled.button`
  padding: 10px 5px;
  text-align: center;
  color: #fff;
  min-width: 100px;
  font-weight: bold;
  border-radius: 4px;
  background: ${type ? color[theme][type] : color[theme]['glay2']};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

  return (
    <Button onClick={handleClick} className={className}>
      {children}
    </Button>
  );
};