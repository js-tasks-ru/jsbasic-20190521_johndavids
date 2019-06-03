/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone (obj) {

    let clons = {};

    for(const key in obj){

        if(typeof obj[key] === "object" && obj[key] !== null){
            clons[key] = clone(obj[key]);
        }else{
            clons[key] = obj[key];
        }
    }
    return clons;
    
}