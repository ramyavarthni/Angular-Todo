import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO LIST'; 

  shownone:boolean =  true

  elseblock:boolean = true

  todo = ''

  todos:string[] = []

  addTodo() {
    console.log('todo:' + this.todo)
    this.todos.push(this.todo)
    this.todo = ''
  }
  removeTodo (index:number) {
    this.todos.splice(index, 1)
  }
  cancelTodo () {
    this.todo = ''
  }
  clearall () {
    this.todos = []
  }
  
}