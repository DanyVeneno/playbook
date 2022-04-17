//Example getters para acceder a los atributos del objeto

class Ajolonauta{

	constructor(name,age,stack){
	this.name = name
	this.age = age
	this.stack = stack
	this.exercises_completed = 0
	this.exercises_todo = 99
}
//podemos acceder a los atriburos de esta classe
get getExercisesCompleted(){
	return this.exercises_completed
}
}
console.log("Elemplo: getters")
const woopa = new Ajolonauta("Woopa",1,[])
console.log(woopa.getExercisesCompleted)
