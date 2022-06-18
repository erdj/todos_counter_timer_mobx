import { makeAutoObservable } from 'mobx';

class Todo {
    
    todos=[]
    add_arr = []

    constructor() {
        makeAutoObservable(this)
    }
    
    addTodo(todo) {
        this.todos.push(todo)
    }
    
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)         
    }
    
    completeTodo(todo) {
        todo.completed = !todo.completed 
    }

    fetchTodos() {
        if (this.add_arr.length == 0) {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => {
                    this.add_arr = [...this.todos, ...json]
                    this.todos = [...this.add_arr]
                })
        } else {
            if (this.todos.length == 0) {
                console.log('hello');
                this.todos = [...this.add_arr]
            } else {
                this.todos = []
            }
        }
    }

}

export default new Todo()