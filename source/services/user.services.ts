import {getDB} from '../db/db.js';

export function getUserNames() {
	//La constante rows ejecuta una consulta sql para seleccionar el nombre de tabla test_user y devuelve un array de objetos con la propiedad name
	const rows = getDB().prepare('SELECT name FROM test_user').all()
	//La función map recorre el array de objetos y devuelve un nuevo array con solo los nombres
	return rows
}