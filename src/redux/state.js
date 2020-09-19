 let rerenderEntireTree = ()=>{
     console.log('changed');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
            { id: 3, message: 'Blabla', likesCount: 11 },
            { id: 4, message: 'Dada', likesCount: 11 }
        ],
        newPostText:''

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
        newDialogMessage:'',

        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ],
        newDialog:'',
    },

};

/*  --START-- Main logic of Adding messages and dialogs */
export let addDialogMessage = ()=>{
    let newMessage = {
        id:7,
        message:state.dialogsPage.newDialogMessage
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newDialogMessage='';
    rerenderEntireTree(state);
};

export let updateNewDialogMessage = (dialogText)=>{
    state.dialogsPage.newDialogMessage= dialogText;
    rerenderEntireTree(state);


}

export let addMessage =() =>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText="";
    rerenderEntireTree(state);
};

export let updateNewPostChange =(newText) =>{
    
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
};
/*  --END-- Main logic of Adding messages and dialogs */


export const subscribe = (observer)=>{
    rerenderEntireTree=observer;
}

export default state;
