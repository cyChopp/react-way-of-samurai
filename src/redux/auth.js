
const SET_AUTH_USER = "SET_AUTH_USER";


let initialState={
    userId:null,
    login:null,
    email:null,
    isLogged:false
};

const authReducer =(state=initialState,action)=>{

    switch(action.type){

        case SET_AUTH_USER:
            return{
                ...state,
                ...action.data,
                isLogged:true
            }
            default:
                return state;
    }
}


export const setAuthUser =(userId,login,email)=>({
    type:SET_AUTH_USER,
    data:{
        userId,
        login,
        email
    }
})

export default authReducer;