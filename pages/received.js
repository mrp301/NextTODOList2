import React, { useState } from 'react'
import Head from 'next/head';
import AppCard from '@/components/presentational/AppCard';
import Layout from '@/components/layouts/default';
import css from "@/styles/utils.scss"
import settings from "@/utils/settings";
import { useSelector, shallowEqual } from 'react-redux';
import List from '@/components/presentational/Task/List';
import styled from 'styled-components';
import tasks from '@/utils/received';

function SomePage() {
  const [task, setTask] = useState("");
  const userName = useSelector(state => state.userName, shallowEqual);

  return (
    <div>
      <Head>
        <title>未消化タスク{settings.title}</title>
      </Head>
      <Layout title={`${userName}のマイページ`}>
        <AppCard
          title="未消化タスク一覧"
          headerText={<span>未消化タスクのお題一覧を表示します。</span>}
          className={css['marginBottm--small']}
        >
          <List tasks={tasks} />
        </AppCard>
      </Layout>
    </div>
  )
}

export default SomePage;