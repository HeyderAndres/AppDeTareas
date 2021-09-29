
const archivoTareas = require('./funcionesDeTareas');

let solicitud = process.argv[2];

switch (solicitud) {
    case 'listar':
        console.log('listado de tareas')
        let datosArchivo = archivoTareas.leer //JSON.parse(archivoTareas.fs.readFileSync('./tareas.json', { encoding: 'utf-8' }))
        datosArchivo.forEach(item => {
            console.log(item)
        });
        break;
    case 'crear':
        let tareaNueva ={
            titulo:process.argv[3],
            estado: "pendiente",
        }
        archivoTareas.guardarTarea(tareaNueva);
        
    break
    case 'filtrarPorEstado':
        let estado = process.argv[3]
        console.log(archivoTareas.filtrarPorEstado(estado))

    break
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        break

    default:
        console.log('No entiendo qué quieres hacer.')
        break;
}

