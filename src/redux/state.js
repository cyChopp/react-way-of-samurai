import { rerenderEntireTree } from "../render";


let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 11 },
            { id: 3, message: 'Blabla', likesCount: 11 },
            { id: 4, message: 'Dada', likesCount: 11 }
        ]

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
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrew' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ]
    },

    friendsNavPage: {
        friendsItem: [
            { id: 1, name: 'Dimych', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
            { id: 2, name: 'Andrew', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
            { id: 3, name: 'Sveta', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
            { id: 4, name: 'Sveta', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
            { id: 5, name: 'Sveta', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
            { id: 6, name: 'Sveta', profilePic: 'https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' },
        ]
    }
};

export let addMessage =(postMessage) =>{
    let newPost={
        id:5,
        message:postMessage,
        likesCount:0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};


export default state;
