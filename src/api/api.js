import Axios from "axios";

const instance = Axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "b4bc9cef-6722-41c3-8d88-714f594b9250"
    }
});
export const usersAPI = {
 
    getUsers(currentPage, pageSize){
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data })
    },

    setUnfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => { return response.data })
    },
    setFollow(id){
        return instance.post(`follow/${id}`)
            .then(response => { return response.data })
    },
    userAuthenticator(){
        return instance.get(`auth/me`)
            .then(response=>{return response.data})
    },
    setUserProfile(userId){
        console.warn('Obsolete method.Use profileAPI');
            return profileAPI.setUserProfile(userId);
    }
}
export const profileAPI = {

    setUserProfile(userId){
        return instance.get(`profile/`+userId)
            .then(response=>{return response.data})
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response=>response.data)
    },
    updateUserStatus(status){
        return instance.put('profile/status',{status:status})
    }
}
