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
        Here come the different pages
        <img src={loveletter} alt="Loveletter" />
        <img src={findapair} alt="find a pair" />

      </div>
    </>
  );
}

export default App;
