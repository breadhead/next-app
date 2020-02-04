import React from 'react';

import { Error } from '@app/modules/error';
import { notify } from '@app/core/libs/bugsnag/bugsnag';

interface ErrorPageProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  return <Error url={'error'} statusCode={statusCode} />;
}

ErrorPage.getInitialProps = props => {
  if (props.err) {
    notify(props.err, props.req);
  }

  const statusCode = props.res
    ? props.res.statusCode
    : props.err
    ? props.err.statusCode
    : null;
  return { statusCode };
};

export default ErrorPage;
