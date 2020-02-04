/// <reference types="cypress" />
import { SelfRootStore } from '../../src/stores/root/Root';

interface Window {
  store: SelfRootStore;
}
