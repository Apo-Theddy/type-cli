import Database from "better-sqlite3";
import type {Database as DatabaseType} from "better-sqlite3";

export const db: DatabaseType = new Database("db.sqlite")

db.prepare(`
    CREATE TABLE IF NOT EXISTS test_user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL)
    `).run()

export function getUserNames(): string[] {
    //La constante rows ejecuta una consulta sql para seleccionar el nombre de tabla test_user y devuelve un array de objetos con la propiedad name
    const rows = db.prepare("SELECT name FROM test_user").all() as { name: string }[]
    //La función map recorre el array de objetos y devuelve un nuevo array con solo los nombres
    return rows.map(row => row.name)
}