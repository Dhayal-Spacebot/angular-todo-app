import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [new Todo('Test 1'),new Todo('Test 2')];

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addNewTodo(input: Todo){
    this.todos.push(input);
  }

  updateTodo(index: number,updatedText: Todo){
    this.todos[index] = updatedText;
  }

  deleteTodo(index: number){
    this.todos.splice(index,1);
  }
}
