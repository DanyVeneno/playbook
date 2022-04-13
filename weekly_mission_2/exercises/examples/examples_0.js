console.log("Objetos")

//Ejemplo 1: Crear in objeto
const myObject = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObject)


//Ejemplo 2: Crear un objeto con propiedades
const myObject2 = {
	name:"Daniel",
	age: 43
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObject2)

//Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {

	name:"YehiiBhii",
	age: 6,
	nicknames:[
	"Yehii"
	"Bhii"
	"Veneno"
		],
	address:{
	  zip_code:"124561",
	  street:"Cda. de las Colonias 84 Atizapan de Zaragoza",
	  city: "Estado de México"			
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])

//Ejemplo 4: Objeto con métodos
const pet = {

	name:"YehiiBhii",
	//Esta es una función que se guarda como propiedad
	sayHello: function(){
	//this.name hace referencia a la propiedad del objeto
	console.log(`${this.name} te saluda en español`)
	
  }

}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

//Ejemplo 5: Objeto con método que recibe parámetros
const pet = {

	name:"Woopa",
	sayHelloToMyPet: function(yourPet){
	console.log(`${this.name} say's hello to ${yourPet}`)
   }
}


console.log("Ejemplo 5: Objeto con método que recibe parametros")
myPet.sayHelloToMyPet("YehiiBhii")




























