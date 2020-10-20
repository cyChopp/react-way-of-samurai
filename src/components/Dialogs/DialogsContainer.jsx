import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthContainer } from '../../hoc/withAuthRedirect';
import { addDialogActionCreator, updateNewDialogTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        dialogs  : state.dialogsPage.dialogs,
        messages :state.dialogsPage.messages,
        dialogsPage:state.dialogsPage,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthContainer)
    (Dialogs); 

// let withAuthRedirect = withAuthContainer(Dialogs)


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect);

// export default DialogsContainer;






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
