import React from 'react';
import s from './FriendItem.module.css';

        // <span className=><img src={props.state.profilePic}/>{props.state.name}</span><br/>

let FriendItem = (props)=>{

    let friendElement =  
        props.state.map( d => <div><span><img src={d.profilePic}/>{d.name}</span></div>);



    return (
        <div className={s.friendsItem}>
        {friendElement}
        </div>
    );
}

export default FriendItem;