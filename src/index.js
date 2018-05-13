import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListContainer from './app/container/ListContainer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <ListContainer />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

