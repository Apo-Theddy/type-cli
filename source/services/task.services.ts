import {getDB} from '../db/db.js';
import { TaskQuery, NameQuery, InsertTask } from '../queris/tasks.queris.js';

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

export function getTask(id?: number): Task | Task[] {
    if (id) {
        return conexion.prepare(TaskQuery.getDescription).get(id) as Task
    }
    return conexion.prepare(NameQuery.getName).all() as Task[]
}

export function createTasks(task: NewTask){
    return conexion.prepare(InsertTask.insertTasks).run(task.name_task, task.description, task.status)
}