import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <span className={s.profilePicture}> <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
                <NavLink to={path}>{props.name}</NavLink>
            </span>
        </div>
    )
}


export default DialogItem;