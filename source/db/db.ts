//Le agrego un alias a Database para que sea mas facil de usar en el resto del codigo, y tambien importo el tipo DatabaseType para poder usarlo en la variable db
import type { Database as DatabaseType } from "better-sqlite3"
import { initDB } from "./init.js";

//La variable db se inicializa como null, lo que indica que no hay una instancia de la base de datos creada
let db: DatabaseType | null = null

//El export de la funcion permite que otros archivos puedan importar y usar la funcion para obtener la instacia de la base de datos, si no existe se crea una nueva instancia, si ya existe se devuelve la instancia existente
export function getDB(): DatabaseType {
    if (!db) {
        db = initDB()
    }
    return db
}