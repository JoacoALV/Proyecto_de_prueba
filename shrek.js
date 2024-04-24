// Debo crear las clases para la creación de misiones

class Mision{
    constructor(nombredelmandatario, nombre, tipo, parametro) {
    this._nombredelmandatario = nombredelmandatario;
    this._nombre = nombre;
    this.tipo = tipo;
    this._parametro = parametro;
    }
}

//Defino la dificultad. Si empieza con "G", busco excepciones y si no las tiene es "True", pero si no empieza con "G" directamente es "False"

Esdificil() {
    if(this.nombredelmandatario.charat(0) === "G") {
        if(
            (this.tipo === "liberarprincesa" && this.parametro === 4) ||
            (this.tipo === "liberarprincesa" && this.parametro === 5) ||
            (this.tipo === "objetomagico" && this.parametro >= 100)
        ) {
            return true;
        }
    }
    return false;
}

// Los return no serían innecesarios? Yes
// || (or)
// Utilizar === verifica que los valores sean identicos y del mismo tipo de datos


// Creo las misiones como variables, ya que tendrán el mismo nombre pero varia su composición (sus parametros)

let mision1 = new Mision("Lord Farquaad", "Rescatar a Fiona", "liberarprincesa", "5")
let mision2 = new Mision("Gandalf", "Encontrar la piedra folosofal", "objetomagico", "40")

// Como hago una lista?

// Calcular recompensa

calcularpuntos() {
    if(this._tipo === "liberarprincesa") {
        return this._parametro * 2;
    }
    if(this._tipo === "objetomagico" && this._parametro < 50) {
        return "10";
    }
    if(this._tipo === "objetomagico" && this._parametro > 50) {
        return "5";
    }
    return "Revisa que te mandaste LA cagada"
}

// console.log porque no return
