import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head';
import AppCard from '@/components/presentational/AppCard';
import AppButton from '@/components/presentational/AppButton';
import AppInput from '@/components/presentational/Form/AppInput';
import Layout from '@/components/layouts/default';
import css from "@/styles/utils.scss"
import settings from "@/utils/settings";
import { useSelector, shallowEqual } from 'react-redux';
import List from '@/components/presentational/Task/List';
import styled from 'styled-components';

function SomePage() {
  const [task, setTask] = useState("");
  const userName = useSelector(state => state.userName, shallowEqual);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks, shallowEqual);
  const handleLogin = () => {
    if (!task) {
      alert('タスクが未入力です！')
      return;
    }
    dispatch({
      type: 'ADD_TASK',
      task: {
        id: tasks.length + 1,
        title: task,
        requester: userName ? userName : 'ゲスト',
        state: '未着手',
      },
    })
    setTask('');
  }

  useEffect(() => {
    if(userName === 'ゲスト') { alert('ゲストユーザーとしてログインしています'); }
  }, []);

  return (
    <div>
      <Head>
        <title>ホーム{settings.title}</title>
      </Head>
      <Layout title={`${userName}のマイページ`}>
        <AppCard
          title="お題一覧"
          headerText={<span>全てのお題一覧を表示します。</span>}
          className={css['marginBottm--small']}
        >
          <List tasks={tasks} />
        </AppCard>
        <Wapper>
          <AppInput
            label="task"
            name="task"
            value={task}
            placeholder="お題を入力してください"
            setValue={setTask}
          />
          <AppButton
            type="primary"
            handleClick={() => handleLogin()}
          >追加</AppButton>
          </Wapper>
      </Layout>
    </div>
  )
}

const Wapper = styled.div`
  display: flex;
  input {
    margin-right: 12px;
  }
`

export default SomePage;