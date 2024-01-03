import  httpInstance from '@/utils/http'


/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */

export function getBannerAPI(paras = {}) {
    const { distributionSite = '1'} = paras 
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
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


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}