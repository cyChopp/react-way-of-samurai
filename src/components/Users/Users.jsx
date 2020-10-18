
import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png';
import s from './users.module.css';
import * as axios from 'axios'; // import all the stuff that there exports by the name of axios(it will pack all the exports to one object which name is axios)
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user's Profile" />
                        </NavLink>
                        <div>
                            {
                        u.followed ? 
                                    <button disabled={props.buttonInProcess.some(id=>id === u.id)} onClick={() => {
                                        props.setButtonInProcess(true,u.id);
                                        usersAPI.setUnfollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.setButtonInProcess(false,u.id);


                                            })}}>Unfollow
                                    </button>
                                    :
                                    <button disabled={props.buttonInProcess.some(id=>id === u.id)} onClick={() => {
                                          props.setButtonInProcess(true,u.id);

                                        usersAPI.setFollow(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                             props.setButtonInProcess(false,u.id);

                                            })}}>Follow
                                    </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;