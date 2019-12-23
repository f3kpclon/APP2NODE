const fs = require('fs');

let listToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (error) => {
        if (error) throw new Error('No se pudo grabar', error);
    });
}

const cargarDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let toDo = {
        descripcion,
        completado: false
    };

    listToDo.push(toDo);

    guardarDB();

    return toDo;

}

const getListado = () => {
    cargarDB();
    return listToDo;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listToDo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listToDo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listToDo.filter(tarea => tarea.descripcion !== descripcion);

    if (listToDo.length === nuevoListado.length) {
        return false;
    } else {
        listToDo = nuevoListado;
        guardarDB();
        return true;
    }

}
module.exports = {
    borrar,
    actualizar,
    getListado,
    crear
}
