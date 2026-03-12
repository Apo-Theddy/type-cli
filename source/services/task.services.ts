import {getDB} from '../db/db.js';
import { TaskQuery, NameQuery, InsertTask } from '../queris/tasks.queris.js';

const conexion = getDB();

interface Task {
    id: string;
    name_task: string;
    description : string;
    status : string;
}

interface NewTask{
    name_task: string;
    description : string;
    status : string;
}

export function getTask(): Task []{
    return conexion.prepare(NameQuery.getname).all() as Task[]
}

export function getDescriptionTask(id: number): Task{
    return conexion.prepare(TaskQuery.getdescription).get(id) as Task 
    
}

export function createTasks(task: NewTask){
    return conexion.prepare(InsertTask.insertTasks).run(task.name_task, task.description, task.status)
}