import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';
import {
  faPlus,
  faCheck,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  public isMobile: boolean = false;
  constructor(
    private toaster: ToastrService,
    public breakpointObserver: BreakpointObserver
  ) {}

  faPlus = faPlus;
  faCheck = faCheck;
  faPen = faPen;
  faTrash = faTrash;

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 420px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  onTodolistClick() {
    this.todoClicked.emit();
  }
  onEditClicked() {
    this.editClicked.emit();
  }
  onDeleteClicked() {
    this.deleteClicked.emit();
    this.toaster.warning('Deleted Successfully!!', '', {
      timeOut: 1300,
    });
  }
}
