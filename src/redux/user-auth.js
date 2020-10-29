import { usersAPI } from "../api/api";
import {stopSubmit} from "redux-form"

const SET_USER_AUTH = "SET_USER_AUTH";

let initialState = {
    userId:null,
    login:null,
    email:null,
    isAuth:false
};

 const setUserAuth = (state=initialState, action) => {


    switch (action.type) {
        case SET_USER_AUTH:
            return{
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
};

export const setUsersAuthentication = (userId,login,email,isAuth) => ({ type: SET_USER_AUTH ,
data:{
    userId,
    login,
    email,
    isAuth,
}});

export const userAuth = ()=>(dispatch)=>{
 
      return  usersAPI.userAuthenticator()
                .then(data=>{
                    if(data.resultCode === 0){
                        let {id,email,login}=data.data;
                        dispatch(setUsersAuthentication(id,email,login,true))
                        }
                })
}
export const loginForm = (email,password,rememberMe)=>(dispatch)=>{
    usersAPI.login(email,password,rememberMe)
        .then(response=>{
            if(response.data.resultCode === 0){
            dispatch(userAuth())
            }else{
                let message = response.data.messages.length >0 ? response.data.messages[0]: "Some error!"
                dispatch(stopSubmit("login",{_error:message}));

            }
        })
}
export const logoutForm = ()=>(dispatch)=>{
    usersAPI.logout()
        .then(response=>{
            if(response.data.resultCode === 0){
            dispatch(userAuth(null,null,null,false))
            }
        })
}

export default setUserAuth;
