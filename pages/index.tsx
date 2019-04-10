import * as React from 'react'
import { Component } from 'react'

import { LandingPage } from '@app/features/landing'

export default class Index extends Component {
  public static getInitialProps() {
    // prepare data for landing

    return {}
  }

  public render() {
    return <LandingPage />
  }
}
