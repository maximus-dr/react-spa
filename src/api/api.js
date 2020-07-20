import Axios from "axios";


const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9972f5c2-570b-494b-93d6-c1efe7447820'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
                withCredentials: true
        })
            .then(response => response.data);
    }
};
