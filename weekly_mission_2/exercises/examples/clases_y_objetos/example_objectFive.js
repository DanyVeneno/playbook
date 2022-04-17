//Example Attrs(attributes) with values by default

class Pr{
	constructor(repo,title,lines_changed){
	this.repo = repo
	this.title = title
	this.lines_changed = lines_changed
	this.status = "OPEN"
	this.dateCreated = new Date() 
//esto guardara la fecha actual en que se instancia el 
//objeto

  }
getInfo(){
return `This PR is in the repo:${this.repo}(status:${this.status}) and was created on ${this.dateCreated}`
}

}
console.log("Ejemplo: Atributos con valores por default")
const myPR = new Pr("LaunchX","MiprimerPullRequest",1)
console.log(myPR.getInfo())

const myPR2 = new Pr("LaunchX","MisegundoPullRequest",99)
console.log(myPR2.getInfo())  

