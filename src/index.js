import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './app/components/List';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

