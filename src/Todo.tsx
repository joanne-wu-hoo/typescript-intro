import * as React from 'react';

interface Props {
  id: string;
  text: string;
  removeSelf(id: string): any;
  // editTodo(id:string, value:string): any
}

function Todo({id, text, removeSelf}: Props){
  return(
    <div>
      {text}
      <button onClick={()=>removeSelf(id)}>X</button>
    </div>
  )
  
}

export default Todo;