var datos = []
//READ
var CargarDatos = function(){
    datos = JSON.parse(localStorage.getItem("datos"))
    
    if(datos == null){
        datos = []
    }
    
    var misdatos = document.getElementById("misdatos")
    misdatos.innerHTML = ""


    for (let a = 0; a < datos.length; a++) {
       
       misdatos.innerHTML += `<tr>
                        <td>${datos[a].identificacion}</td>
                        <td>${datos[a].pnombre}</td>
                        <td>${datos[a].snombre}</td>
                        <td>${datos[a].papellido}</td>
                        <td>${datos[a].sapellido}</td>
                        <td>${datos[a].curso}</td>
                        <td>${datos[a].nivel}</td>
                        <td><button class="btn btn-danger" onclick="Eliminar(${datos[a].identificacion})"  >Eliminar</button></td>
                          <td><button class="btn btn-primary" onclick="identificarestudiante(${datos[a].identificacion})"  >Seleccionar</button></td>
                    </tr>` 
    }


}
//CREATE
var Guardar = function(){

    var identificacion = document.getElementById("identificacion").value.trim()
    var pnombre = document.getElementById("pnombre").value.trim()
    var snombre = document.getElementById("snombre").value.trim()
    var papellido = document.getElementById("papellido").value.trim()
    var sapellido = document.getElementById("sapellido").value.trim()
    var curso = document.getElementById("curso").value.trim()
    var nivel = document.getElementById("nivel").value.trim()

    var posicion = datos.findIndex((item) => item.identificacion == identificacion)
    if(posicion == -1){

        datos.push(
            {
                identificacion:identificacion,
                pnombre:pnombre,
                snombre:snombre,
                papellido:papellido,
                sapellido:sapellido,
                curso:curso,
                nivel:nivel,
        })
        localStorage.setItem("datos", JSON.stringify(datos) )
        Notiflix.Notify.success('Se almaceno el Estudiante Correctamente');
        CargarDatos()
        Limpiar()
    }
    else{
        Notiflix.Notify.warning('El Estudiante ya fue registrado Previamente');
    }

}

//DELETE
var Eliminar = function(id){
    console.log(id)
    var posicion = datos.findIndex((item) => item.identificacion == id)
    console.log(posicion)
    datos.splice(posicion,1)
    localStorage.setItem("datos", JSON.stringify(datos) )
    CargarDatos()
}

var identificarestudiante = function(id){
    var posicion = datos.findIndex((item) => item.identificacion == id)
    console.log(posicion)

    document.getElementById("identificacion").value = datos[posicion].identificacion
    document.getElementById("pnombre").value = datos[posicion].pnombre
    document.getElementById("snombre").value = datos[posicion].snombre
    document.getElementById("papellido").value = datos[posicion].papellido
    document.getElementById("sapellido").value = datos[posicion].sapellido
    document.getElementById("curso").value = datos[posicion].curso
    document.getElementById("nivel").value = datos[posicion].nivel
    document.getElementById('identificacion').disabled = true

}
//UPDATE
var Modificar = function(){
    var id = document.getElementById("identificacion").value.trim()
    var posicion = datos.findIndex((item) => item.identificacion == id)

    datos[posicion].pnombre = document.getElementById("pnombre").value.trim()
    datos[posicion].snombre = document.getElementById("snombre").value.trim()
    datos[posicion].papellido = document.getElementById("papellido").value.trim()
    datos[posicion].sapellido = document.getElementById("sapellido").value.trim()
    datos[posicion].curso = document.getElementById("curso").value.trim()
    datos[posicion].nivel = document.getElementById("nivel").value.trim()
    
    localStorage.setItem("datos", JSON.stringify(datos) )
    CargarDatos()

}

var Limpiar = function(){
    document.getElementById("identificacion").value = ""
    document.getElementById("pnombre").value = ""
    document.getElementById("snombre").value = ""
    document.getElementById("papellido").value = ""
    document.getElementById("sapellido").value = ""
    document.getElementById("curso").value = ""
    document.getElementById("nivel").value = "1"
}

var Nuevo = function(){
    Limpiar()
    document.getElementById('identificacion').disabled = false
}


CargarDatos()



