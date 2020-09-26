import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
   let dialogsElements =  props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
   let messagesElements = props.messages.map( m => <Message  message={m.message}/> );

    let addMessage = React.createRef();
   
    let writeMessage =()=>{
       props.writeMessage();
    };

    let onDialogChange = ()=>{

        let message = addMessage.current.value;
        props.onDialogChange(message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={addMessage} value={props.newDialogMessage} onChange={onDialogChange} placeholder="Enter your message!  "></textarea>
            </div>
            <div>
                <button onClick={writeMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;