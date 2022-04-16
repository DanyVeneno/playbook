//My ExerciseOne: Empty Object

const me = {}
console.log("This is my empty object")
console.log(me)


//My ExerciseTwo: Object with props

const meWhole = {
	name:"Daniel",
	lastname:"Vallejo",
	age: 43,
	isMexican:true
}
//const veryGoodPerson = Object.create(meWhole)

console.log("This is a person called:")
console.log(meWhole)


//My ExerciseThree: Object with different props

const meMultiverse = {

	name:"YehiiBhii",
	age: 6,
	nicknames:[

	"Yehii",
	"Bhii",
	"Veneno"
		
	],
	address:{
	zip_code:123456,
	street:"Cda. de las Colonias 84 Atizapan de Zaragoza",
	city:"Estado de México"
		
     }
} 
console.log("This is a object with different props")
console.log(meMultiverse)
console.log(meMultiverse.nicknames)
console.log(meMultiverse["address"])
console.log(meMultiverse.name)

//My ExerciseFour: Object with methods


const myPet = {

	name:"YehiiBhii",
           //This is a function keep as a prop
	heyySayHi: function(){
	   //this.name make point to  the prop's object
	console.log(`${this.name} wave to all his friends!!`)
	}

}

console.log("This is an object with methods")
myPet.heyySayHi()


//My ExerciseFive: An Object with methods that recives params

const myPet = {

        name:"YehiiBhii",
        sayHelloToHisFriends: function(yourFriends){
	console.log(`${this.name} say hello to ${yourFriends}`)
    }

}

console.log("This is an object with method that recives parms")
myPet.sayHelloToHisFriends("YehiiBhii")






























