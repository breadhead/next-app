import { useCallback } from 'react'
import { Counter } from '@app/ui/Counter'
import { useThunk } from '@breadhead/thunk-utils'
import { actions } from '@app/domain/time/reducer'
import { selectAll } from '@app/domain/time/selectors'
import { useMappedState } from 'redux-react-hook'
import { Clock } from '@app/ui/Clock'

export const Time = () => {
  const dispatch = useThunk()
  const mapState = useMappedState(selectAll)

  const { lastUpdate, count } = mapState

  const onIncrement = useCallback(async () => {
    dispatch(actions.increment() as any)
  }, [])

  const onDecrement = useCallback(async () => {
    dispatch(actions.decrement() as any)
  }, [])

  const onReset = useCallback(async () => {
    dispatch(actions.reset() as any)
  }, [])

  return (
    <>
      <Clock lastUpdate={lastUpdate} />
      <Counter
        inc={onIncrement}
        dec={onDecrement}
        reset={onReset}
        count={count}
      />
    </>
  )
}
