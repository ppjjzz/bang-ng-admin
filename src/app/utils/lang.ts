

/* JS语言工具类 */

/**
 *  深拷贝工具
 * @param obj 深拷贝对象或数组
 */
export const deepClone = (obj: object | any[] = {}) => {
   return JSON.parse(JSON.stringify(obj));
};

/**
 * 验证字段值是否为空
 * @param data 要验证的字段值
 * @returns {boolen} 为空返回false,不为空返回true
 */
export const isNotEmpty = (data: any) => {
    if (data === null || data === undefined) {
        return false;
    }
    if (typeof data === 'string' && data.trim() === '') {
        return false;
    }
    if (Array.isArray(data) && !data.length) {
        return false;
    }
    return true;
};