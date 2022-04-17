//Example: 
const explorers = [


	{name:'Exp-a', age:20},
	{name:'Exp-b', age:30},
	{name:'Exp-c', age:40},
	{name:'Exp-d', age:50}
]

explorers.sort((a,b)=>{ // we can invokea functi

	if(a.age < b.age)return -1
	if(a.age > b.age)return 1
	return 0
})
console.log("Example list fixed by age")
console.log(explorers)//sorted ascending
