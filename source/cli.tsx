import React from 'react';
import {render} from 'ink';
import {App,Test} from './app.js';
import { getUserNames, getTaskDescriptions } from './services/index.js';
import { getDB } from './services/index.js';


render(<App />);

const insert = getDB().prepare('INSERT INTO test_user (name) VALUES (?)');
insert.run('Piero');
insert.run('Juan');
insert.run('Luis');

const insertask = getDB().prepare('INSERT INTO task (description) VALUES (?)');
insertask.run('Crear una funcion');
insertask.run('Crear una clase');
insertask.run('Crear un guardado');

//names ejecuta la funcion que hace la consulta a la base de datos y devuelve el array
const names = getUserNames();
const description = getTaskDescriptions();
//Impre el arrat con los nombre de la tabla
console.log(
    "Nombre: ", names,
    "Descripcion: ", description
);

render(<Test />);
