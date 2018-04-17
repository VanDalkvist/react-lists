import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './index.css';

import App from './App';
import { configure as configureStore } from './store';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

let root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);

registerServiceWorker();

// https://maxfarseer.gitbooks.io/redux-course-ru/content/konteineri_i_komponenti.html
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
// https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills
// http://blog.isquaredsoftware.com/presentations/2018-03-redux-fundamentals/#/21
// https://getbootstrap.com/docs/3.3/css/
// https://redux.js.org/basics/example-todo-list
// https://github.com/coderiety/react-list/tree/master/docs