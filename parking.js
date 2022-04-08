

var parking = function (limitePlazas) {
    this.plazas = [];
    this.limitePlazas = limitePlazas

    this.getLimtePlazas = function () {
        return this.limitePlazas;
    }

    this.introducirVehiculo = function (matricula, espacio) {
        for (i = 0; i < espacio; i++) {
            this.plazas.push(matricula);
        }
    }

    this.eliminarVehiculo = function (matricula) {
        var numeroEspacios = 1;
        for (i = 0; i < this.plazas.length; i++) {
            if (this.plazas[i] == matricula) {
                for (b = 0; b < 1; b++) {
                    if (this.plazas[i] == this.plazas[i + 1]) {
                        numeroEspacios = 2;
                    }
                }
                var posicionArray = i;
                this.plazas.splice(posicionArray, numeroEspacios);

            }
        }
    }

    this.comprobarPlazas = function (espacio) {
        if ((this.plazas.length + espacio) <= this.limitePlazas) {
            return true;
        } else {
            return false;
        }
    }

}
