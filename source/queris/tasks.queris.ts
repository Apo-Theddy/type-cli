export class TasksQuery {
    public static getById = 'SELECT * FROM task WHERE id = ? LIMIT 10 offset 0'
    public static getTasks = 'SELECT * FROM task LIMIT 10 offset 0'

}

export class InsertTask {
    public static insertTasks = 'INSERT INTO task (name_task, description, status) VALUES (?, ?, ?)'
}

export class UpdateTask {
    public static updateTask =
        "UPDATE task SET name_task = ?, description = ?, status = ? WHERE id = ?"
}