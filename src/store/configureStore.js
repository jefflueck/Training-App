import { createStore } from 'redux';

const store = createStore((state = { name: 'Jeff', station: 19 }) => state);

console.log(store.getState());
