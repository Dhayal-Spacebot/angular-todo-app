import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { faPlus, faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();

  faPlus = faPlus;
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;


  onTodolistClick(){
    this.todoClicked.emit();
  }
  onEditClicked(){
    this.editClicked.emit();
  }


}
