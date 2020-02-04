import { observer } from 'mobx-react';
import React from 'react';
import ReactModal from 'react-modal';
import cx from 'classnames';

import { useScrollBodyLock } from '@app/core/components/use-modal/useScrollBodyLock';
import { useStore } from '@app/stores/root/helpers/storeContext';
import { NEXT_ID } from '@app/core/styles/config';

ReactModal.setAppElement(`#${NEXT_ID}`);

interface ModalContainerProps {
  modalKey: string;
  children: React.ReactNode;
  close: () => void;
  theme?: 'primary' | 'second' | 'center';
  zIndex?: number;
  className?: string;
  [key: string]: any;
  closeDelay?: boolean;
  delay?: number;
}

export const ModalContainer = observer(
  ({
    modalKey,
    children,
    theme = 'primary',
    close,
    zIndex,
    className,
    closeDelay,
    delay,
    ...rest
  }: ModalContainerProps) => {
    const store = useStore();
    const { lock, unlock } = useScrollBodyLock();
    const isOpen = store.modal.isOpen(modalKey);
    const classNameWithTheme = `${cx(
      'content',
      theme === 'second' && 'secondContent',
      theme === 'center' && 'centerContent',
      `${className}-content`,
    )}`;
    const overlayClassName = `${cx('overlay', `${className}-overlay`)}`;
    const portalClassName = `ReactModalPortal ${className || ''}`;
    const styles = {};

    if (zIndex) {
      styles['overlay'] = {
        zIndex,
      };
    }

    return (
      <ReactModal
        portalClassName={portalClassName}
        shouldCloseOnOverlayClick
        className={classNameWithTheme}
        overlayClassName={overlayClassName}
        closeTimeoutMS={closeDelay ? delay || 400 : 0}
        onAfterOpen={lock}
        onAfterClose={unlock}
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        onRequestClose={close}
        style={styles}
        shouldFocusAfterRender
        {...rest}
      >
        {children}
      </ReactModal>
    );
  },
);
