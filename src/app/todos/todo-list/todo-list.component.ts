import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() highPriorityList: any;
  @Input() mediumPriorityList: any;
  @Input() lowPriorityList: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
