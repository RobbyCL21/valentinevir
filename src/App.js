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
        <div className="loveletterdiv">
          <img src={loveletter} alt="Loveletter" className="loveletter" />
          <br></br>

          <button className="loveletter-button"> Go to love letter </button>
        </div>
        <div className="findapairdiv">
          <img src={findapair} alt="find a pair" className="findapair" />
          <br></br>
          
          <button> Go to find a pair </button>
        </div>
      </div>
    </>
  );
}

export default App;
