import request from '@/utils/request'

//标签列表
export function getTagsList(data) {
    return request('/tags', {
        method: 'get',
        params: data
    })
}
