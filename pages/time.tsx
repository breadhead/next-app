import * as React from 'react'
import { AppContext } from '@app/domain/AppContext'

import { Time } from '@app/features/time'
import { serverRenderClock } from '@app/domain/time/actions/serverRenderClock'
import { startClock } from '@app/domain/time/actions/startClock'
import { useThunk } from '@breadhead/thunk-utils'

const Index = () => {
  const dispatch = useThunk()
  startClock(dispatch as any)

  return <Time />
}

Index.getInitialProps = async ({ reduxStore }: AppContext) => {
  reduxStore.dispatch(serverRenderClock() as any)

  return {}
}

export default Index
