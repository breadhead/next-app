import * as React from 'react'
import { useEffect } from 'react'
import { AppContext } from '@app/domain/AppContext'

import { Time } from '@app/features/time'
import { serverRenderClock } from '@app/domain/time/actions/serverRenderClock'
import { startClock } from '@app/domain/time/actions/startClock'
import { useThunk } from '@breadhead/thunk-utils'
import { Link } from '@app/features/routing'

const Index = () => {
  const dispatch = useThunk()

  useEffect(() => {
    const timer = startClock(dispatch as any)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <div>
        <Link route="/">На главную</Link>
      </div>
      <Time />
    </>
  )
}

Index.getInitialProps = async ({ reduxStore }: AppContext) => {
  reduxStore.dispatch(serverRenderClock() as any)

  return {}
}

export default Index
