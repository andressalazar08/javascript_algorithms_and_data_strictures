let instructor={
    firstName:"Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
console.log(Object.keys(instructor))
console.log(Object.entries(instructor))
console.log(instructor.hasOwnProperty("firstName"));

//arrays
let names=["Michael", "Melissa", "Andrea"];

//Remover
names.pop()//este método es más rápido
names.shift()//Este método es más lento

//Añadir
names.push() //este método es más rápido
names.unshift() //este método es más lento