import { createSelector } from "reselect";

//a
 const requestUsersSelector = (state)=>{
    return state.usersPage.users
}
export const requestUsers = createSelector(requestUsersSelector,
    (users)=>{
    return users.filter(u=>true);
})
//a
export const getPageSize = (state)=>{
    return  state.usersPage.pageSize
}
export const getTotalUsersCount = (state)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage
}
export const getIsFetching = (state)=>{
    return state.usersPage.isFetching
}
export const getButtonInProcess = (state)=>{
    return state.usersPage.buttonInProcess
}  