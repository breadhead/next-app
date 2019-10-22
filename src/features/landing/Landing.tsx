import { observer } from 'mobx-react-lite';
import * as React from 'react';

import { useStore } from '@app/stores/root/helpers/storeContext';

import s from './Landing.css';

export const LandingPage = observer(() => {
  const store = useStore();

  const onButtonClick = React.useCallback(() => {
    store.counter.increment();
  }, [store]);

  return (
    <p className={s.landing}>
      your new app
      <p>counter value: {store.counter.counterValue}</p>
      <button onClick={onButtonClick} className={s.button}>
        button
      </button>
    </p>
  );
});
