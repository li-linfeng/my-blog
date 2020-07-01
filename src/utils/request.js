
import Cookie from "js-cookie";

import axios from "axios"


const request = axios.create({
    baseURL: '/api',
    withCredentials: true,
})


request.interceptors.request.use(
    config => {
        const user_token = Cookie.get('user_token')
        if (user_token) {
            config.headers.Authorization = `Bearer ${user_token}`
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
);


// // response拦截器, 处理response
// request.interceptors.response.use(
//     response => {
//         const refresh_token = response.headers.Authorization || response.headers.authorization;
//         if (refresh_token) {
//             const new_refresh_token = refresh_token.replace("Bearer",'')
//             Cookie.set('user_token', new_refresh_token)
//         }
//         if (response.data && response.data.data && response.data.status === 0) {
//             return response.data
//         } else {
//             Notification.error({message: response.data.msg})
//             // return new Promise(resolve => {
//             //
//             // })
//         }
//     },
//     error => {
//         if (!error.config.headers.customError) {
//             if (error.response && error.response.data && error.response.status === 401) {
//                 Notification.error({message: error.response.data.msg || error.response.statusText})
//                 store.dispatch('user/logout')
//             } else {
//                 Notification.error({message: error.response.data.message || error.response.data.msg || error.response.statusText})
//                 return Promise.reject(error)
//             }
//
//         } else {
//             return Promise.reject(error)
//         }
//
//         return new Promise(resolve => {
//
//         })
//     }
// );


export default request;