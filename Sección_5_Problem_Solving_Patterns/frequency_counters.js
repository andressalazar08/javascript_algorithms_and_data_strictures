/*
Escriba una función llamada **same** que acepte dos arrays. 
La función debe retornar true si cada valor en el array 1 tiene un segundo valor en el array 2 que sea el cuadrado.
Tener en cuenta que la frecuencia de aparición de los valores debe ser la misma
*/

//SOLUCIÓN NAIVE
//Tiene un big O(n^2) por el método indexOf
function same(arr1, arr2){
    //Primero debemos verificar que las longitudes de las listas sean las mismas
    if (arr1.length !== arr2.length){
        return false
    }
    for (let i=0; i<arr1.length;i++){
        //Guardamos en una variable la busqueda que hacemos con indexof del valor al cuadrado
        let correctIndex = arr2.indexOf(arr1[i]**2) //Cuál es el indice del elemento iterado al cuadrado en el array 2
        //Lo anterior hace que este for sea de orden O(n^2)
        //Si el elemento no se encuentra debemos devolver falso
        if (correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1) //Remueve el elemento encontrado del arr2
    }
    return true 
}

console.log(same([1,2,3,2], [9,1,4,4]));

//SOLUCIÓN REMANUFACTURADA
//solucion O(3n) o simplificaco O(n) porque hay 3 for
function same_2(arr1, arr2){
    if(arr1.length!==arr2.length){
        return false
    }
    //creamos dos objetos vacíos
    //Nos van a indicar cuántas veces se encuentra un valor en un array
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1){
        frequencyCounter1[val]=(frequencyCounter1[val] || 0) + 1 //Si la clave existe sume 1 ,  si o existe creela y inicialice en 1
    }
    //Tener dos for separados O(2n) siempre es mejor que tener dos for anidados O(n^2)
    for (let val of arr1){
       frequencyCounter2[val]=(frequencyCounter2[val] || 0) + 1 //Si la clave existe sume 1 ,  si o existe creela y inicialice en 1
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter2){
        if(!(key**22 in frequencyCounter2)){
            return false
        }
        //Si la frecuencia con la que aparecen los números no es la misma se retorna false
        if(frequencyCounter2[key**2]!==frequencyCounter1[key]){
            return false
        }
    }
    
    return true
}


console.log("segunda funcion: " + same([1,2,3,2,5], [9,1,4,4,11]));
