// Example: metods in objects
class Repo{
	constructor(name,author,language,stars){


	this.name = name
	this.author = author
	this.language = language  
	this.stars = stars
}
getInfo(){// es una funcion que ejecutara cualquier objeto instanciado d esta clase

	return `Repo ${this,name} has ${this.stars} stars` 
}
}
console.log("metodos y objectos")
const myRepository = new Repo("LaunchX","Dany Veneno","js",20)
console.log(myRepository.getInfo())

