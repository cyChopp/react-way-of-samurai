import s from './ProfileInfo.module.css';
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>lookingForAJob : {props.profile.lookingForAJob ? "True": "False"}</div>
                <div>lookingForAJobDescription : {props.profile.lookingForAJobDescription && "не ищу, а дурачусь"}</div>


                <div>vk : <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>


            </div>
        </div>
    )
}

export default ProfileInfo;