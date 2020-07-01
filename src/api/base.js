import request from '@/utils/request'

//侧边栏
export function getSidebarInfo() {
    return request('/sidebar', {
        method: 'get',
    })
}
//圖片上傳
export function uploadImg(data, id) {
    return request('/upload/image', {
        method: 'post',
        data: data
    })
}