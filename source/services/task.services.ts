import {getDB} from './db.js';

export function getTaskDescriptions(): string[] {
    const rows = getDB().prepare('SELECT description FROM task').all() as {
        description: string;
    }[];
    return rows.map(row => row.description);
}