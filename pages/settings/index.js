import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector, shallowEqual } from 'react-redux'
import Layout from '@/components/layouts/default';
import settings from "@/utils/settings";
import Head from 'next/head';
import AppButton from '@/components/presentational/AppButton';
import css from "@/styles/utils.scss"
import AppInput from '@/components/presentational/Form/AppInput';


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

function Page() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme, shallowEqual);

  return (
    <div>
      <Head>
        <title>設定{settings.title}</title>
      </Head>
      <Layout>
        <p>
          <AppInput
            type='text'
            value={value}
            setValue={setValue}
          />
          <AppButton
            handleClick={() => dispatch({ type: 'CHANGE_THEME', theme: 0 })}
            type={theme === 'nomal' ? 'primary': ''}
            className={css['marginRight--xxsmall']}
          >ホワイト</AppButton>
          <AppButton
            handleClick={() => dispatch({ type: 'CHANGE_THEME', theme: 1 })}
            type={theme === 'dark' ? 'primary': ''}
          >ダーク
          </AppButton>
        </p>
        <p>現在のテーマ{theme}</p>
      </Layout>
    </div>
  )
}

export default Page;

