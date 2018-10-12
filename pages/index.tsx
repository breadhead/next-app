import React from 'react'

import LandingPage from '@app/features/landing'
import { AppContext } from '@app/lib/server-types'

class Index extends React.Component {

  public static getInitialProps(context: AppContext) {
    // prepare data for landing

    return {}
  }

  public render() {
    return (
      <LandingPage />
    )
  }
}

export default Index
