import  httpInstance from '@/utils/http'


/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */

export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}