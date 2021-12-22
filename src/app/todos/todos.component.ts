import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  highPriorityTasks: any = [];
  mediumPriorityTasks: any = [];
  lowPriorityTasks: any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  receiveTask(task: any) {
    console.log('task data received ==>', task);
  }
}
