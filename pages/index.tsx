import Link from 'next/link';
import * as React from 'react';

import { LandingPage } from '@app/features/landing';

const Index = () => (
  <div>
    <Link href="/post/[id]" as="/post/1">
      <a>Таймер</a>
    </Link>
    <LandingPage />
  </div>
);

export default Index;
