import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  showValidationError!:boolean;

  constructor(private dataService:DataService){
 }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList = () => {
    return this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form:NgForm){
    if(form.invalid){
            return this.showValidationError = true;
    }
    else{
      this.dataService.addNewTodo(new Todo(form.value.text))
      form.reset()
      this.getTodoList();
      return this.showValidationError = false;
    }  
  }

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo){
    // const index = this.todos.indexOf(todo);

  }

}
