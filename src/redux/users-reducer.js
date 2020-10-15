const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_LOADER="TOGGLE_LOADER";


let initialState = {
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false

};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }

        case UN_FOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false 
                        }
                    }
                    return u;
                })
            }
    
        case SET_USERS:{
            return{
                ...state,users:action.users
            }
        }
            case SET_CURRENT_PAGE:{
                return{
                    ...state,currentPage:action.currentPage
                }
            }
        case SET_TOTAL_USERS_COUNT:{
            return{
                ...state,totalUsersCount:action.count
            }
        }
        case TOGGLE_LOADER:
            return{
                ...state,isFetching:action.toggleFetch
            }

        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW ,userId});
export const unfollow = (userId) => ({ type: UN_FOLLOW ,userId});
export const setUsers = (users) => ({ type: SET_USERS ,users});
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE,currentPage});
export const setUsersTotalCount = (totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount});
export const toggleFetching = (toggleFetch)=>({type:TOGGLE_LOADER ,toggleFetch});

export default usersReducer;
