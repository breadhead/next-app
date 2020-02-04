import { types } from 'mobx-state-tree';

export const ModalStore = types
  .model('modal', { modals: types.map(types.boolean) })
  .views(self => {
    return {
      isOpen(key: string) {
        return self.modals.has(key);
      },
      // doesHaveOpenModal() {
      //   let hasOpen = false;
      //   self.modals.forEach(value => {
      //     if (value) hasOpen = value;
      //   });
      //
      //   return hasOpen;
      // },
    };
  })
  .actions(self => {
    return {
      update(key: string, value?: boolean) {
        self.modals.set(key, value || false);
      },
      remove(key) {
        self.modals.delete(key);
      },
    };
  });
