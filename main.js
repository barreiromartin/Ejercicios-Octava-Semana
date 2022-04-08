/*
Las indicaciones para la creación del programa es:
    - Debe contener un menú con las siguientes opciones y funcionalidades:

    - Introducir
        - Coche (ocupa 1 espacio)
        - Camión (ocupa 2 espacios)

    - Salida
        - Elimina uno de los vehículos y libera el espacio que ocupaba

    - Comprobar
        - Permite observar cómo de lleno está el parking y quien
        ocupa que plaza
        
    - Salir del programa
        - Permite terminar la ejecución del programa
*/
function __main__() {
    var parkings = new parking(10);

    var coche_1 = new coche(12);
    var coche_2 = new camion(15);
    var coche_3 = new coche(14);
    var coche_4 = new coche(13);

    console.log(parkings);
    console.log(coche_1);
    parkings.introducirVehiculo(coche_1.matricula, coche_1.espacio);
    parkings.introducirVehiculo(coche_2.matricula, coche_2.espacio);
    parkings.introducirVehiculo(coche_3.matricula, coche_3.espacio);
    parkings.introducirVehiculo(coche_4.matricula, coche_4.espacio);
    salidaConsola(parkings.plazas)

    salidaConsola(parkings.plazas)
    continuar = true;

    do {
        var opcion = parseInt(entradaConsola("PARKING AUTOMÁTICO\n--------------------------\n1 - Entrada Vehículo.\n2 - Salida Vehículo.\n3 - Mostrar Coches.\n4 - Salir."));


        switch (opcion) {
            case 1:
                tipoVehiculo = parseInt(entradaConsola("PARKING AUTOMÁTICO\n--------------------------\n1 - Coche.\n2 - Camión."));
                if (parkings.comprobarPlazas(tipoVehiculo)) {
                    if (tipoVehiculo == 1) {
                        matricula = parseInt(entradaConsola("PARKING AUTOMÁTICO\n--------------------------\nMatrícula del Vehículo:"));
                        aux_coche = new coche(matricula);
                        parkings.introducirVehiculo(aux_coche.matricula, aux_coche.espacio);
                        alert("Entrada exitosa.");

                    } else if (tipoVehiculo == 2) {
                        matricula = parseInt(entradaConsola("PARKING AUTOMÁTICO\n--------------------------\nMatrícula del Camión:"));
                        aux_coche = new camion(matricula);
                        parkings.introducirVehiculo(aux_coche.matricula, aux_coche.espacio);
                        alert("Entrada exitosa.");
                    }
                } else {
                    alert("No hay espacio en el parking.")
                }
                break;


            case 2://Salida parking
                matriculaSalida = prompt("Escribe la  matrícula del vehículo:");
                parkings.eliminarVehiculo(matriculaSalida);
                alert("Salida exitosa.");
                break;

            case 3: //Mostrar Vehiculos
                vehiculosParking = "PARKING AUTOMÁTICO\n--------------------------\nPlazas:   Matrículas:";
                for (i = 0; i < parkings.plazas.length; i++) {
                    vehiculosParking += "\nPlaza " + i + ":   " + parkings.plazas[i];
                }
                alert(vehiculosParking);
                break;
            case 4:
                alert("Cerrando programa.");
                continuar = false;
                break;


        }





    } while (continuar)
    salidaConsola(parkings.plazas)


}


__main__();