import * as React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

interface Todo {
  id: string;
  text: string;  
}

interface Props {

}
 
interface State {
  todos: Todo[];
}

class TodoList extends React.Component<Props,State>{
  constructor(props: Props){
    super(props);
    this.state = {
      todos: [{
        "id": "id1",
        "text": "hello"
      }]
    }
  }

  addTodo = (newTodoObj: Todo) => {
    this.setState(st => ({
      ...this.state,
      todos: this.state.todos.concat(newTodoObj)
    }))
  }

  removeTodo = (id:string) => {
    this.setState(st => ({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.id !== id)
    }))
  }
  
  render(){
    const allTodos = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        removeSelf={this.removeTodo}
      />
    ))
    return(
      <div>
      {allTodos}
      <TodoForm 
        addTodo={this.addTodo}
      />
      </div>
    )
  }

}

export default TodoList;