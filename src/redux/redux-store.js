import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import setUserAuth from './user-auth';
import thunk from 'redux-thunk';


 let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage :usersReducer,
    auth:setUserAuth
});

let store = createStore(reducers,applyMiddleware(thunk));
 window.store=store; 
export default store;
