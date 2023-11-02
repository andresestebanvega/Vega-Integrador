function captura(){
    var precio=200
    var cantidad=document.getElementById("Cantidad").value;
    var seleccioncompra=document.getElementById("Option").value;
    if (cantidad==""){
        alert ("Debe colocar una cantidad de tickets a comprar");
        document.getElementById("Cantidad").focus();
    }
    else{
        switch (seleccioncompra) {
            case "Estudiante":
                resumen = cantidad * 0.2 * precio;
                document.getElementById("resultado").value = resumen;
                break;
            case "Trainee":
                resumen = cantidad * 0.5 * precio;
                document.getElementById("resultado").value = resumen;
                break;
            default:
                resumen = cantidad * 0.85 * precio;
                document.getElementById("resultado").value = resumen;
                break;
        }
    }
}

function borrar() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Apellido").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("Cantidad").value = "";
    document.getElementById("Email").value = "";
}