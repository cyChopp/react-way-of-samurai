const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState ={
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },

    ],
    newPostText: ''

};
 const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = JSON.parse(JSON.stringify(state));
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = JSON.parse(JSON.stringify(state));

            stateCopy.newPostText = action.newText;
            return stateCopy;
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
export default profileReducer;
