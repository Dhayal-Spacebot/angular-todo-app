import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  faPlus,
  faCheck,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  faPlus = faPlus;
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  todos!: Todo[];
  showValidationError!: boolean;

  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList = () => {
    return (this.todos = this.dataService.getAllTodos());
  };

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return (this.showValidationError = true);
    } else {
      this.dataService.addNewTodo(new Todo(form.value.text));
      form.reset();
      this.getTodoList();
      this.toaster.success('Added Successfully!!', '', {
        timeOut: 1300,
      });
      return (this.showValidationError = false);
    }
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '600px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }
}
