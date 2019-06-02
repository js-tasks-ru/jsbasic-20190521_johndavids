'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {

    let count = 0;
    let resobj = {};
    let num = str.split(' ');

    for (let numb in num){

        if (!isNaN(parseFloat(num[numb]))){

            resobj[count] = parseFloat(num[numb]);

            count++;

        }

    }

    let arr = Object.values(resobj);

    let result = [];

    result['min'] = Math.min.apply( null, arr );
    result['max'] = Math.max.apply( null, arr );

    return result;

}

