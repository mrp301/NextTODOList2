import styled from 'styled-components';

export default() => (
  <ListHead>
    <tr>
      {colomNames.map((name, index) => (
        <Title key={index}>{name}</Title>
      ))}
    </tr>
  </ListHead> 
);

const colomNames = ['id', 'お題', '依頼者', 'ステータス'];

const ListHead = styled.thead`
`

const Title = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
`