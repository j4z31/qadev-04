/**
 * Created by jhasmanyquiroz on 8/20/2015.
 */
var countWords = function(word){
    var words = word.split(" ");

    return words.length;
};

var getCurrentDay = function(){
    var today = new Date();
    var days = ['Sunday', 'Monday', 'Thursday', 'Friday', 'Saturday'];
    var hour = today.getHours();
    var strHour = hour >12? (hour - 12)+' PM' : (hour - 12)+' AM';

    console.log('Today is: ', days[today.getDay()]);
    console.log('Current time is: ', strHour, ':', today.getMinutes(), ':', today.getSeconds());
};

//^[0-9]{4}-(0|1)[0-9]-(0|1|2|3)[0-9]$
//var


var paragraph = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas";
console.log('Numbers of words is: ', countWords(paragraph));

getCurrentDay();