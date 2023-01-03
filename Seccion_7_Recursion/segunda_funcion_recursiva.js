function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1);
}

console.log(sumRange(4))
/* En ejecución sería:
sumRange(4):
    return 4 + sumRange(3):
                return 3 + sumRange(2):
                            return 2 + sumRange(1):
                                        //Este es el caso base
                                        return 1

Ahora devolviendonos tenemos:

sumRange(4):
    return 4 + return 3 + return 2 + return 1

o de otra forma
sumRange(4):
    4 + 3 + 2 + 1

>>10
    


*/