import * as React from 'react';
const uuid = require("uuid/v4");


interface Todo {
  id: string;
  text: string;  
}

interface State{
  value: string;
}

interface Props{
  addTodo(todo: Todo): any;
}

class TodoForm extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = (evt: any) => {
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit = (evt: any) => {
    evt.preventDefault();
    let newTodoObj = {
      id: uuid(),
      text: this.state.value
    }

    this.props.addTodo(newTodoObj);
    this.setState({value: ''});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;