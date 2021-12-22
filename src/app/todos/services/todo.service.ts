import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    constructor(private http: HttpClient) {}

    addTask(task: any) {
        return this.http.post('https://online-todo-app-b221c-default-rtdb.firebaseio.com/todos.json', task);
    }

    getTasks() {
        return this
            .http
            .get('https://online-todo-app-b221c-default-rtdb.firebaseio.com/todos.json')
            .pipe(map((obj: any) => {
                const tempArr = [];
                for (let key in obj) {
                    tempArr.push({ ...obj[key], id: key });
                }

                return tempArr;
            }));
    }

    deleteTask(taskId: string) {
        return this.http.delete(`https://online-todo-app-b221c-default-rtdb.firebaseio.com/todos/${taskId}.json`);
    }

    getPriorityCategories(arr: any): any {
        const highPriorityTasks = arr.filter((obj: any) => obj.taskPriority === 1);
        const mediumPriorityTasks = arr.filter((obj: any) => obj.taskPriority === 2);
        const lowPriorityTasks = arr.filter((obj: any) => obj.taskPriority === 3);

        return {
            highPriorityTasks,
            mediumPriorityTasks,
            lowPriorityTasks
        };
        
    }
}