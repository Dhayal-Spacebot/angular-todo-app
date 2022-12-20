import { Injectable } from '@angular/core';
import { Todo, todo1 } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: any[]=[];
  


  constructor() { }

  getAllTodos(){
   let temp= new Todo();
   temp.text="hello";
  //  temp.completed=true;
   this.todos.push(temp);
   this.todos[0].

    console.log(this.todos);
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
