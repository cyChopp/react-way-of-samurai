

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'Blabla', likesCount: 11 },
                { id: 4, message: 'Dada', likesCount: 11 }
            ],
            newPostText: ''

        },

        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo Yo' },
                { id: 5, message: 'Yo Yo Yo' },
                { id: 6, message: 'Yo Yo Yo Yo' }
            ],
            newDialogMessage: '',

            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            newDialog: '',
        },

    },

    _callSubscriber(){
        console.log('changed');
    },
    getState() {
        return this._state;
    },
    /*  --START-- Main logic of Adding messages and dialogs */
    addDialogMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newDialogMessage
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newDialogMessage = '';
        this._callSubscriber(this._state);
    },

    updateNewDialogMessage(dialogText) {
        this._state.dialogsPage.newDialogMessage = dialogText;
        this._callSubscriber(this._state);
    },

    addMessage() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    updateNewPostChange(newText) {

        this._state.profilePage.newPostText = newText;
       this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
    /*  --END-- Main logic of Adding messages and dialogs */

};       

export default store;
window.store = store;
