import * as React from 'react';
import { observe } from 'mobx';

import s from './Landing.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '@app/domain/store/storeContext';

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
