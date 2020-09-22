const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";



export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG:
            let newMessage = {
                id: 7,
                message: state.newDialogMessage
            };
            state.messages.push(newMessage);
            state.newDialogMessage = '';
            return state;

        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogMessage = action.dialogText;
            return state;

        default:
            return state;
    }
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });
export const updateNewDialogTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_DIALOG_TEXT,
        dialogText: message
    }
};