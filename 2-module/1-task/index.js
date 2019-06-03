/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {

    let clons = {};


    for (let key in obj) {
        clons[key] = obj[key];
    }
    return obj;

}