import Database from "better-sqlite3"
//Le agrego un alias a Database para que sea mas facil de usar en el resto del codigo, y tambien importo el tipo DatabaseType para poder usarlo en la variable db
import type { Database as DatabaseType } from "better-sqlite3"

//La variable db se inicializa como null, lo que indica que no hay una instancia de la base de datos creada
let db: DatabaseType | null = null

function initDB(): DatabaseType {
    const database = new Database("db.sqlite")

    database.prepare(`
        CREATE TABLE IF NOT EXISTS test_user(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `).run()

    database.prepare(`
        CREATE TABLE IF NOT EXISTS task(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL
        )
    `).run()
    
    return database
}

//El export de la funcion permite que otros archivos puedan importar y usar la funcion para obtener la instacia de la base de datos, si no existe se crea una nueva instancia, si ya existe se devuelve la instancia existente
export function getDB(): DatabaseType {
    if (!db) {
        db = initDB()
    }

    return db
}