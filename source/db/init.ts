import type { Database as DatabaseType } from "better-sqlite3"
import Database from "better-sqlite3"

export function initDB(): DatabaseType {
    const database = new Database("db.sqlite")

    database.prepare(`
        CREATE TABLE IF NOT EXISTS task(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name_task TEXT NOT NULL,
            description TEXT NOT NULL,
            status TEXT NOT NULL,
            responsible TEXT NOT NULL
        )
    `).run()
    
    return database
}
