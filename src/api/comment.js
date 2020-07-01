import request from '@/utils/request'

//点赞或取消
export function likeOrUnlike(data) {
    return request('/favors', {
        method: 'post',
        data: data,
        headers: { customError: true }
    })
}
//添加评论
export function addComment(data, articleId) {
    return request(`/articles/${articleId}/comments`, {
        method: 'post',
        data: data,
        headers: { customError: true }

    })
}
//删除评论
export function delComment(articleId, commentId) {
    return request(`/articles/${articleId}/comments/${commentId}`, {
        method: 'delete',
        headers: { customError: true }

    })
}
//获取子评论
export function getSubComment(data) {
    return request('/comments', {
        method: 'get',
        params: data
    })
}