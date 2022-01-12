import { createStore } from 'vuex';

export default createStore({
  state: {
    lists: [
      {
        name: 'List 1',
        items: [
          {
            name: 'Item 1',
            value: 12,
            color: '#123d9a',
            checked: false,
          },
          {
            name: 'Item 2',
            value: 13,
            color: '#f6b73c',
            checked: false,
          },
          {
            name: 'Item 3',
            value: 2,
            color: '#961d7c',
            checked: false,
          },
        ],
      },
      {
        name: 'List 2',
        items: [
          {
            name: 'Item 1',
            value: 6,
            color: '#123d9a',
            checked: false,
          },
          {
            name: 'Item 2',
            value: 1,
            color: '#a83ddd',
            checked: false,
          },
          {
            name: 'Item 3',
            value: 12,
            color: '#121d7c',
            checked: false,
          },
        ],
      },
    ],
  },
  mutations: {
    changeItem(store, payload) {
      const listIndex = store.lists.indexOf(payload.list);
      const itemIndex = store.lists[listIndex].items.indexOf(payload.oldItem);
      // eslint-disable-next-line no-param-reassign
      store.lists[listIndex].items[itemIndex] = payload.newItem;
    },
  },
  actions: {
  },
  modules: {
  },
});
