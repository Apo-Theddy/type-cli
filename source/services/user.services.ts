import {getDB} from './db.js';

export function getUserNames(): string[] {
	//La constante rows ejecuta una consulta sql para seleccionar el nombre de tabla test_user y devuelve un array de objetos con la propiedad name
	const rows = getDB().prepare('SELECT name FROM test_user').all() as {
		name: string;
	}[];
	//La función map recorre el array de objetos y devuelve un nuevo array con solo los nombres
	return rows.map(row => row.name);
}
