
/*Supongamos que nos solicitan identificar los elementos impares de una lista

Esto se puede resolver de manera iterativa inicializando una lista vacía.

También se puede abordar con una función recursiva que verifique el primer valor de la lista
y asigne a una lista inicialmente vacía el dato verificado si cumple la condición. Podemos ir verificando la lista hasta
que no haya un dato que evaluar.

*/

//Se define una función externa
function valores_impares(lista){
    let resultado =[]

    //Se define una función interna
    function interna(lista_interna){
        //Se indica el base case
        if (lista_interna.length===0){
            return;
        }

        //Se ejecuta la tarea principal
        //Si el primer elemento de la lista interna es impar se ingresa el dato a la lista que queremos construir,
        if (lista_interna[0]%2 !==0){
            resultado.push(lista_interna[0])
        }
        //Se actualiza el input y se vuelve a llamar la función
        interna(lista_interna.slice(1)) ; // esto hace que removamos el primer elemento de la lista

    }

    interna(lista);

    return resultado;
}

console.log(valores_impares([2,4,6,8,5,9,2,1,0]));