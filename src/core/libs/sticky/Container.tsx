import React, { PureComponent } from 'react';
import raf from 'raf';

export const ContainerContext = React.createContext({});

export default class Container extends PureComponent {
  events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load',
  ];

  rafHandle = null;
  framePending = false;
  subscribers = [];

  private readonly containerRef;

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  subscribe = handler => {
    this.subscribers = this.subscribers.concat(handler);
  };

  unsubscribe = handler => {
    this.subscribers = this.subscribers.filter(current => current !== handler);
  };

  notifySubscribers = evt => {
    if (!this.framePending && this.containerRef.current) {
      const { currentTarget } = evt;
      const node = this.containerRef.current;

      this.rafHandle = raf(() => {
        this.framePending = false;
        const { top, bottom } = node.getBoundingClientRect();

        this.subscribers.forEach((handler: any) =>
          handler({
            distanceFromTop: top,
            distanceFromBottom: bottom,
            eventSource: currentTarget === window ? document.body : node,
          }),
        );
      });
      this.framePending = true;
    }
  };

  getParent = () => this.containerRef.current;

  componentDidMount() {
    this.events.forEach(event =>
      window.addEventListener(event, this.notifySubscribers),
    );
  }

  componentWillUnmount() {
    if (this.rafHandle) {
      raf.cancel(this.rafHandle);
      this.rafHandle = null;
    }

    this.events.forEach(event =>
      window.removeEventListener(event, this.notifySubscribers),
    );
  }

  render() {
    return (
      <ContainerContext.Provider
        value={{
          subscribe: this.subscribe,
          unsubscribe: this.unsubscribe,
          getParent: this.getParent,
        }}
      >
        <div
          {...this.props}
          ref={this.containerRef}
          onScroll={this.notifySubscribers}
          onTouchStart={this.notifySubscribers}
          onTouchMove={this.notifySubscribers}
          onTouchEnd={this.notifySubscribers}
        />
      </ContainerContext.Provider>
    );
  }
}
