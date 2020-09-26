import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let  addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange= (text)=>{
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    return <MyPosts newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} addPost={addPost} onPostChange={onPostChange}/>
}

export default MyPostsContainer;