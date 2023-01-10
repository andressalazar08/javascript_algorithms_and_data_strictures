class Student{
    constructor(firstName, lastName, year){
        this.firstName=firstName;
        this.lastName=lastName;
        this.year=year;
        this.absence=0;
        this.score=[];
    }
    /*Metodos de instancia*/
    fullName(){
        return `Tu nombre completo es: ${this.firstName} ${this.lastName}`;
    }

    markLate(){
        this.absence+=1;
        return `${this.firstName} ${this.lastName} has been late ${this.absence} times`
    }

    /*Métodos de instancia que toman argumentos*/
    addScore(score){
        this.score.push(score);
        return this.score;
    }

    calculateAverage(){
        let sum = this.score.reduce(function(a,b){return a+b;})
        return sum/this.score.length;
    }

}

let firstStudent = new Student("A", "Salazar", 2);
let secondStudent = new Student("F", "Ramos", 4);

console.log(firstStudent.fullName());
console.log(firstStudent.absence);

console.log(firstStudent.markLate());
console.log(firstStudent.absence);

console.log(firstStudent.score);
console.log(firstStudent.addScore(92));
console.log(firstStudent.score);
console.log(firstStudent.score);
console.log(firstStudent.addScore(50));
console.log(firstStudent.calculateAverage());