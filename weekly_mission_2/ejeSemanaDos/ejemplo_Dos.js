const pullRequest = {
	title:"LaunchX",
	branchName:"master",
	dateCraeated:"15-04-22",
	status:"staged",
	repositoryNameAssociated:"missionNodeJs",

	getStatus:function(){


	return this.status

},
        getTitleAndAuthor: function(){

	return this.title + this.author

	}


}
console.log("El estado del PR es :" + pullRequest.status)
console.log("Datos repo: " + pullRequest.repositoryNameAssociated)
console.log("Titulo:" + pullRequest.title )

