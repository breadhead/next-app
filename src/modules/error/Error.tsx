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

interface ErrorProps {
  url: string;
  statusCode: number;
}

const AUTHORIZATION_CODE = 401;
const FORBIDDEN_CODE = 403;

export const Error = React.memo(({ statusCode, url }: ErrorProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Meta
        url={url}
        items={[
          {
            rule: url,
            meta: {
              title: 'Ошибка №#CODE#',
            },
          },
        ]}
        content={{ code: statusCode }}
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
    if ([AUTHORIZATION_CODE, FORBIDDEN_CODE].includes(statusCode)) {
      const isAuth = statusCode !== AUTHORIZATION_CODE;

      return (
        <>
          <Title>{t('error.notAuth')}</Title>
          <Text>{t(`error.${isAuth ? 'msg_403' : 'msg_401'}`)}</Text>
          <Button onClick={open}>{t('error.enterByPhone')}</Button>
        </>
      );
    }

    return (
      <>
        <Title>
          {t('error.error')} {statusCode}
        </Title>
        <Text>{t('error.msg_404')}</Text>
        <Link href="/" as="/" isCustomLink isNextLink passHref>
          <Button>{t('error.goToMain')}</Button>
        </Link>
      </>
    );
  }
});
