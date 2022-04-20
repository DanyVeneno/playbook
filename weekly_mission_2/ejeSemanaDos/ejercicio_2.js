const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

//explorers.forEach(name => console.log(name))
//explorers.forEach(stack => console.log(stack))
//const explorers2 = explorers.map((stack,index) => stack);
//const explorers3 = explorers.filter((stack)=> explorers.includes ('js'))
//console.log(explorers3)
//const ciudad = explorers.find((city) => city);
//console.log(ciudad) 
//const exercises_completed = explorers.reduce((exercises_completed)=> 
//exercises_completed)

//const final = explorers.some((exercisesFinished)=> exercisesFinished === true)
//console.log("Aguien termino:" + final)
//const check = explorers.every((isFinished) => isFinished === isFinished)
//console.log(check)



