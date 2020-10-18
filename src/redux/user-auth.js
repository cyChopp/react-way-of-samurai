import { usersAPI } from "../api/api";

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
                isAuth:true
            }
        default:
            return state;
    }
};

export const setUsersAuthentication = (userId,login,email) => ({ type: SET_USER_AUTH ,
data:{
    userId,
    login,
    email
}});

export const userAuth = ()=>{
    return (dispatch)=>{
        usersAPI.userAuthenticator()
                .then(data=>{
                    if(data.resultCode === 0){
                        let {id,email,login}=data.data;
                        dispatch(setUsersAuthentication(id,email,login))
                        }
                })
    }
}

export default setUserAuth;
