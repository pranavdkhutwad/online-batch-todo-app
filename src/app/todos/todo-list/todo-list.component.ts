import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() highPriorityList: any;
  @Input() mediumPriorityList: any;
  @Input() lowPriorityList: any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTask(id: string) {
    this.todoService.deleteTask(id).subscribe(() => {
      this.todoService.getTasks().subscribe((response: any) => {
        this.deleteEvent.emit(response);
      })
    });
  }
}
