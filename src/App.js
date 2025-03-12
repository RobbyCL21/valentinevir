import logo from './logo.svg';
import loveletter from './loveletter.png';
import findapair from './find a pair.png';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        Welcome to my personal love letter to my beloved Virginia
      </div>
      <div className="DifferentPages">
        <img src={loveletter} alt="Loveletter" className="loveletter" />
        <img src={findapair} alt="find a pair" className="findapair" />
      </div>
    </>
  );
}

export default App;
