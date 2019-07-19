import * as React from 'react'
import Link from 'next/link'
import { LandingPage } from '@app/features/landing'

const Index = () => (
  <>
    <LandingPage />
    <Link href="/post/1">
      <a>Таймер</a>
    </Link>
  </>
)

export default Index
