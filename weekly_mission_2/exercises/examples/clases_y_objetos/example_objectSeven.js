//Ejemplo setters para modificar los atributos de un objeto

class MC{

	constructor(name, mission){
	this.name = name
	this.mission = mission
	this.students = 0
	this.lives = 0
  }
get getStudents(){
  return this.students
 }
get getLives(){
   return this.lives 	
 }
set setStudents(students){
	this.students = students
 }
set setLives(lives){
	this.lives = lives
 }
}

console.log(" Ejemplo: setters para modificar atributos del objeto")
const mcNode = new MC("Carlo","NodeJS")

console.log(mcNode.getStudents) //0 default
console.log(mcNode.getLives) //0 default

//actualizamos los atributos por medio de los setters
mcNode.setStudents = 100
mcNode.setLives = 3

console.log(mcNode.getStudents)
console.log(mcNode.getLives)
