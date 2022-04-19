const Issue = {


	title:"MissionNodeJS",
	repository:"weekly_mission_2",
	status:"staged",
	numberOfComments:"20",
	labels:"Learning",
	author:"Daniel",
	dateCreated:"20-06-22",
	lastUpdated:"18-07-22",
	getStatus:function(){

	return this.status
    },
	getTitleAndAuthor:function(){
	return this.title + this.author
  }

}
console.log("El Estado de este Issue:" + Issue.status)
console.log("El titulo y el author son:" + Issue.title   +  Issue.author)

