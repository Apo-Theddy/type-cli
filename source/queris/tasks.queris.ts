export class NameQuery{
    public static getname = 'SELECT id, name_task FROM task LIMIT 10 offset 0'
}

export class TaskQuery {
    public static getdescription = 'SELECT id, name_task, description, status FROM task WHERE id = ? LIMIT 10 offset 0'
}

export class InsertTask {
    public static insertTasks = 'INSERT INTO task (name_task, description, status) VALUES (?, ?, ?)'
}