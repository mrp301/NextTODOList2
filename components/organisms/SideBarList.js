import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components';
import Link from 'next/link';
import { color } from '@/utils/color';

const state = () => {
  return useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  )
};

const SideBarList = ({ title, list, className }) => {
  const theme = useSelector(state => state.theme, shallowEqual);
  const _title = {
    color: `${color[theme]['glay1']}`,
  }
  const _a = {
    color: `${color[theme]['glay1']}`,
  }


  const items = list.map(({ text, href, icon }) => {
    return (
      <Item key={text}>
        <Link href={href}>
          <a style={_a}>
            <Icon
              type="image/svg+xml"
              data={`../../static/images/icon_${icon}.svg`}
            />{text}
          </a>
        </Link>
      </Item>
  )});

  return (
    <div className={className}>
      <Title style={_title}>{title}</Title>
      <List>
        {items}
      </List>
    </div>
  );
};


const Title = styled.p`
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 12px;
`

const Item = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 5px;
    height: 32px;
    width: 100%;
    font-size: 14px;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: #494949;
  }
`;

const List = styled.ul`
  flex: 1 1 auto;
  &li:not(::last-child) {
    margin-bottom: 12px;
  }
`

const Icon = styled.object`
  margin-right: 8px;
  width: 18px;
  height: 18px;
`;

export default SideBarList;