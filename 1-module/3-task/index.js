'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {

    let resArr = [];
    let num = str.split(/[\s,]+/);
    let result = [];

    for (let numb in num){

        if (!isNaN(parseFloat(num[numb]))){

            //resobj[count] = parseFloat(num[numb]);
            resArr.push(parseFloat(num[numb]));

        }

    }

    result['min'] = Math.min.apply( null, resArr );
    result['max'] = Math.max.apply( null, resArr );

    return result;

}