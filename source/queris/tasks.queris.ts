export class NameQuery{
    public static getName = 'SELECT id, name_task FROM task LIMIT 10 offset 0'
}

export class TaskQuery {
    public static getDescription = 'SELECT id, name_task, description, status FROM task WHERE id = ? LIMIT 10 offset 0'
}

export class InsertTask {
    public static insertTasks = 'INSERT INTO task (name_task, description, status) VALUES (?, ?, ?)'
}