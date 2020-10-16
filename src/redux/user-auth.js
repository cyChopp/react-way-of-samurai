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

export default setUserAuth;
