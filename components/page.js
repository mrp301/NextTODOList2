import { useDispatch } from 'react-redux'
import { useSelector, shallowEqual } from 'react-redux'

const useCounter = () => {
  const dispatch = useDispatch()
  const hoge = () =>
    dispatch({
      type: 'HOGE',
      value: 'あああ',
    })
  return hoge;
}

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
  const { theme } = useClock()
  const { fuga } = userFuga()
  const dispatch = useDispatch()
  return (
    <>
      <p><button onClick={() => dispatch({ type: 'CHANGE_THEME', theme: 1 })}>ホワイト</button></p>
      <p><button onClick={() => dispatch({ type: 'CHANGE_THEME', theme: 0 })}>ダーク</button></p>
      <p>現在のテーマ{theme}</p>
    </>
  )
}
