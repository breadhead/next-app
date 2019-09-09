import { observe } from 'mobx';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { useStore } from '@app/domain/store/storeContext';

import s from './Landing.css';

export const LandingPage = observer(() => {
  const store = useStore();

  const onButtonClick = React.useCallback(() => {
    store.book.increment();
  }, [store]);

  return (
    <p className={s.landing}>
      your new app
      <p>counter value: {store.book.counterValue}</p>
      <button onClick={onButtonClick} className={s.button}>
        button
      </button>
    </p>
  );
});
