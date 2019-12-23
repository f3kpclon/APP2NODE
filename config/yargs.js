const descripcion = {
    demand :  true,
    alias : 'd',
    description: 'Descripción de la tarea por hacer'
}
const completado = {
    default : true,
    alias : 'c',
    description : 'Marca como completada una tarea'

}


const argv = require('yargs')
.command('crear','Crea una tarea por hacer',{
    descripcion
})
.command('actualizar','Actualiza una tarea ya asignada',{
    descripcion,completado
})
.help()
.command('eliminar','elimina una tarea',{
descripcion
}).argv

module.exports ={
    argv
}