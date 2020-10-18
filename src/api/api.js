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
    }
}



