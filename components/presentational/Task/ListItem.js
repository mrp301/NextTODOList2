import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components';
import css from "@/styles/utils.scss"

export default({ task }) => {
  const theme = useSelector(state => state.theme, shallowEqual);
  const taskItems = (Object.keys(task)).map((item, index) => {
    return <Td key={index}>{task[item]}</Td>
  });

  return (
    <ListItem className={css[`baseColor--${theme}`]}>
      {taskItems}
    </ListItem>
  );
};

const ListItem = styled.tr`
  cursor: pointer;
`

const Td = styled.td`
  padding: 10px;
  border-bottom: solid 1px #e6e6e6;
`;
