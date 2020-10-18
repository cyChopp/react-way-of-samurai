import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const BUTTON_IN_PROCESS = "BUTTON_IN_PROCESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonInProcess: []
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

        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case TOGGLE_LOADER:
            return {
                ...state, isFetching: action.toggleFetch
            }
        case BUTTON_IN_PROCESS:
            return {
                ...state,
                buttonInProcess: action.isFetching ? [...state.buttonInProcess, action.userId] : state.buttonInProcess.filter(id => id != action.userId)
            }


        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleFetching = (toggleFetch) => ({ type: TOGGLE_LOADER, toggleFetch });
export const setButtonInProcess = (isFetching, userId) => ({ type: BUTTON_IN_PROCESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));

            })
    }
}

export const followProcess = (userId) => {
    return (dispatch) => {

        dispatch(setButtonInProcess(true, userId));

        usersAPI.setFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(setButtonInProcess(false, userId));
            })
    }
}
export const unfollowProcess = (userId) => {
    return (dispatch) => {

        dispatch(setButtonInProcess(true, userId));

        usersAPI.setUnfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(setButtonInProcess(false, userId));


            })
    }
}


export default usersReducer;
