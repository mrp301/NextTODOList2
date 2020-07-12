import styled from 'styled-components';
import { color } from '../../utils/color';

const AppPanelList = ({ children }) => (
  <PanelList>
    {children}
  </PanelList>
);

const PanelList = styled.ul`
  display: flex;
  justify-content: center;
`

export default AppPanelList;