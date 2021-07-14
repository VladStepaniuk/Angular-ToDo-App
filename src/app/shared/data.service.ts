import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: ToDo[] = [
    new ToDo('this is a test text'),
    new ToDo('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente illum alias placeat amet! Ea aut corrupti, odit deleniti ullam exercitationem aspernatur nulla odio magni soluta ipsam incidunt consectetur explicabo nesciunt.')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: ToDo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: ToDo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }
}
