import React from 'react';

import { TranslateDict } from '@app/core/libs/WithTranslate';
import { MainPage } from '@app/modules/main-page';

const Index = () => {
  return <MainPage />;
};

Index.getInitialProps = async () => {
  return {
    namespacesRequired: [TranslateDict.COMMON],
  };
};

export default Index;
