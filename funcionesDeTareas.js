const fs = require('fs');

const leer = JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));

const escribirJSON = function (datosAIngresar) {
    let datos = JSON.stringify(datosAIngresar,null,4)
    fs.writeFileSync('./tareas.json', datos,{encoding:'utf-8'})
    
    
}

const guardarTarea = function (objetoTarea) {
let lectura = leer;
lectura.push(objetoTarea)
escribirJSON(lectura)

}

const filtrarPorEstado = function (estado) {
    let lectura = leer;
    return lectura.filter(element => element.estado==estado);
}


module.exports = { leer, fs, escribirJSON,guardarTarea,filtrarPorEstado };
