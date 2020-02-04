import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import Cookies from 'js-cookie';
import React from 'react';

const bugsnagClient = bugsnag({
  // TODO: replace with env variable
  apiKey: 'aaa',
});
bugsnagClient.use(bugsnagReact, React);

export function notify(
  err: any,
  req: any = { cookies: { token: '', sessionId: '' } },
) {
  try {
    bugsnagClient.notify(err, {
      beforeSend: function(report) {
        const token = getDataFromCookies('token', req);
        const sessionId = getDataFromCookies('sessionId', req);
        report.errorMessage = augmentErrorMessage(
          report.errorMessage,
          token,
          sessionId,
        );
      },
    });
  } catch (error) {
    console.log('TCL: error', error);
  }
}
function augmentErrorMessage(
  errorMessage: string,
  token: string | undefined,
  sessionId: string | undefined,
): string {
  return `${errorMessage} ---token: ${token}, ---sessionId: ${sessionId}`;
}

const getDataFromCookies = (key: string, req) =>
  typeof window !== 'undefined' ? Cookies.get(key) : req.cookies[key];

export default bugsnagClient;
