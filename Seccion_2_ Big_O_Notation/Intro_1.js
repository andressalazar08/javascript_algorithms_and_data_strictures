/* 
Write a function that calculates the sum of all numbers from 1 up to
(and including) some number n as input.

*/

function addUpTo(n){
    let total=0;
    for (let i=1; i<=n; i++){
        total +=i;
    }
    return total;
}

//console.log(addUpTo(6));
//console.log(addUpTo(5));

//Segunda forma

function addUpTo_2(n){
    return (n*(n+1))/2;
}



//console.log(addUpTo_2(6));
//console.log(addUpTo_2(5));


//Midiendo el desempeño

var time1 = performance.now()
addUpTo(1000000000);
var time2 = performance.now()
console.log(`Tiempo de ejecución algoritmo 1: ${(time2-time1)/1000} segundos.`)



var time3 = performance.now()
addUpTo_2(1000000000);
var time4 = performance.now()
console.log(`Tiempo de ejecución algoritmo 2: ${(time3-time4)/1000} segundos.`)