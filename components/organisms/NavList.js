import Link from 'next/link';
import styled from 'styled-components';
import { color } from '../../utils/color';

const navListItem = ['マイページ', 'お題一覧', '設定'];
const NavList = () => {
  return (
    <Nav>
      <NavLists>
        {navListItem.map((item, index) => (
          <li key={index}>
            <Link href="/"><a>{item}</a></Link>
          </li>
        ))}
      </NavLists>
    </Nav>
  );
};

const Nav = styled.div`
  border-bottom: solid 1px ${color.primary};
`

const NavLists = styled.ul`
  display: flex;
  list-style: none;
  width: 944px;
  margin: 0 auto;
  
  li {
    padding: 10px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    &:hover {
      background: #f5f5f5;;
    }
    a {
      color: ${color.main};
      display: block;
      text-decoration: none;
    }
  }
`;

export default NavList;