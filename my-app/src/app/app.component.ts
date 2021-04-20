import { Component} from '@angular/core';
import {  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'TODO LIST'; 


  selectedIndex = '';
  todo = '';

  todos:string[] = []
  
  addTodo() {
    if (this.todo.length > 0) {
    console.log('todo:' + this.todo)
    this.todos.push(this.todo)
    this.todo = ''
    }
  }
  Edit (todo:'',index:'') {
    this.todo = todo
    this.selectedIndex = index
  }
  updateTodo () {   
  console.log(this.selectedIndex, 1, this.todo)  
  this.todos.splice(this.selectedIndex,1,this.todo)
  this.todo = ''
  }
  Delete(index:number) {
    console.log(index,1)
   this.todos.splice(index, 1)
  }
  cancelTodo () {
    this.todo = ''
  }
  clearall () {
    this.todos = []
  }
  
}