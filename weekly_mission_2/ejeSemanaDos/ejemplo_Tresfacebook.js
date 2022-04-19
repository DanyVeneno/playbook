const user ={

        name:"Daniel",
        post:"studio digital",
        biography:"Productos y servicios",
        getGeneralInfo: function(){
                return `This Fanpage belongs to ${this.name} to offer ${this.biography}`
        }
}
console.log("Esta fanpage tiene lacategoria de :" + user.post)
console.log(user.getGeneralInfo())

