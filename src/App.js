import React from 'react';
import Login from './views/login'


import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <Login/>
      </div>
    )
  }





}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;