import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <h1> Welcome <span className="wave" >👋</span>😄 </h1>
                 
        <Typical
          loop={1}
          wrapper='h4'
          steps={['My name is Steven Yan.']}
        />

      </header>
    </div>
  );
}

export default App;
