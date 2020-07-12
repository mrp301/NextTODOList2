import { useDispatch } from 'react-redux'
import { useSelector, shallowEqual } from 'react-redux'
import Layout from '@/components/layouts/default';
import settings from "@/utils/settings";
import Head from 'next/head';
import AppButton from '@/components/presentational/AppButton';
import css from "@/styles/utils.scss"

const userFuga = () => {
  const dispatch = useDispatch()
  const fuga = () =>
    dispatch({
      type: 'CHANGE_THEME',
      theme: 1,
    });
  return { fuga }
}

const useClock = () => {
  return useSelector(
    (state) => ({
      theme: state.theme
    }),
    shallowEqual
  )
}

export default function Page() {
  const { theme } = useClock();
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>設定{settings.title}</title>
      </Head>
      <Layout>
        <p>
          <AppButton
            handleClick={() => dispatch({ type: 'CHANGE_THEME', theme: 1 })}
            type="primary"
            className={css['marginRight--xxsmall']}
          >ホワイト</AppButton>
          <AppButton
            handleClick={() => dispatch({ type: 'CHANGE_THEME', theme: 0 })}
          >ダーク
          </AppButton>
        </p>
        <p>現在のテーマ{theme}</p>
      </Layout>
    </div>
  )
}

