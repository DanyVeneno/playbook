export default class Explorer{

	constructor(name, username, mission){

	this.name = name
        this.username = name
	this.mission = mission
    }

	getNameAndUsername(){

	return `Explorer ${this.name}, username:${this.username}`
     }

}
