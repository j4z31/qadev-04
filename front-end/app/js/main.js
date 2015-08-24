/**
 * Created by jhasmanyquiroz on 8/10/2015.
 */
var sayHello = function () {
    //Ctrl + alt + v
    var message = "Hi New World ...";
    console.log(message);

    // JUEVES 13 AGOSTO
    // Las lineas 6 y 7 solo se ejecutan cuando el metodo es llamado
    //sayHello

    //Para debaguear recomendable poner en la primera linea de la funcion
    // en este caso 6

    //Al crear variables, estos se convierten en propiedades de Window
    // Determinar el tipo de una propiedad o funcion: Window.console [enter]
};

var sayHelloParameter = function(name){
    var message = "Mi nombre es: " + name;
    console.log(message);
};

// Creacion de objetos
    // pepe = new Object();
    //luis = {} -- tipo json
    // Person = function(){}
/**
 * Class Description ...
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name, age){
    this.name = name;
    this.age = age;

    /**
     * Function to see the name of person
     */
    this.sayHello = function(){
        console.log("Hello, my name is: " + this.name);
    };
}

/**
 * Viernes 14 agosto
 * a las funciones se les puede enviar o no varios argumentos
 * sayHello(), sayHello('Paco', 123), sayHello(123)
 * y aun siguen funcionando
 **/

/**
 * VARIABLES AND CONTEXT
 **/

    //CONTEXTOS
var age = '';
function calculateAge(bornYear){
    var age = 2015 - bornYear;
    return age;
}

var age = '';
function calculateAge(bornYear){
    // Toda variable que no lleva var
    // es definido x defecto de forma global
    // del objeto Window
    age = 2015 - bornYear;
    return age;

    // Condejo siempre usar VAR
}