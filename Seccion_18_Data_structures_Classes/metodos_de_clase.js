/*
Nos ayuda a incluir métodos a las clases
pero no necesariamente a instancias individules

en este caso se utiliza la palabra reservada static antes del nombre del método
*/
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

    /*Médodos de clase*/
    static enrolarStudents(...students){
        //Por ejemplo enviarle un email a todas las instancias de la clase Student
        return "Enviando email a todas las instancias de la clase Student"
    }
}

let firstStudent = new Student("A", "Salazar", 2);
let secondStudent = new Student("F", "Ramos", 4);

//Podemos llamar al método de clase con las instancias
//se aplica directamente sobre la clase.
console.log(Student.enrolarStudents([firstStudent, secondStudent]))


/*OTRO ejemplo para utilizar un método de clase*/
/*Por ejemplo hayar la distancia entre dos puntos*/

class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    //Método de clase para hayar la distancia entre dos puntos
    //a y b serán a su vez instancias de la clase
    static distancia(a,b){
        const dx = a.x - b.x; //calcula la distancia en el eje x
        const dy = a.y - b.y; //calcula la distancia en el eje x

        //Calcula la raiz cuadrada de la suma de los elementos al cuadrado
        return Math.hypot(dx,dy);
    }
}

let p1 = new Punto(4,3);
let p2 = new Punto(5,10);


console.log(Punto.distancia(p1,p2));