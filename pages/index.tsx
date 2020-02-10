import React from 'react';

import { TranslateDict, useTranslation } from '@app/core/libs/WithTranslate';

const Index = () => {
  const { t } = useTranslation();

  return <div>sdds</div>;
};

Index.getInitialProps = async () => {
  return {
    namespacesRequired: [TranslateDict.COMMON],
  };
};

export default Index;
