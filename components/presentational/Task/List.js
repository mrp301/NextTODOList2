import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import ListItem from '@/components/presentational/Task/ListItem';
import ListHead from '@/components/presentational/Task/ListHead';
import css from "@/styles/utils.scss"

function List(props) {
  const theme = useSelector(state => state.theme, shallowEqual);

  return (
    <_List>
      <ListHead />
      <tbody>
        {props.tasks.map((task, index) => (
          <ListItem key={index} task={task} />
        ))}
      </tbody>
    </_List>
  )
};

const _List = styled.table`
  width: 100%;
`

export default List;