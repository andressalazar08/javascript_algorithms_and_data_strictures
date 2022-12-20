/*
// Escribe una función que tome un string y retorne la cuenta de cada character en la cadena

//a->Comienza con ejemplos sencillos
charCount("aaaa"); //{a:4}
charCount("hello"); //{h:1, e:1, l:2, o:1}

//b->Continua con ejemplos más complejos
charCount("my phone number is 128563")
/* Tengo que preguntas si los espacios cuentan?, los caracteres especiales cuentan?, los números cuentan?*/
/*charCount("Hello hi")
/*Tengo que diferenciar entre letras mayúsculas y minúsculas?*/

//c->Explora ejemplos con entradas vacías
/*charCount() //esto es válido como entrada?
charCount("") //esto es válido como entrada?

//d-> Explora ejemplos con entradas inválidas
charCount(1325)//esto es una entrada inválida?
charCount(null)//esto es una entrada inválida?
charCount(true)//esto es una entrada inválida?

//PASO 3- DESGLOSA EL PROBLEMA

function charCount(str){
    //inicializa el objeto que devolveras al final
    //has un bucle sobre el string, for each character...
        //si el char es un numero || lentra && es una clave actual del objeto, adiciona 1 a la cuenta
        //si el char es un numero || lentra && NO es una clave actual del objeto, adiciona la clave y pon el valor en 1
        //si el char es algo distinto (space, period, etc..) no hagas nada
    //return el objeto

}
*/

//PASO 4- RESUELVE / SIMPLIFICA

function charCount(str){
    //inicializa el objeto que devolveras al final
    var result={};
    //has un bucle sobre el string, for each character...
    for (var i=0; i<str.length; i++){
        //si el char es un numero || lentra && es una clave actual del objeto, adiciona 1 a la cuenta
        var char = str[i].toLowerCase()
        if (result[char]>0){
            result[char]++;
        }
        //si el char es un numero || lentra && NO es una clave actual del objeto, adiciona la clave y pon el valor en 1
        else{
            result[char]=1; //Si no se encuentra se inicializa en 1
        };
        
        //si el char es algo distinto (space, period, etc..) no hagas nada

    }
        
    //return el objeto
    return result;
}

console.log(charCount("Andres"));

console.log(charCount("Hello"));

console.log(charCount("Hello and hi!"));


//PASO 5- RETOMA / REMANUFACTURA

function charCount_2(str){
    //inicializa el objeto que devolveras al final
    var result={};
    //has un bucle sobre el string, for each character...
    for (var i=0; i<str.length; i++){
        //si el char es un numero || lentra && es una clave actual del objeto, adiciona 1 a la cuenta
        var char = str[i].toLowerCase()
        if (/[a-z0-9]/.test(char)){
            if(result[char]>0){
                result[char]++;
            }//si el char es un numero || lentra && NO es una clave actual del objeto, adiciona la clave y pon el valor en 1
            else{
                result[char]=1; //Si no se encuentra se inicializa en 1
            };    
            
        }
        
        //si el char es algo distinto (space, period, etc..) no hagas nada

    }
        
    //return el objeto
    return result;
}

console.log(charCount_2("Andres"));

console.log(charCount_2("Hello"));

console.log(charCount_2("Hello and hi!"));