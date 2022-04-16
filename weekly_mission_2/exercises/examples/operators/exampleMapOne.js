//Example One: How can i use map  to run for each array element to create a new list
 /*
const modifiedArray = arr.map((element,index) => element);
*/
const numbersOne =[100,200,300,400,500];
const numbersOnes = numbersOne.map(function(num){

	return num * num

})
//also you can write the function as a fat arrow idon't know  what is it mean
//const numbersOnes = numbersOne.map((num) => num * num)
console.log("Example: printing element list square")
console.log(numbersOnes)
