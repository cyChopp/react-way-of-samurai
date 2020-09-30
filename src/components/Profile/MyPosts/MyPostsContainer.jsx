// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }

};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = (props) => {


//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 }

//                 return (
//                     <MyPosts newPostText={state.profilePage.newPostText}
//                         posts={state.profilePage.posts}
//                         addPost={addPost}
//                         onPostChange={onPostChange} />
//                 )
//             }

//         }
//         </StoreContext.Consumer>
//     )
// }

//export default MyPostsContainer;