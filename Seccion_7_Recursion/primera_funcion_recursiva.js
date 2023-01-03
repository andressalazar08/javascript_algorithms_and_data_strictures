function conteoRegresivo(num){
    //base case
    if (num <=0){
        console.log("Hemos terminado!");
        return; //Hay que indicarle un return para que retire la función del stack
    }
    console.log(num);
    num=num-1;
    console.log(`Entrada para la siguiente llamada ${num}`);
    conteoRegresivo(num);
}


conteoRegresivo(5)