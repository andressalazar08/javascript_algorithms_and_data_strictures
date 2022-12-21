//Anagram

//Es un caso especial de frequency counter

//Para este ehemplo nos enfocamos en lwer strings
//O(2n) por tener dos loops
function validAnagram(first, second){
    //Si la longitud de los textos no es la misma de una vez debe devolver false
    if (first.length !== second.length){
        return false;
    }

    //Inicializamos un objeto vacio para almacenar la cantidad de veces que aparece una letra
    const lookup = {}

    for(let valor of first){
        let letra = first[valor];
        //Si la letra existe, incremente el contados, de lo contrario set to 1
        lookup[letra] ? lookup[letra] +=1 : lookup[letra]=1;
    }

    for(let valor2 of second){
        let letter2 = second[valor2];
        //
        if(!lookup[letter2]){
            return false;
        }else{
            lookup[letter2]-=1;
        }
    }

    return true;
}

console.log(validAnagram('anagram', 'garanam'));