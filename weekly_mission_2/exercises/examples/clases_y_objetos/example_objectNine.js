//Ejemplo Herencia entre dos clases
class Dev{
	constructor(name,mainLang,stack){
	this.name = name
	this.mainLang = mainLang
	this.stack = stack
  }
get getName(){
	return this.name
	}
}
console.log("Ejemplo: Herencia entre dos clases")
const danielDev = new Dev("Daniel","js",["node","vue","react"])
console.log(danielDev)

//se usa la palabra extends para indicar que heredaras las propiedades
//de la clase padre (Dev) en la clase definida

//podemos definir una clase vacia y rehusar todos los componentes de 
//la clase padre 

class LaunchXStudent extends Dev{
}
const danielLaunchXDev = new LaunchXStudent("Daniel","js",["node","vue","react"])
console.log(danielLaunchXDev)
console.log(danielLaunchXDev.getName)//getter de la clase padre rehuisada en la clase
//hija
