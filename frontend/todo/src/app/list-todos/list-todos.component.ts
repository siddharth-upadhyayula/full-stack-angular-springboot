import { Component, OnInit } from '@angular/core';
import { NgIf, NgForOf, UpperCasePipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[] = [];

  message: string = '';
  // [
  //   new Todo (1, 'Pay credit card bill', false, new Date()),
  //   new Todo (1, 'Pay rent', false, new Date()),
  //   new Todo (1, 'Buy Groceries', false, new Date())
  //   // {id:1, description: },
  //   // {id:2, description: },
  //   // {id:3, description: }
  // ]

  // todo = {id:1, description: 'Pay credit card bill'}

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('sid').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('sid', id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Todo ${id} successful`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number){
    console.log(`update ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
 