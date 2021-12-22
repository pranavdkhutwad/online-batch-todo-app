import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() taskDataEvent: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('f') todoForm?: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.taskDataEvent.emit(this.todoForm?.value);
  }
}
