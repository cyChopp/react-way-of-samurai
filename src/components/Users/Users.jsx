
import React from 'react';
import * as axios from 'axios'; // import all the stuff that there exports by the name of axios(it will pack all the exports to one object which name is axios)
import userPhoto from '../../assets/images/userPhoto.png';
import s from './users.module.css'

class Users extends React.Component {
    getUsers = (props) => {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Add Users</button>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div className={s}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </div>
                            <div>
                                {
                                u.followed
                                    ?
                                    <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}

export default Users;