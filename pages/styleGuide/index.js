import React, { useState } from 'react'
import Head from 'next/head';
import AppButton from '@/components/presentational/AppButton';
import AppCard from '@/components/presentational/AppCard';
import AppPanel from '@/components/presentational/AppPanel';
import PanelList from '@/components/organisms/PanelList';
import Layout from '@/components/layouts/default';
import List from '@/components/presentational/Task/List';
import AppInputWithLabel from '@/components/presentational/Form/AppInputWithLabel';
import css from "@/styles/utils.scss"
import settings from "@/utils/settings";

function SomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Head>
        <title>スタイルガイド{settings.title}</title>
      </Head>
      <Layout>
        <AppCard
          title="ダッシュボード"
          headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
          className={css['marginBottm--small']}
        >
          <PanelList>
            <AppPanel panelTitle="お題の作成">
              自分のお題を作成します。
            </AppPanel>
            <AppPanel panelTitle="お題の管理">
              <span>もらったお題の<br />管理ができます。</span>
            </AppPanel>
            <AppPanel panelTitle="設定">
              <span>何かの設定ができます。</span>
            </AppPanel>
          </PanelList>
        </AppCard>
        <AppCard
          title="お題リスト"
          headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
          className={css['marginBottm--small']}
        >
          <List />
        </AppCard>
        <AppCard
          title="フォームパーツ"
          headerText={<span>ログイン・アカウント作成・お題作成用</span>}
        >
          <AppInputWithLabel
            label="メールアドレス"
            name="email"
            value={email}
            placeholder="メールアドレス"
            isError={false}
            errorText="メールアドレスが未入力です"
            setValue={setEmail}
            className={css['marginBottm--xsmall']}
          />
          <AppInputWithLabel
            label="パスワード"
            name="password"
            value={password}
            placeholder="パスワード"
            isError={false}
            errorText="パスワードが未入力です"
            setValue={setPassword}
            className={css['marginBottm--xsmall']}
          />
          <AppButton
            type="primary"
            handleClick={() => {console.log('ほげ')}}
            className={css['marginRight--xxsmall']}
          >プライマリー
          </AppButton>
          <AppButton handleClick={() => {console.log('ほげ')}}>送信</AppButton> 
        </AppCard>
      </Layout>
    </div>
  )
}

export default SomePage;
