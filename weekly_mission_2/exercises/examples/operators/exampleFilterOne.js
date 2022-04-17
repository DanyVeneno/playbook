//Example FilterOne: How to use filter in elements list
const makeMusic=['Guitar','Bass','Drums','Harmonic']
const instrumentsM = makeMusic.filter((instrument) => //this is a function
	instrument.includes('tar') // keyword to filter only this specific word "tar"
)
console.log("This shows specific elements from a list")
console.log(instrumentsM)

//check this
//const makeMusic=['Guitar','Bass','Drums','Harmonic']
//const instrumentsContainAr = makeMusic.filter((instrument) => instrument.endsWith('ar'))
//console.log("this show word that ends with ar")
//console.log(instrumentsContainAr)
