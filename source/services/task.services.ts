import {getDB} from '../db/db.js';
import { TasksQuery, InsertTask, UpdateTask, DeleteTask } from '../queries/tasks.queries.js';

const conexion = getDB();

export interface Task {
    id: string;
    name_task: string;
    description : string;
    status : string;
}

export interface NewTask{
    name_task: string;
    description : string;
    status : string;
}

export interface UpdateTaskData{
    name_task: string;
    description : string;
    status : string;
}

export function getTaskById(id: number): Task {
    return conexion
        .prepare(TasksQuery.getById)
        .get(id) as Task
}

export function getTasks(): Task[] {
    return conexion
        .prepare(TasksQuery.getTasks)
        .all() as Task[]
}

export function createTasks(task: NewTask){
    return conexion.prepare(InsertTask.insertTasks).run(task.name_task, task.description, task.status)
}

export function updateTask(id: number, task: UpdateTaskData) {
    return conexion.prepare(UpdateTask.updateTask).run(task.name_task, task.description, task.status, id)
}

export function deleteTask(id: number){
    return conexion.prepare(DeleteTask.deleteTask).run(id)
}