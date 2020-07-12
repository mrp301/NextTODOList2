import styled from 'styled-components';

const TheFooter = () => (
  <Footer>
    <Inner>
      フッター
    </Inner>
  </Footer>
);

const Footer = styled.footer`
  padding: 10px;
  background-color: #464a4d;
`

const Inner = styled.footer`
  color: #fff;
  margin: 0 auto;
  width: 944px;
`



export default TheFooter;