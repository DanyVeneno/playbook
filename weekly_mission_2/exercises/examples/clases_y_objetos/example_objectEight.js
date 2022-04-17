// Ejemplo: metodos static nos ayuda a escribir metodos en una clase que podemos
//usar sin necesidad de instanciar algun objeto

class ToolBar(){
	static getMostUsefulTools(){
	return ["CommandLine","git","textEditor"]
  }
}
console.log("metodo static")
//puedo llamar el metodo static directamente con el nombre de la clase
console.log(ToolBar.getMostUsefulTools())
//si intentamos instanciar un objeto no pódremos llamar este metodo static
//const toolbar = new Toolbar()
//console.log(toolbar.getMostUsefulTools()) // is not a function

/*
Herencia: nos permite relacionar clases entre si y rehusar sus componentes

*/
