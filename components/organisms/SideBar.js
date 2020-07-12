import { useSelector, shallowEqual } from 'react-redux'
import styled from 'styled-components';
import Link from 'next/link';
import SideBarList from '@/components/organisms/SideBarList';
import css from "@/styles/utils.scss"
import { color } from '@/utils/color';

const state = () => {
  return useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  )
};

const request = [
  { text: 'お題の作成', href: '/', icon: 'task' },
  { text: '送ったお題', href: '/', icon: 'send' },
  { text: 'お題箱を探す', href: '/', icon: 'search' },
];

const task = [
  { text: '未消化', href: '/', icon: 'task' },
  { text: 'セルフ', href: '/', icon: 'self' },
  { text: 'お気に入り', href: '/', icon: 'star' },
  { text: '消化済み', href: '/', icon: 'done' },
  { text: '全て', href: '/', icon: 'all' },
];

const other = [
  { text: '設定', href: '/settings', icon: 'setting' },
  { text: 'スタイルガイド', href: '/styleGuide', icon: 'guide' },
]

const development = [
  { text: 'github', href: '/', icon: 'git' },
  { text: '発表資料', href: '', icon: 'guide' },
  { text: 'ログアウト', href: '/login', icon: 'done' },
]

const SideBar = () => {
  const theme = useSelector(state => state.theme, shallowEqual);
  const userName = useSelector(state => state.userName, shallowEqual);
  const email = useSelector(state => state.email, shallowEqual);

  const aside = {
    background: `${color[theme]['glay3']}`,
  }

  const _email = {
    color: `${color[theme]['glay1']}`,
  }

  return (
    <Aside style={aside}>
      <Logo>
        <Link href="/"><a>お題箱</a></Link>
      </Logo>
      <ListContainer>
      <SideBarList
          title="お題箱"
          list={request}
          className={css['marginBottm--small']}
        />
        <SideBarList
          title="お題管理"
          list={task}
          className={css['marginBottm--small']}
        />
        <SideBarList
          title="その他"
          list={other}
          className={css['marginBottm--small']}
        />
        <SideBarList
          title="development"
          list={development}
        />
      </ListContainer>
      <User>
        <Name>{userName}のお題箱</Name>
        <Email style={_email}>{email}</Email>
      </User>
    </Aside>
  )
};

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
  width: 180px;
  height: 100vh;
  overflow: hidden;
  color: #fff;
`

const Email = styled.p`
  font-size: 12px;
  line-height: normal;
`

const Logo = styled.h1`
  flex: 0 0 auto;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  a {
    color: #fff;
    text-decoration: none;
  }
`

const ListContainer = styled.div`
  flex: 1 1 auto;
`

const User = styled.div`
  flex: 0 0 auto;
`

const Name = styled.p`
  font-size: 12px;
  line-height: normal;
`


export default SideBar;