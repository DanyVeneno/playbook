//Example: to validate elemnts from a list true/false

const really =[true, false,false,true]
//for USE  we try to check at least one of the elemnts is false
const reallyTrue= really.some((b) => b === false)
console.log("Example: Some of the elemnts are false:" + reallyTrue
)
