
import React from 'react';
import userPhoto from '../../assets/images/userPhoto.png';
import s from './users.module.css';
import * as axios from 'axios'; // import all the stuff that there exports by the name of axios(it will pack all the exports to one object which name is axios)



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
                        <div className={s}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="user's Profile" />
                        </div>
                        <div>
                            {
                                u.followed
                                    ?
                                    <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { props.follow(u.id) }}>Follow</button>
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