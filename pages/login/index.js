import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import settings from "@/utils/settings";
import Head from 'next/head';
import AppButton from '@/components/presentational/AppButton';
import css from "@/styles/utils.scss"
import AppInputWithLabel from '@/components/presentational/Form/AppInputWithLabel';
import AppCard from '@/components/presentational/AppCard';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector, shallowEqual } from 'react-redux'
import { color } from '@/utils/color';

function login() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme, shallowEqual);
  const wapper = {
    background: `${color[theme]['innerColor']}`
  };

  const handleLogin = () => {
    if (!name || !email) {
      alert('未入力項目があります。')
      return;
    } 

    dispatch({
      type: 'LOGIN',
      name,
      email,
    })
    router.push('/');
  }

  return (
    <div>
      <Head>
        <title>ログイン{settings.title}</title>
      </Head>
      <Wapper style={wapper} className={css[`text--${theme}`]}>
        <AppCard className="card" title="ログイン" headerText={<span>ユーザー名とパスワードを入力してください。</span>}>
          <AppInputWithLabel
            label="ユーザー名"
            name="user"
            value={name}
            placeholder="桃山みらい"
            isError={false}
            errorText="ユーザー名がが未入力です"
            setValue={setName}
            className={css['marginBottm--xsmall']}
          />
          <AppInputWithLabel
            label="メールアドレス"
            name="email"
            value={email}
            placeholder="momoyama.mirai@gmail.com"
            isError={false}
            errorText="メールアドレスが未入力です"
            setValue={setEmail}
            className={css['marginBottm--xsmall']}
          />
          <div className={css['text--center']}>
            <AppButton
              type="primary"
              handleClick={() => handleLogin()}
            >ログイン</AppButton>
          </div>
        </AppCard>
      </Wapper>
    </div>
  )
}

const Wapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .card {
    width: 600px;
  }
`

export default login;

