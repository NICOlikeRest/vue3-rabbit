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


/**
 * @description:获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description 获取人气推荐
 * @param {*}
 * @returns {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot'
    })
}
// return httpInstance('home/hot', 'get', {})