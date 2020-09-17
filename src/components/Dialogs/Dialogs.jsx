import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let addMessage = React.createRef();
   
    let writeMessage =()=>{
        let message = addMessage.current.value;
    };

    let dialogsElements =  props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={addMessage}></textarea>
            </div>
            <div>
                <button onClick={writeMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;