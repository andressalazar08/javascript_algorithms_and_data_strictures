
/*Supongamos que nos solicitan identificar los elementos impares de una lista

Esto se puede resolver de manera iterativa inicializando una lista vacía.

También se puede abordar con una función recursiva que verifique el primer valor de la lista
y asigne a una lista inicialmente vacía el dato verificado si cumple la condición. Podemos ir verificando la lista hasta
que no haya un dato que evaluar.

En este caso lo vamos a hacer con un enfoque llamado pure recursion

*/

//PURE RECURSION METHOD
function valores_pares(lista){
    //En este caso siempre la lista estará vacía cada que se llame la función
    resultado = []

    //definimos el caso base
    if (lista.length ===0){
        return resultado;
    }

    //Definimos la instrucción principal
    //Queremos verificar si el dato en la primera posición es par o impar
    if (lista[0] %2 !==0){
        resultado.push(lista[0])
    }

    //dado que la lista siempre se inicializa vacía al llamar la función
    //debemos usar concatenar para que guarde el valor capturado
    //cuando se concatena un vacío la lista no se altera
    //Actualizamos la lista de entrada
    resultado = resultado.concat(valores_pares(lista.slice(1))); // Elimina el dato en la posición 0 y actualiza la lista.

    //La función debe devolver la lista que estamos construyendo
    return resultado;
}

console.log(valores_pares([1,2,3,4,5]));

//La verificación es la siguiente
/*

valores_pares([1,2,3,4,5]):
    return [1].concat(valores_pares([2,3,4,5]):
                return [].concat(valores_pares([3,4,5]):
                          return [3].concat(valores_pares([4,5]):
                                    return [].concat(valores_pares[5]):
                                            return [5].concat(valores_pares[])
                                                    return resultado

resultado = [1].concat([]).concat([3]).concat([]).concat([5])
resultado = [1,3,5]

*/