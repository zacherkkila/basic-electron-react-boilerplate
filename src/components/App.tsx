import '../assets/css/App.css';
import React from 'react';

interface ExamplePropInterface {
  exampleVariable:string
}

const TypeExampleComponent = (props:ExamplePropInterface) => {
  return (
    <div>{props.exampleVariable}</div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <p>I hope you enjoy using basic-electron-react-boilerplate-typescript to start your dev off right!</p>
      <TypeExampleComponent exampleVariable={"I am a typed prop"} />
    </div>
  );
}

export default App
