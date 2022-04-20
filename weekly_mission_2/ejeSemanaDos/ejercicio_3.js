
const repo = {
 name: "LaunchX",
 author: "carlogilmar",
 language: "JavaScript",
 numberOfCommits: 100,
 stars: 199,
 forks: 299,
 issues_open: 10,
 issues_close: 10,
// getTotalIssues: function(){
  // return this.issues_open + this.issues_close
 //},
 //getGeneralInfo: function(){
  // return `This repository ${this.name} was created by ${this.author}`
 //}
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())



class repo{

constructor(name, author,language,numberOfCommits,stars,forks,issues_open,issues_close){
	this.name = name
	this.author = author
        this.language = language
	this.numberOfCommits = numberOfCommits
	this.stars = stars
	this.forks = forks	
	this.issues_open =  issues_open
	this.issues_close = issues_close

    }

}
