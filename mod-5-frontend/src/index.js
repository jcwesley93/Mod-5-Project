import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import reducer from "./Redux/reducer"
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

// pass in the reducer
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
 <BrowserRouter>
    <Provider store={store}> 
        <App key="App" />
    </Provider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
