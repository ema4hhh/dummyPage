import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');

  const textChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const numberChange = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  };
  const buttonClick = (event) => {
    event.preventDefault();
    window.alert(`Hola! Tu nombre es: ${age} y tienes: ${name} años`);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type={'text'} placeholder='Ingrese su nombre' onChange={textChange} />
        <input type={'number'} placeholder='Ingrese su edad' onChange={numberChange} />
      </div>
      <button onClick={buttonClick}>
        Submit
      </button>
    </div>
  )
}

export default App
