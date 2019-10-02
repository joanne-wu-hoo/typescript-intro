import * as React from 'react';
import {useState} from 'react';

export interface Props {
  name: string;
}

function Hello({name}: Props){
  const [enthusiasmLevel, setEnthusiasmLevel] = useState(1)

  if (enthusiasmLevel <= 0){
    throw new Error('You could be more enthusiastic :p')
  }

  const incrementEnthusiasmLevels = () => {
    setEnthusiasmLevel(enthusiasmLevel + 1)
  }

  const decrementEnthusiasmLevels = () => {
    setEnthusiasmLevel(enthusiasmLevel - 1)
  }

  return(
    <div>
      <p>{`Hello ${name}${getExclamationMarks(enthusiasmLevel)}`}</p>
      <button onClick={incrementEnthusiasmLevels}>+</button>
      <button onClick={decrementEnthusiasmLevels}>-</button>
    </div>
  )  
}

// helper functions

/** return numChars of !'s */
function getExclamationMarks(numChars: number){
  return Array(numChars+1).join('!');
}



export default Hello;