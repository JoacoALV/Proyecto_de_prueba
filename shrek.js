// Debo crear las clases para la creación de misiones

class Mision{
    constructor(nombredelmandatario, tipo, parametro) {
    this._nombredelmandatario = nombredelmandatario;
    this.tipo = tipo;
    this._parametro = parametro;
    }

    Esdificil() {
        return this.nombredelmandatario.charat(0) === "G"
    }

    Puntos() {
        return 0;
    }
}

//Clases de misiones

class LiberarPrincesa extends Mision{
EsDificil() {
    return super.esDificil() && (this.detalle === 4 || this.detalle === 5);
}
puntos() {
    return this.detalle * 2;
}
}

class ObjetoMagico extends Mision{
 esDificil() {
        return super.esDificil() && this.detalle > 100;
    }
 
 puntos() {
        return this.detalle <= 50 ? 10 : 5;
    }
}

// Creo una clase para hacer una lista donde sumar misiones. Buscando al sumar una a la lista entre las misiones predeterminadas. Creo un protegaonista.

class Shrek {
    constructor() {
        this.misiones = [];
    }
 
    agregarMision(mision) {
        this.misiones.push(mision);
    }
 
    misionesDificiles() {
        return this.misiones.filter(mision => mision.esDificil());
    }
 
    totalPuntosRecompensa() {
        return this.misionesDificiles().reduce((total, mision) => total + mision.puntos(), 0);
    }
}

const shrek = new Shrek();
shrek.agregarMision(new LiberarPrincesa("Gord Farquaad","LiberarPrincesa", 4));
shrek.agregarMision(new ObjetoMagico("Gandalf","ObjetoMagico", 40));
 
//Imprimo resultados.
 
console.log("Misiones Dificiles:", shrek.misionesDificiles());
console.log("Total de puntos de recompensa:", shrek.totalPuntosRecompensa());
