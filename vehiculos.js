var vehiculos = function () { }

var coche = function (matricula) {
    this.matricula = matricula;
    this.espacio = 1;

    this.getMatricula = function(){
        return this.matricula;
    }

    this.getEspacio = function(){
        return this.espacio;
    }
}

var camion = function (matricula) {
    this.matricula = matricula;
    this.espacio = 2;

    this.getMatricula = function(){
        return this.matricula;
    }

    this.getEspacio = function(){
        return this.espacio;
    }
}