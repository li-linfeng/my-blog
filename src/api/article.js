import request from '@/utils/request'

//文章列表
export function getArticleList(data) {
    return request('/articles', {
        method: 'get',
        params: data
    })
}
// //获取某个用户的文章
// export function getMyArticleList(data,id) {
//     return request(`/user/${id}/articles`, {
//         method: 'get',
//         params: data
//     })
// }

//文章详情
export function getArticleDetail(data) {
    return request('/articles/' + data.id, {
        method: 'get',
        params:data
    })
}
//新增文章(保存或发布)
export function saveOrPublish(data) {
    return request('/articles', {
        method: 'post',
        data
    })
}

export function edit(data,id) {
    return request('/articles/' + id, {
        method: 'put',
        data
    })
}

export function destroy(id) {
    return request('/articles/' + id, {
        method: 'delete',
    })
}