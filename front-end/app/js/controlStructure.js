/**
 * Created by jhasmanyquiroz on 8/21/2015.
 */
var getCapicua = function(limIn, limSup){
    var con = 0;
    var res = [];

    for(var num = limIn; num<=limSup; num++){
        if(isCapicua(num)){
            res[con] = num;
            con++
        }
    }

    return res;
};

var isCapicua = function(num){
    var numInv = num.toString();
    var arrInv = numInv.split('').reverse();

    if(num.toString() == arrInv.join(''))
        return true;
    else
        return false;
};

console.log("The numbers are: ", getCapicua(50, 200));


/*
Mostrar los n numeros pares [even] e impares [odd] usando Continue
 */

var getNumberOddAndEven = function(number){
    var resOdd = 'Numbers Odd: ';
    var resEven = 'Numbers Even: ';
    var cont = 1;
    while (cont <= number*2)
    {
        if(cont % 2 == 0){
            resEven += cont + ', ';
            cont ++;
            continue;
        }

        resOdd += cont + ', ';

        /*if(cont % 2 != 0){
            resOdd += cont + ', ';
            cont ++;
            continue;
        }*/
    }

    var res = resEven + ' - ' + resOdd;
    return res;
};

//console.log(getNumberOddAndEven(10));

/**
 * Trainner
 */
var getFirstCapicua = function(offset, limit){
    for(var i= offset; i<= limit; i++){
        if(isCapicua(i))
            return i;
    }
};

var isCapicua = function(number){
    var revNumber = parseInt(number.toString().split('').reverse().join(''));
    return number == revNumber;
};

console.log('First capicua is: ', getFirstCapicua(50, 100));