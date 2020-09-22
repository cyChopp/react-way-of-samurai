import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";
import { BrowserRouter } from "react-router-dom";


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App     state={state} 
                    dispatch={store.dispatch.bind(store)}
                    //  addMessage={store.addMessage.bind(store)}
                    //  updateNewPostChange={store.updateNewPostChange.bind(store)}
                    //  updateNewDialogMessage={store.updateNewDialogMessage.bind(store)}
                    //  addDialogMessage={store.addDialogMessage.bind(store)}
                    //  dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

