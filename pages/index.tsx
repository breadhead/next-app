import * as React from 'react'

import { LandingPage } from '@app/features/landing'
import { Link } from '@app/features/routing'

const Index = () => (
  <>
    <LandingPage />
    <Link route="/time">Таймер</Link>
  </>
)

export default Index
