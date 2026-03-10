import {getDB} from '../db/db.js';

export function getTaskNames(): string[] {
    const rows = getDB().prepare('SELECT name_task FROM task').all() as {
        name_task: string;
    }[];
    return rows.map(row => row.name_task);
}