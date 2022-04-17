// Example: overriding methods

class Explorers{


	constructor(name,username,mission){
	this.name = name
	this.username = username
	this.mission = mission
  }
	getNameAndUserName(){

	return `Explorer ${this.name}, username: ${this.username}`
  }
}

class Viajero extends Explorers {

	constructor(name,username,mission,cycle){


	super(name,username,mission) // SUPER nios ayudara a llamar el constructor padre
    
	this.cycle = cycle // Aagregamos este atributo de la clase viajero
//es exclusiva de esta clase y no de la clase padre
}
getGeneralInfo(){

	let nameAndUsername = this.getNameAndUsername()
//llamamos el metodo de la clase padre
//nameAndUsername es una variable de esta funcion no necesita usar 
//this para referenciarla.
	return `${nameAndUsername}, Ciclo ${this.cycle}`
 }

}
const viajero1 = new Viajero("Daniel","LaunchX","Node JS","Aabril 2022")
console.log("Ejemplo: Overriding methods")
console.log(viajero1)
console.log(viajero.getNameAndUsername()) //metodo de la clase padre
console.log(viajero1.getGeneralInfo()) // metodo de la clase hijo
