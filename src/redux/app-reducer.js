import { userAuth } from "./user-auth";

const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {

    initialized:false
};

 const appReducer = (state=initialState, action) => {


    switch (action.type) {

        case SET_INITIALIZE:
            return{
                ...state,
                initialized:true
            }
        
        default:
            return state;
    }
};

export const initializeSuccess = ()=>({
    type:SET_INITIALIZE 
});

export const initializeApp = ()=>(dispatch)=>{ 

   let promise= dispatch(userAuth());
 

   Promise.all([promise])
   .then(()=>{
       dispatch(initializeSuccess());
   })

    
}



export default appReducer;
