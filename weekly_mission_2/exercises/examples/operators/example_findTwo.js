//Example Using find on an elements

const nameD = [


        {name:'D', letter:10},
        {name:'A', letter:20},
        {name:'N', letter:30},
        {name:'I', letter:40},
        {name:'E', letter:50},
        {name:'L', letter:60}
]
const nameDD = nameD.find((explorer)=>explorer.letter > 25)
console.log("Example: letter explorer:" + nameDD.name)
