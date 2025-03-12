import loveletter from '../loveletter.png';
import findapair from '../find a pair.png';
import { Link } from "react-router-dom";
import '../css/App.css';

function Home() {
  return (
    <>
      <div className="App">
        Welcome to my personal love letter to my beloved Virginia
      </div>
      <div className="DifferentPages">
        <div className="loveletterdiv">
          <img src={loveletter} alt="Loveletter" className="loveletter" />
          <br></br>

          <button className="loveletter-button"> <strong> Go to love letter </strong> </button>
        </div>
        <div className="findapairdiv">
          <img src={findapair} alt="find a pair" className="findapair" />
          <br></br>
          <Link to="/findapair">
            <button> <strong>Go to find a pair</strong> </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
