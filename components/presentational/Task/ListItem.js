import styled from 'styled-components';

export default({ task }) => {
  const taskItems = (Object.keys(task)).map((item, index) => {
    return <Td key={index}>{task[item]}</Td>
  });

  return (
    <ListItem>
      {taskItems}
    </ListItem>
  );
};

const ListItem = styled.tr`
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`

const Td = styled.td`
  padding: 10px;
  border-bottom: solid 1px #e6e6e6;
`;
