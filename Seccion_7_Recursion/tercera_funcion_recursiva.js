//Ejemplo Factorial

function factorial(num){
    let total =1;
    for (let i = num; i>1 ; i--){
        console.log(total);
        total=total*i;
        
    }
    return total;
}
console.log("Factorial con loop - Versión Iterativa ");
console.log(factorial(5));

/*Ahora abordamos esta función pero de manera recursiva*/

function factorial_recursiva(num){
    if (num ===1) return 1; // Recordar que el return administra el stack 
    return num * factorial_recursiva(num-1);

}

console.log("Factorial recursiva - Versión recursiva");
console.log(factorial_recursiva(5))