import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { createStore } from 'redux';

const store = createStore((state = { name: 'Jeff', station: 19 }) => state);

console.log(store.getState());


ReactDOM.render(<div><h1>Training Application</h1><p>This is the boilerplate for the training application.</p></div>, document.getElementById('app'));
