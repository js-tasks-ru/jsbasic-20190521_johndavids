/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

function isEmpty (obj) {
    let count = 0;
    for(const element in obj){
        count++;
    }

    return (count === 0) ?  true : false;


}