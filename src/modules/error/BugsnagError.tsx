import React from 'react';

import { Meta } from '@app/core/components/meta';
import { useTranslation } from '@app/core/libs/WithTranslate';
import { Link } from '@app/core/primitives';

import {
  Button,
  ErrorWrapper,
  InfoWrapper,
  Picture,
  PictureWrapper,
  Text,
  Title,
} from './styled';

export const BugsnagError = React.memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        url={'error'}
        items={[
          {
            rule: 'error',
            meta: {
              title: 'Ошибка',
            },
          },
        ]}
      />
      <ErrorWrapper>
        <InfoWrapper>{renderError()}</InfoWrapper>
        <PictureWrapper>
          <Picture />
          <Picture className="picture-two" />
        </PictureWrapper>
      </ErrorWrapper>
    </>
  );

  function renderError() {
    return (
      <>
        <Title>{t('error.error')}</Title>
        <Text>{t('error.msg_404')}</Text>
        <Link href="/" as="/" isCustomLink isNextLink passHref>
          <Button>{t('error.goToMain')}</Button>
        </Link>
      </>
    );
  }
});
