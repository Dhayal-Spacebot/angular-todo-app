import { Component, OnInit } from '@angular/core';
import { faPlus, faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  faPlus = faPlus;
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  todos!: Todo[];

  constructor(private dataService:DataService){
 }
  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

}
