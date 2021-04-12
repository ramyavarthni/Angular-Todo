import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO LIST'; 

  shownone:boolean =  false

  selectedtodos = null

  elseblock:boolean = true

  isEditing = false
    
  todo = ''

  todos:string[] = []

  addTodo() {
    console.log('todo:' + this.todo)
    this.todos.push(this.todo)
    this.todo = ''
  }
  editTodo (index:number) {
    this.todos.splice(index, 1,this.todo)
  }
  removeTodo (index:number) {
    this.todos.splice(index)
  }
  cancelTodo () {
    this.todo = ''
  }
  clearall () {
    this.todos = []
  }
  
}