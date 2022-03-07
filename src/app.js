import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import { changeAction } from './redux/actions/root';


import 'normalize.css/normalize.css';
import './styles/styles.scss';

const app = (
    <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
);


store.subscribe(() => console.log(store.getState()));
console.log(store.getState());
store.dispatch(changeAction());

ReactDOM.render(app, document.getElementById('app'));