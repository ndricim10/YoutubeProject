import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { legacy_createStore as createStore, combineReducers } from "redux";
import {Provider} from 'react-redux'
import store from './Redux/Reducers/Store';

// const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <>
    <Provider store={store}>
    <App tab="home" />
    </Provider>
    </>
);