import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [];

  constructor() { }

  getAllTodos(){
    const list = JSON.parse(localStorage.getItem("todolist") as string) as Todo[];
    if(list){
      this.todos = list
    }
    return this.todos;
  }

  addNewTodo(input: Todo){
    this.todos.push(input);
    localStorage.setItem("todolist", JSON.stringify(this.todos))
    
  }

  updateTodo(index: number,updatedText: Todo){
    this.todos[index] = updatedText;
  }

  deleteTodo(index: number){
    this.todos.splice(index,1);
  }
}
