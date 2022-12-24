import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { faFloppyDisk} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent {

  faFloppyDisk = faFloppyDisk;



  constructor(public  dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo){

  }


  onFormSubmit(form: NgForm){

    if(form.invalid){
      return
    }

    const updatedTodo = {
      ...this.todo,
      ...form.value
    }

    this.dialogRef.close(updatedTodo);
    

  }

  onClose(){
    this.dialogRef.close();
  }

}
