import React from 'react';
import { addDialogActionCreator, updateNewDialogTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
   let state = props.store.getState();

    let writeMessage =()=>{
        props.store.dispatch(addDialogActionCreator());
    };

    let onDialogChange = (message)=>{

        props.store.dispatch(updateNewDialogTextActionCreator(message));
    }
    return (
        <Dialogs onDialogChange={onDialogChange} 
                writeMessage={writeMessage} 
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                newDialogMessage={state.newDialogMessage}
                />
    )
};

export default DialogsContainer;