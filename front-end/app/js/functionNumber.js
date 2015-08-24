/**
 * Created by jhasmanyquiroz on 8/14/2015.
 *//*
var FunctionNumber = function(){

    this.maxNumber = function(){
        maxNum(arguments, 0);
    };

    this.maxNumber = function(args, cont){
        //if (args.length )
    };

    this.minNumber = function(){

    };

    this.average = function(){
        return this.totalSum(args[0], 0);
    };

    this.totalSum = function(args, cont){
        if(args == undefined){
            return 0;
        }
        else{
            if ( args[0].length == cont)
                return 0;
            else
                return args[0] [cont] + this.totalSum(args[0], cont + 1);
        }
    };
};*/


/*
 Resuelto por el Trainer
 Debuguear F10 para siguiente y para entrar a otro metodo F11 y F8 para ir al otro breakpoint
 */

var Calculator = function(numbers){

    this.calculateOperation = function(){
        if(arguments == 0){
            throw "Cannot do the evaluation without params";
        }

        console.log('The Add is: ', this.getAdd(arguments));
        console.log('The May Number is: ', this.getMaxNumber(arguments));

//*******************************************************************************************************************
        //TAREA 24 AGOSTO
        //Calculator.getAdd(1, 2, 3);
        //Calculator.getMaxNumber(1, 2, 3);
//*******************************************************************************************************************
    };

    this.getAdd = function(numbers, pos){
        // PARAMETRO OPCIONAL
        if(pos===undefined){
            pos = numbers.length -1;
        }

        //if (!numbers == undefined){
            //SI UN VAR SE USA UNA SOLA VEZ, ES MEJOR NO USARLO
            //var currentVal = numbers[pos];

            if(pos ==0)
                //return currentVal;
                return numbers[pos];

            //return currentVal + this.getAdd(numbers);
            return numbers[pos] + this.getAdd(numbers, pos -1);
        //}else
        //    return 0;
    };

    this.getMaxNumber = function(numbers, pos, max){
        if(pos===undefined){
            pos = numbers.length -1;
        }

        if(max ===undefined || numbers[pos]>max){
            max = numbers[pos];
        }

        if(pos ==0){
            return max;
        }else{
            return this.getMaxNumber(numbers, pos -1, max);
        }
    };
};