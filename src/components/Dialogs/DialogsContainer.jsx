import React from 'react';
import { connect } from 'react-redux';
import { addDialogActionCreator, updateNewDialogTextActionCreator } from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';


debugger;
let mapStateToProps = (state) => {
    return {
        dialogs  : state.dialogsPage.dialogs,
        messages :state.dialogsPage.messages,
        dialogsPage:state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        writeMessage: () => {
            dispatch(addDialogActionCreator());
        },
        onDialogChange: (message) => {
            dispatch(updateNewDialogTextActionCreator(message));
        }
    }

};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;






// let state = store.getState();

// let writeMessage = () => {
//     store.dispatch(addDialogActionCreator());
// };

// let onDialogChange = (message) => {

//     store.dispatch(updateNewDialogTextActionCreator(message));
// }
// return (
//     <Dialogs onDialogChange={onDialogChange}
//         writeMessage={writeMessage}
//         newDialogMessage={state.dialogsPage.newDialogMessage}
//     />)
