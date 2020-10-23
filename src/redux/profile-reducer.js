import { profileAPI, usersAPI } from "../api/api";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS ="SET_USER_STATUS";

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },

    ],
    newPostText: '',
    profile: null,
    status:''
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts,
                { id: 5, message: state.newPostText, likesCount: 0 }
                ]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return{
                ...state,
                status:action.status
            }



        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewPostTextActionCreator = (textPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: textPost
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export const setUserStatus = (status)=>({
    type:SET_USER_STATUS,
    status
})



                // THUNKS
export const getUserProfileProcess = (userId) => {
    return (dispatch) => {
        usersAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
};

export const setStatus=(userId)=>(dispatch)=>{
    profileAPI.getUserStatus(userId)
        .then(data=>{
            dispatch(setUserStatus(data))
        })
};
export const updateStatus=(status)=>(dispatch)=>{
    profileAPI.updateUserStatus(status)
        .then(response=>{
            debugger;
            dispatch(setUserStatus(status))
        })
}
export default profileReducer;
 