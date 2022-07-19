//-------------- Bienvenida --------------//
/*
let usuario = prompt('Bienvenido al simulador de medicamentos de HP FARMA, Gracias por elegirnos! Por favor ingrese su nombre');
if (usuario == null) {
    localStorage.setItem('');
} else {
    alert('Hola ' + usuario + ', a continuacion podras seleccionar los medicamentos en stock con sus precios actualizados');
}

//-------------- Stock de medicamentos disponibles para la consulta --------------//
class Medicamento {
    constructor(nombre, precio, detalle, item) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = (detalle);
        this.item = parseInt(item);
    }
}
const medicamentos = [];
medicamentos.push(new Medicamento("Actron 600", 1500, ['x 20 Capsulas'], 1));
medicamentos.push(new Medicamento("Geniol 1g", 987, ['x 56 Comprimidos'], 0));
medicamentos.push(new Medicamento("Amoxidal Duo", 1040, ['x 16 Comprimidos'], 2));
medicamentos.push(new Medicamento("Frenaler Cort", 980, ['x 10 Comprimidos'], 5));
medicamentos.push(new Medicamento("Dorixina Migra", 2500, ['x 10 Comprimidos'], 7));
localStorage.setItem('medicamentos', JSON.stringify(medicamentos));


//-------------- Eleccion de un med --------------//


let almacenadas = localStorage.getItem('medicamentos');
if (almacenadas != null) {
    let array = JSON.parse(almacenadas);
    let salida = 'INGRESAR NUMERO DE ITEM DEL MEDICAMENTO \n';
    for (let index = 0; index < array.length; index++) {
        salida += index + ' -> ' + array[index].nombre + ' ' + array[index].detalle + ' $ ' + array[index].precio + '\n';
    }
    alert(salida);
    let eleccion = parseInt(prompt('INGRESAR NUMERO DE ITEM DEL MEDICAMENTO \n'));
    if ((eleccion >= 0) && (eleccion < array.length)) {
        alert("MEDICAMENTO SELECCIONAD0 " + array[eleccion].nombre + "su precio es $ " + array[eleccion].precio)
    } else {
        alert("ERROR DE SELECCION");
    }
}

//-------------- consultar la cobertura en el precio de medicamentos --------------//


let montoIngresado = parseInt(prompt("Ingrese precio de medicamento a consultar, brindamos porcentajes segun la cobertura de su plan de salud."));
let montoPagar

const porcentaje = [20, 30, 40, 50];
for (let i = 0; i < 4; i++) {
    if (montoIngresado <= 0) {
        alert("Ingrese un monto valido por favor!")
        break
    }

    montoPagar = montoIngresado * porcentaje[i] / 100
    alert("Con un descuento del " + porcentaje[i] + "%, Pagas tu medicamento $" + montoPagar);
}


//----------------Agregar a la lista para una reserva-----------//


const listaNombres = [];
let cantidad = 5;
do {
    let entrada = prompt("Ingresar nombre medicamento que necesita, (podra ingresar hasta cinco medicamentos en el listado)");
    listaNombres.push(entrada.toUpperCase());
    console.log(listaNombres.length);
} while (listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["Gracias por realizar su compra de medicamentos"]);

alert(nuevaLista.join("\n"));

//---------fin----------//

*/
//


class Medicamentox{
    constructor(nombre, detalle, precio) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
    }
}

let listaMedicamentos = [
    {nombre: "Actron 600", detalle: "capsulas x 20", precio: 1500},
    {nombre: "Geniol 1g", detalle: "comprimidos x 56", precio: 987},
    {nombre: "Amoxidal Duo", detalle: "comprimidos x 16", precio: 1040},
];

const agregarMedicamentos = () => {
    listaMedicamentos.forEach(el => {
        let nodo = document.createElement("div");
        nodo.className = "producto";
        nodo.setAttribute("id", el.nombre);
        nodo.innerHTML = `<h3>${el.nombre}</h3>
                        <p>${el.detalle}</p>
                        <p>${el.precio}</p>
                        `;
        document.getElementById("productos").appendChild(nodo);
    })
}


const agregarMedicamento = () =>{
    let nombre = document.querySelector("#nombre").value;
    let detalle = document.querySelector("#detalle").value;
    let precio = parseFloat(document.querySelector("#precio").value);

    let medicamentoNuevo = new Medicamentox(nombre, detalle, precio)
    listaMedicamentos.push(medicamentoNuevo)
    agregarMedicamentos();
    return medicamentoNuevo
}
