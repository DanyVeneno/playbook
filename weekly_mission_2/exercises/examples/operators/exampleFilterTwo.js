//Example: conditional list filter
const dataN =[

	{name:'D', letter:01},
        {name:'A', letter:02},
        {name:'N', letter:03},
        {name:'I', letter:04},
        {name:'E', letter:05},
        {name:'L', letter:06}

]
const dataNtwo = dataN.filter((letter) => letter.letter > 03)
console.log("Example: showing by letter")
console.log(dataNTwo)
