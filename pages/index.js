import React, { useState } from 'react'
import Head from 'next/head';
import AppCard from '@/components/presentational/AppCard';
import AppPanel from '@/components/presentational/AppPanel';
import PanelList from '@/components/organisms/PanelList';
import Layout from '@/components/layouts/default';
import css from "@/styles/utils.scss"
import settings from "@/utils/settings";
import AppInput from '@/components/presentational/Form/AppInput';

function SomePage() {
  const [hoge, setHoge] = useState("");

  return (
    <div>
      <Head>
        <title>ホーム{settings.title}</title>
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
        <AppInput
            label="パスワード"
            name="hoge"
            value={hoge}
            placeholder="パスワード"
            isError={false}
            setValue={setHoge}
        />
        {hoge}
      </Layout>
    </div>
  )
}

export default SomePage;