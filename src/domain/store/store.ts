import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

class Store {
  @observable lastUpdate = 0;
  @observable light = false;

  timer?: number;

  constructor(_: boolean, initialData: any = {}) {
    this.lastUpdate =
      initialData.lastUpdate != null ? initialData.lastUpdate : Date.now();
    this.light = !!initialData.light;
  }

  @action start = () => {
    this.timer = (setInterval(() => {
      this.lastUpdate = Date.now();
      this.light = true;
    }, 1000) as unknown) as number;
  };

  stop = () => clearInterval(this.timer);
}

let store: Store;

export function initializeStore(initialData?: any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (!store) {
    store = new Store(isServer, initialData);
  }
  return store;
}
