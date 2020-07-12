import styled from 'styled-components';
import { useSelector, shallowEqual } from 'react-redux';
import ListItem from '@/components/presentational/Task/ListItem';
import ListHead from '@/components/presentational/Task/ListHead';
import css from "@/styles/utils.scss"

function List() {
  const theme = useSelector(state => state.theme, shallowEqual);

  return (
    <_List>
      <ListHead />
      <tbody>
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} />
        ))}
      </tbody>
    </_List>
  )
};

const tasks = [
  {
    id: 1,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 2,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 3,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 4,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 5,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 6,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 7,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
  {
    id: 8,
    title: 'タイトル',
    requester: 'ゲスト',
    state: '未着手',
  },
]

const _List = styled.table`
  width: 100%;
`

export default List;