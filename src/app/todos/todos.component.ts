import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  highPriorityTasks: any = [];
  mediumPriorityTasks: any = [];
  lowPriorityTasks: any = [];
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTasks().subscribe((response: any) => {
      const {
        highPriorityTasks,
        mediumPriorityTasks,
        lowPriorityTasks
      }= this.todoService.getPriorityCategories(response);
      this.highPriorityTasks = highPriorityTasks;
      this.mediumPriorityTasks = mediumPriorityTasks;
      this.lowPriorityTasks = lowPriorityTasks; 
    });
  }

  listenDelete(data: any) {
    const {
      highPriorityTasks,
      mediumPriorityTasks,
      lowPriorityTasks
    }= this.todoService.getPriorityCategories(data);
    this.highPriorityTasks = highPriorityTasks;
    this.mediumPriorityTasks = mediumPriorityTasks;
    this.lowPriorityTasks = lowPriorityTasks; 
  }
  receiveTask(task: any) {
    this.todoService.addTask(task).subscribe(() => {
      this.todoService.getTasks().subscribe((response: any) => {
        const {
          highPriorityTasks,
          mediumPriorityTasks,
          lowPriorityTasks
        }= this.todoService.getPriorityCategories(response);
        this.highPriorityTasks = highPriorityTasks;
        this.mediumPriorityTasks = mediumPriorityTasks;
        this.lowPriorityTasks = lowPriorityTasks; 
      });
    });
  }
}
