export class TasksQuery {
    public static getById = 'SELECT id, name_task, description, status FROM task WHERE id = ? AND deleted_at IS NULL LIMIT 10 offset 0'

    public static getTasks = 'SELECT id, name_task FROM task WHERE deleted_at IS NULL LIMIT 10 offset 0'

}

export class InsertTask {
    public static insertTasks = 'INSERT INTO task (name_task, description, status) VALUES (?, ?, ?)'
}

export class UpdateTask {
    public static updateTask = "UPDATE task SET name_task = ?, description = ?, status = ? WHERE id = ?"
}

export class DeleteTask{
    public static deleteTask = "UPDATE task SET deleted_at = CURRENT_TIMESTAMP WHERE id = ?"
}