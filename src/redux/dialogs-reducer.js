const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },

    ],
    newDialogMessage: '',

    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
    ]
}

 const dialogsReducer = (state=initialState, action) => {

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

export default dialogsReducer;
