import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postt={props.profilePage}
            posts={props.profilePage.posts} 
             newPostText={props.profilePage.newPostText} 
            updateNewPostChange={props.updateNewPostChange}
             addMessage={props.addMessage} />
        </div>
    )
}

export default Profile;