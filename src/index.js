import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addDialogMessage, addMessage, subscribe, updateNewDialogMessage, updateNewPostChange } from "./redux/state";
import { BrowserRouter } from "react-router-dom";


 let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App     state={state} 
                     addMessage={addMessage}
                     updateNewPostChange={updateNewPostChange}
                     updateNewDialogMessage={updateNewDialogMessage}
                     addDialogMessage={addDialogMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

