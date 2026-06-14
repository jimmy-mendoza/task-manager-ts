import type { Task } from "../types/task";
import { Priority, Status } from "../types/task";

class TaskManager {
    private tasks: Task[] = [];

    addTask(task:Task):void{
        this.tasks.push(task)
    }

    // devuleve las tareas diferentes a ese id
    removeTask(id:number):void{
        const newTasks = this.tasks.filter((task)=>task.id !== id)
        // guardamos las nuevas tareas 
        this.tasks = newTasks
    }

    // retornamos las nuestro array de Tareas
    allTasks():Task[] {
        return this.tasks
    }
}