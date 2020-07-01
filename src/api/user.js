import request from '@/utils/request'

//登录
export function login(data) {
    return request('/auth/login', {
        method: 'post',
        data: data
    })
}
//登录（222）
export function login2(data) {
    return request('/auth/login', {
        method: 'get',
        params: data
    })
}
//获取当前登录用户信息
export function getUserInfo(data) {
    return request('/auth/me', {
        method: 'post',
        data: data
    })
}


//更新用户信息
export function updateUserInfo(data, id) {
    return request('/users/'+id+'/info', {
        method: 'post',
        data: data
    })
}
//修改用户
export function updateUserAvatar(data, id) {
    return request('/users/'+id+'/avatar', {
        method: 'post',
        data: data
    })
}


//获取某个用户信息
export function getInfoByUserId(id) {
    return request('/users/'+id+'/info', {
        method: 'get'
    })
}