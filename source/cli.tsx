import React from 'react';
import {render} from 'ink';
import {App,Test} from './app.js';
import { getUserNames } from './services/index.js';
import { getDB } from './services/index.js';

render(<App />);

const insert = getDB().prepare('INSERT INTO test_user (name) VALUES (?)');
insert.run('Piero');
insert.run('Juan');
insert.run('Luis');

//names ejecuta la funcion que hace la consulta a la base de datos y devuelve el array
const names = getUserNames();
//Impre el arrat con los nombre de la tabla
console.log("Nombre: ", names);

render(<Test />);
