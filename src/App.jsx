
import { useState } from 'react';
import './App.css'

const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['/', '!', '$', '%', '&', '(', '¿', '?', '+', '<', '>'];

function App() {
  const [ entrada, setEntrada ] = useState('');
  const [ resp, setResp ] = useState('');
  const [ characters, setCharacters ] = useState(10)
  let box = [];

  const mas = () => {
    setCharacters(characters+1)
  }
  const menos = () => {
    setCharacters(characters-1)
  }

  const random = () => {
    const containerValue = [letter, numbers, symbols];
    let typeRandom = []

    for(let i = 0; i < characters; i++){
      typeRandom.push(containerValue[Math.floor(Math.random() * 3)])
    }

    const go = typeRandom.map(e => e[Math.floor(Math.random() * e.length)]).join('')
 
    return setResp(go)
  }

  return (
    <div className='App'>
      <h1>RANDOM PASSWORD</h1>
      <div className='numberCharacters'>
        <p>Numero de caracteres</p>
        <button onClick={()=>mas()}>+</button>
        <p>{characters}</p>
        <button onClick={()=>menos()}>-</button>
      </div>
      <div>
        <strong>PASSWORD:</strong>
        <p>{resp}</p>
      </div>
      <button onClick={()=>{random()}}>CREATE<br/>PASSWORD</button>
    </div>
  )
}

export default App